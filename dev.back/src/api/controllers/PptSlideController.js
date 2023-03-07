import multer from 'multer';
import resourcesModel from '../models/Resources.js';
import * as url2pdf from 'url2pdf';
import { getHtmlTableTemplate } from "../html/partials/HtmlContentTable.js";
import { getHtmlTableDbTemplate } from "../html/partials/HtmlContentDbTable.js";
import fs from "fs";
import * as execProcess from "child-process-promise";


class SlideController {
    /**
     *
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async fetchItems(req, res) {
        const { limit, offset, queryFilter, column, sort, page } = req.query;
        if (!req.user) {
            return res.status(401).json('Access deny');
        } else {
            const data = await resourcesModel.fetchItems(page, limit, offset, queryFilter, column, sort);
            return res.status(200).json({ count: data.size, items: data.items});
        }
    }

    async fetchItem(req, res) {
        const { queryFilter } = req.body;
        if (!req.user) {
            return res.status(401).json('Access deny');
        } else {
            const data = await resourcesModel.fetchItem(req.params.id);
            data.colorSettings = JSON.parse(data.item.color_settings);
            data.colors = JSON.parse(data.item.color_settings);
            let htmlContent = await getHtmlTableDbTemplate(data);
            data.html = htmlContent;

            return res.status(200).json(data);
        }
    }

    /**
     *
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async bulkDelete (req, res) {
        if (!req.user) {
            return res.status(401).json('Access deny');
        }
        const ids = [];
        JSON.parse(req.body.data).filter(id => id.checked).forEach(data => ids.push(data.id));
        await resourcesModel.bulkDelete(ids, req.user.id);

        return res.status(200).json({ success: true });
    }


    /**
     *
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async uploadLogo (req, res) {
        const dirUpload = `${process.env.DOWNLOAD_FOLDER}/logos`;
        if (!fs.existsSync(dirUpload)) {
            fs.mkdirSync(dirUpload);
        }
        const _filePrefix = Date.now();
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, `public/uploads/logos`);
            },
            filename: function (req, file, cb) {
                cb(null, _filePrefix + '-' + file.originalname);
            }
        });
        const upload = multer({ storage: storage }).single('logo');
        upload(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err);
            } else if (err) {
                return res.status(500).json(err);
            }
            if (req.file) {
                // return res.status(200).json({ success: true, fileName: _filePrefix + '-' + req.file.filename });
                return res.status(200).json({ success: true, fileName: req.file.filename });
            } else {
                return res.status(200).json({ success: true, fileName: '' });
            }
        });
    }

    // export OPENSSL_CONF=/dev/null;

    async submitSlideData(req, res) {
        const parsedData = JSON.parse(req.body.data);
        const rowId = req.body.rowId;
        const type = req.body.type;
        const resultInsert = await resourcesModel.saveData(parsedData, rowId);
        let htmlContent = await getHtmlTableTemplate(parsedData);
        const _opts = {
            paperSize: {
                format: "A4",
                orientation: 'landscape',
                margin: '0.3cm'
            },
            saveDir: process.env.FS_PDF_FOLDER,
            idLength: 30,
            possibleIdChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            loadTimeout: 500,
            autoCleanFileAgeInSec: 20
        };
        let fileName;
        let pptFileNameWitoutExt;
        try {
            await url2pdf.renderFromHTML(htmlContent, _opts)
                .then(async function(path){
                    fileName = path.replace(process.env.FS_PDF_FOLDER+'/', '');
                    if (type === 'ppt') {
                        pptFileNameWitoutExt = fileName.replace('.pdf', '');
//                         console.log(`curl --location --request POST 'https://api.cloudmersive.com/convert/pdf/to/pptx' \\
// --header 'Content-Type: multipart/form-data' \\
// --header 'Apikey: 22055829-22cf-40cb-8b48-313a687e8f51' \\
// --form 'inputFile=@"${process.env.FS_PDF_FOLDER}/${pptFileNameWitoutExt}.pdf"' --output "${process.env.FS_PPT_FOLDER}/${pptFileNameWitoutExt}.ppt"`);
                        execProcess.exec(
`curl --location --request POST 'https://api.cloudmersive.com/convert/pdf/to/pptx' \\
--header 'Content-Type: multipart/form-data' \\
--header 'Apikey: 22055829-22cf-40cb-8b48-313a687e8f51' \\
--form 'inputFile=@"${process.env.FS_PDF_FOLDER}/${pptFileNameWitoutExt}.pdf"' --output "${process.env.FS_PPT_FOLDER}/${pptFileNameWitoutExt}.ppt"`)
                            .then(function (result) {
                                var stdout = result.stdout;
                                var stderr = result.stderr;
                                return res.status(200).json({
                                    success: true,
                                    objectId: resultInsert.id,
                                    fileName: process.env.API_URL+process.env.WS_PPT_FOLDER+'/'+pptFileNameWitoutExt+'.ppt'
                                });
                            })
                            .catch(function (err) {
                                console.error('ERROR: ', err);
                            });
                    } else {
                        return res.status(200).json({
                            success: true,
                            objectId: resultInsert.id,
                            fileName: process.env.API_URL+process.env.WS_PDF_FOLDER+'/'+fileName
                        });
                    }
                });
        } catch (e) {
            console.log('Error generate PDF');
            console.log(e.message);
            return res.status(200).json({
                success: false,
                objectId: resultInsert.id,
                fileName: null
            });
        }
    }
}

export default new SlideController();


// curl --location --request POST 'https://api.cloudmersive.com/convert/pdf/to/pptx' \
// --header 'Content-Type: multipart/form-data' \
// --header 'Apikey: 22055829-22cf-40cb-8b48-313a687e8f51' \
// --form 'inputFile=@"/Users/victory/WEB/tmp/SsqbvFyHD3WeafvUmgl1KY10wJHfaT.pdf"' --output "/Users/victory/WEB/tmp/456.ppt"
