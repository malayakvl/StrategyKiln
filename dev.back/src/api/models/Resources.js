import pool from './connect.js';
import multer from 'multer';
import { logger } from '../../common/logger.js';
import fs from "fs";

/**
 * Settings model
 */
class Resources {
    async fileUpload (req, res) {
        // const dirUpload = `${process.env.DOWNLOAD_FOLDER}/logos`;
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, `public/uploads/logos`);
            },
            filename: function (req, file, cb) {
                cb(null, Date.now() + '-' + file.originalname);
            }
        });
        const upload = multer({ storage: storage }).single('file');
        upload(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err);
            } else if (err) {
                return res.status(500).json(err);
            }
            const dataUser = {};
            if (req.file) {
                dataUser.file = `/uploads/logos/${req.file.filename}`;
            }
            return res.status(200).json({ success: true });
        });
    }

    async saveData(data, rowId) {
        const client = await pool.connect();
        let query;
        if (!rowId) {
            query =  `INSERT INTO data.resources (
                            company_name, 
                            company_head, 
                            logo,
                            strengths,
                            weaknesses,
                            opportunities,
                            threats,
                            threats2opportunities,
                            weaknesses2strengths,
                            color_settings
                        )
                VALUES (
                    $$${data.companyData.company_name}$$, 
                    $$${data.companyData.company_headline}$$,
                    $$${data.companyData.company_logo}$$,
                    $$${JSON.stringify(data.strengthsData)}$$,
                    $$${JSON.stringify(data.weaknessesData)}$$,
                    $$${JSON.stringify(data.opportunitiesData)}$$,
                    $$${JSON.stringify(data.threatsData)}$$,
                    $$${JSON.stringify(data.threats2OpportunitiesData)}$$,
                    $$${JSON.stringify(data.weaknesses2StrengthsData)}$$,
                    $$${JSON.stringify(data.colorSettings)}$$
                ) RETURNING id;`;
        } else {
            query =  `UPDATE data.resources SET
                        company_name = $$${data.companyData.company_name}$$,
                        company_head = $$${data.companyData.company_headline}$$,
                        logo = $$${data.companyData.company_logo}$$,
                        strengths = $$${JSON.stringify(data.strengthsData)}$$,
                        weaknesses = $$${JSON.stringify(data.weaknessesData)}$$,
                        opportunities = $$${JSON.stringify(data.opportunitiesData)}$$,
                        threats = $$${JSON.stringify(data.threatsData)}$$,
                        threats2opportunities = $$${JSON.stringify(data.threats2OpportunitiesData)}$$,
                        weaknesses2strengths = $$${JSON.stringify(data.weaknesses2StrengthsData)}$$,
                        color_settings = $$${JSON.stringify(data.colorSettings)}$$
                      WHERE id = '${rowId}'`;
        }
        try {
            const res = await client.query(query);
            // const insertedRowId = !rowId ? res.rows[0].id : rowId;

            // return { success: true, id: res.rows[0].id };
            return { success: true, id: !rowId ? res.rows[0].id : rowId };
        } catch (e) {
            console.log('error message', e.message);
            if (process.env.NODE_ENV === 'development') {
                logger.log(
                    'error',
                    'Settings error:',
                    { message: e.message }
                );
            }
            throw new Error(e);
        } finally {
            client.release();
        }
    }

    async updatePdfData(fileName, id) {
        const client = await pool.connect();
        const query = `UPDATE data.resources SET pdfFileName=$$${fileName}$$ WHERE id=${id}`;

        try {
            await client.query(query);

            return { success: true };
        } catch (e) {
            console.log('error message', e.message);
            if (process.env.NODE_ENV === 'development') {
                logger.log(
                    'error',
                    'Settings error:',
                    { message: e.message }
                );
            }
            throw new Error(e);
        } finally {
            client.release();
        }
    }

    /**
     *
     *
     * @param page
     * @param perPage
     * @param reqOffset
     * @param filters
     * @param column
     * @param sort
     * @returns {Promise<{error: {code: number, message: string}, items: null}|{size: *, error: null, items: (*|*[])}>}
     */
    async fetchItems (page, perPage = 25, reqOffset = null, filters, column, sort) {
        const client = await pool.connect();
        try {
            const _filters = JSON.parse(filters);
            // console.log(`SELECT * FROM common__tools._select_total_from_table_by_where('data', 'resources', 'id');`);
            const _total = await client.query(`SELECT * FROM common__tools._select_total_from_table_by_where('data', 'resources', 'id');`);
            const size = _total.rows[0].total;
            let offset;
            if (reqOffset) {
                offset = reqOffset;
            } else {
                offset = (Number(page) - 1) * Number(perPage);
            }

            const rowsQuery = `SELECT * FROM data.get_requests_list(${perPage}, ${offset}, '${JSON.stringify(_filters)}', '${column} ${sort}');`;
            const res = await client.query(rowsQuery);
            const items = res.rows.length > 0 ? res.rows : [];
            const error = null;

            return {
                items,
                size,
                error
            };

        } catch (e) {
            if (process.env.NODE_ENV === 'development') {
                logger.log(
                    'error',
                    'Model error (Resources.fetchItems):',
                    { message: e.message }
                );
            }
            console.log('[Resources.fetchItems] e.message = ', e.message);
            const items = null;
            const error = {
                code: 500,
                message: 'Error get list of Buyers'
            };
            return {
                items,
                error
            };
        } finally {
            client.release();
        }
    }

    async fetchItem (itemId) {
        const client = await pool.connect();
        // console.log();
        try {
            // const _filters = JSON.parse(filters);
            const itemQuery = `SELECT * FROM data.resources WHERE id='${itemId}';`;
            const res = await client.query(itemQuery);
            const item = res.rows.length > 0 ? res.rows[0] : {};
            const error = null;

            return {
                item,
                error
            };

        } catch (e) {
            if (process.env.NODE_ENV === 'development') {
                logger.log(
                    'error',
                    'Model error (Buyers.fetchItem):',
                    { message: e.message }
                );
            }
            console.log('[Buyers.fetchItem] e.message = ', e.message);
            const item = null;
            const error = {
                code: 500,
                message: 'Error get Buyer'
            };
            return {
                item,
                error
            };
        } finally {
            client.release();
        }
    }

    async bulkDelete (ids) {
        const client = await pool.connect();
        try {
            const SQL = `SELECT * FROM data.resources WHERE id IN (${ids.join(',')})`;
            const res = await client.query(SQL);
            if (res.rows.length > 0) {
                res.rows.forEach(item => {
                    const logo = item.logo;
                    if (logo) {
                        fs.unlink(`${process.env.DOWNLOAD_FOLDER}/${logo.replace('/uploads', '')}`,function(err){
                            if(err) return console.log(err);
                        });
                    }
                });
                await client.query(`DELETE FROM data.resources WHERE id IN (${ids.join(',')})`);
                return true;
            }
        } catch (e) {
            if (process.env.NODE_ENV === 'development') {
                logger.log(
                    'error',
                    'Model error bulk delete:',
                    { message: e.message }
                );
            }
            return null;
        } finally {
            client.release();
        }
    }
}

export default new Resources();
