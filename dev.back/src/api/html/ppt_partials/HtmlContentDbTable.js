import { swotLogoTable } from "./SwotLogoTable.js";
import { opportunitiesIcon, strengthsIcon, threatsIcon, weaknessesIcon } from "./Icons.js";
import {
    opportunitiesContent,
    strenthsContent,
    threats2OpportunitiesContent,
    threatsContent,
    weaknesses2StrengthsContent,
    weaknessesContent,
    companyContent
} from "./SwotContent.js";

export const getHtmlTableDbTemplate = (data) =>
    `
        <div style="width: 790px; margin:0 auto;background-color:#fff;">
            <table style="height: 100%;">
                <tr>
                    <td style="vertical-align: middle;">
                        <div style="width: 100%; font-style: normal; font-weight: 300; margin: 0 auto; position: relative;background-color:#fff;">
                            <div style="background-repeat: no-repeat;
                                        position: absolute;
                                        top: calc(50% - 60px);
                                        width: 130px;
                                        height: 130px;
                                        left: calc(50% - 64px);
                                        z-index: 999;"
                            >
                                <svg width="130" height="130" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="120" height="120" fill="#ED5829" />
                                    <rect y="120" width="120" height="120" fill="#FCAB32" />
                                    <rect x="120" width="120" height="120" fill="#FCAB32" />
                                    <rect x="120" y="120" width="120" height="120" fill="#ED5829" />
                                    <path d="M69.5 49.6818C69.2576 47.5303 68.2576 45.8636 66.5 44.6818C64.7424 43.4848 62.5303 42.8864 59.8636 42.8864C57.9545 42.8864 56.303 43.1894 54.9091 43.7955C53.5152 44.3864 52.4318 45.2045 51.6591 46.25C50.9015 47.2803 50.5227 48.4545 50.5227 49.7727C50.5227 50.8788 50.7803 51.8333 51.2955 52.6364C51.8258 53.4394 52.5152 54.1136 53.3636 54.6591C54.2273 55.1894 55.1515 55.6364 56.1364 56C57.1212 56.3485 58.0682 56.6364 58.9773 56.8636L63.5227 58.0455C65.0076 58.4091 66.5303 58.9015 68.0909 59.5227C69.6515 60.1439 71.0985 60.9621 72.4318 61.9773C73.7652 62.9924 74.8409 64.25 75.6591 65.75C76.4924 67.25 76.9091 69.0455 76.9091 71.1364C76.9091 73.7727 76.2273 76.1136 74.8636 78.1591C73.5152 80.2045 71.553 81.8182 68.9773 83C66.4167 84.1818 63.3182 84.7727 59.6818 84.7727C56.197 84.7727 53.1818 84.2197 50.6364 83.1136C48.0909 82.0076 46.0985 80.4394 44.6591 78.4091C43.2197 76.3636 42.4242 73.9394 42.2727 71.1364H49.3182C49.4545 72.8182 50 74.2197 50.9545 75.3409C51.9242 76.447 53.1591 77.2727 54.6591 77.8182C56.1742 78.3485 57.8333 78.6136 59.6364 78.6136C61.6212 78.6136 63.3864 78.303 64.9318 77.6818C66.4924 77.0455 67.7197 76.1667 68.6136 75.0455C69.5076 73.9091 69.9545 72.5833 69.9545 71.0682C69.9545 69.6894 69.5606 68.5606 68.7727 67.6818C68 66.803 66.947 66.0758 65.6136 65.5C64.2955 64.9242 62.803 64.4167 61.1364 63.9773L55.6364 62.4773C51.9091 61.4621 48.9545 59.9697 46.7727 58C44.6061 56.0303 43.5227 53.4242 43.5227 50.1818C43.5227 47.5 44.25 45.1591 45.7045 43.1591C47.1591 41.1591 49.1288 39.6061 51.6136 38.5C54.0985 37.3788 56.9015 36.8182 60.0227 36.8182C63.1742 36.8182 65.9545 37.3712 68.3636 38.4773C70.7879 39.5833 72.697 41.1061 74.0909 43.0455C75.4849 44.9697 76.2121 47.1818 76.2727 49.6818H69.5Z" fill="white"/>
                                    <path d="M43.2273 204L30.3182 157.455H37.7045L46.7727 193.5H47.2045L56.6364 157.455H63.9545L73.3864 193.523H73.8182L82.8636 157.455H90.2727L77.3409 204H70.2727L60.4773 169.136H60.1136L50.3182 204H43.2273Z" fill="white"/>
                                    <path d="M161.818 43.5V37.4545H197.841V43.5H183.318V84H176.318V43.5H161.818Z" fill="white"/>
                                    <path d="M200.545 180.727C200.545 185.697 199.636 189.97 197.818 193.545C196 197.106 193.508 199.848 190.341 201.773C187.189 203.682 183.606 204.636 179.591 204.636C175.561 204.636 171.962 203.682 168.795 201.773C165.644 199.848 163.159 197.098 161.341 193.523C159.523 189.947 158.614 185.682 158.614 180.727C158.614 175.758 159.523 171.492 161.341 167.932C163.159 164.356 165.644 161.614 168.795 159.705C171.962 157.78 175.561 156.818 179.591 156.818C183.606 156.818 187.189 157.78 190.341 159.705C193.508 161.614 196 164.356 197.818 167.932C199.636 171.492 200.545 175.758 200.545 180.727ZM193.591 180.727C193.591 176.939 192.977 173.75 191.75 171.159C190.538 168.553 188.871 166.583 186.75 165.25C184.644 163.902 182.258 163.227 179.591 163.227C176.909 163.227 174.515 163.902 172.409 165.25C170.303 166.583 168.636 168.553 167.409 171.159C166.197 173.75 165.591 176.939 165.591 180.727C165.591 184.515 166.197 187.712 167.409 190.318C168.636 192.909 170.303 194.879 172.409 196.227C174.515 197.561 176.909 198.227 179.591 198.227C182.258 198.227 184.644 197.561 186.75 196.227C188.871 194.879 190.538 192.909 191.75 190.318C192.977 187.712 193.591 184.515 193.591 180.727Z" fill="white"/>
                                </svg>
                            </div>
        
                            <table style="width: 790px;padding: 0; margin: 0;background-color:#fff;" id="viewBackendTable">
                                <!-- BORDERED AND SWOT ICONS TOP -->
                                <tr style="background: #fff;" id="rowTop">
                                    <td class="td-left" style="position:relative;background:#fff;height: 30px;padding:0;border-color: #fff;margin:0;">
                                        <div style="
                                                position: absolute;
                                                top: 2px;
                                                left: 1px;
                                                background: #ED5829;
                                                width: 100%;
                                                border-radius: 8px 8px 0 0;
                                                display: block;
                                                margin: 0;
                                                padding: 1px 1px;
                                                height: 31px;">
                                            <div style="
                                                background: #fff;
                                                width: 100%;
                                                border-radius: 8px 8px 0 0;
                                                border-top: 0;
                                                border-bottom: 0;
                                                height: 32px;
                                            ">
        
                                            </div>
                                        </div>
        
                                        <div style="position: absolute;
                                                    width: 32px;
                                                    z-index: 999;;
                                                    height: 32px;
                                                    top: 28px;
                                                    left: -14px;
                                        ">
                                            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="32" cy="32" r="30"
                                                        fill="#ED5829"
                                                        stroke="white"
                                                        strokeWidth="4"
                                                />
                                                <path d="M38 30H37.25H38ZM38 40H38.75H38ZM42 40H42.75H42ZM42 30H41.25H42ZM22 38H22.75H22ZM22
                            40H21.25H22ZM26 40H25.25H26ZM26 38H26.75H26ZM30 34H29.25H30ZM30 40H30.75H30ZM34 40H34.75H34ZM34
                            34H33.25H34ZM39 21.25C38.5858 21.25 38.25 21.5858 38.25 22C38.25 22.4142
                            38.5858 22.75 39 22.75V21.25ZM41.25 25C41.25 25.4142 41.5858 25.75 42 25.75C42.4142 25.75
                            42.75 25.4142 42.75 25H41.25ZM41.4702 23.5843C41.7929 23.3246 41.844 22.8525 41.5843
                            22.5298C41.3246 22.2071 40.8525 22.156 40.5298 22.4157L41.4702 23.5843ZM21.9049
                            31.256C21.4941 31.3085 21.2035 31.6842 21.256 32.0951C21.3086 32.5059 21.6842 32.7965
                            22.0951 32.744L21.9049 31.256ZM41.25 30V40H42.75V30H41.25ZM38.75 40V30H37.25V40H38.75ZM38.75
                            30C38.75 29.3096 39.3096 28.75 40 28.75V27.25C38.4812 27.25 37.25 28.4812 37.25 30H38.75ZM40
                            41.25C39.3096 41.25 38.75 40.6904 38.75 40H37.25C37.25 41.5188 38.4812 42.75 40
                            42.75V41.25ZM41.25 40C41.25 40.6904 40.6904 41.25 40 41.25V42.75C41.5188 42.75 42.75
                            41.5188 42.75 40H41.25ZM42.75 30C42.75 28.4812 41.5188 27.25 40 27.25V28.75C40.6904
                            28.75 41.25 29.3096 41.25 30H42.75ZM25.25 38L25.25 40H26.75L26.75 38H25.25ZM22.75 40L22.75
                            38H21.25L21.25 40H22.75ZM22.75 38C22.75 37.3096 23.3096 36.75 24 36.75V35.25C22.4812
                            35.25 21.25 36.4812 21.25 38H22.75ZM24 41.25C23.3096 41.25 22.75 40.6904 22.75
                            40H21.25C21.25 41.5188 22.4812 42.75 24 42.75V41.25ZM25.25 40C25.25 40.6904 24.6904
                            41.25 24 41.25V42.75C25.5188 42.75 26.75 41.5188 26.75 40H25.25ZM26.75 38C26.75 36.4812
                            25.5188 35.25 24 35.25V36.75C24.6904 36.75 25.25 37.3096 25.25 38H26.75ZM33.25
                            34V40H34.75V34H33.25ZM30.75 40V34H29.25V40H30.75ZM30.75 34C30.75 33.3096 31.3096 32.75 32
                            32.75V31.25C30.4812 31.25 29.25 32.4812 29.25 34H30.75ZM32 41.25C31.3096 41.25 30.75 40.6904
                            30.75 40H29.25C29.25 41.5188 30.4812 42.75 32 42.75V41.25ZM33.25 40C33.25 40.6904 32.6904
                            41.25 32 41.25V42.75C33.5188 42.75 34.75 41.5188 34.75 40H33.25ZM34.75 34C34.75
                            32.4812 33.5188 31.25 32 31.25V32.75C32.6904 32.75 33.25 33.3096 33.25 34H34.75ZM39
                            22.75H41V21.25H39V22.75ZM41.25 23V25H42.75V23H41.25ZM41 22.75C41.1381 22.75 41.25
                            22.8619 41.25 23H42.75C42.75 22.0335 41.9665 21.25 41 21.25V22.75ZM40.5298
                            22.4157C36.5781 25.5961 33.6185 27.581 30.8097 28.8837C28.0122 30.1812 25.3286 30.8186
                            21.9049 31.256L22.0951 32.744C25.6135 32.2944 28.4591 31.6274 31.4408 30.2445C34.411
                            28.8669 37.4804 26.7953 41.4702 23.5843L40.5298 22.4157Z"
                                                      fill="white"/>
                                                <path d="M63.1393 32C63.6146 32 64.0012 31.6145 63.9884 31.1393C63.8263 25.1114 61.9637 19.2453
                                58.607 14.2218C55.0908 8.95938 50.0931 4.85786 44.2459 2.43585C38.3986 0.0138507
                                31.9645 -0.619856 25.7571 0.614871C19.8314 1.79356 14.3664 4.62442 9.98938
                                8.77215C9.64434 9.09912 9.64507 9.64507 9.9812 9.9812V9.9812C10.3173 10.3173
                                10.8615 10.3163 11.2071 9.98986C15.343 6.08259 20.5012 3.41549 26.0929
                                2.30322C31.9664 1.13491 38.0544 1.73453 43.5871 4.02624C49.1198 6.31796 53.8487
                                10.1988 57.1757 15.1781C60.3432 19.9186 62.1047 25.4519 62.2663 31.1393C62.2799
                                31.6145 62.6639 32 63.1393 32V32Z"
                                                      fill="#ED5829"
                                                />
                                                <path d="M0.86071 32C0.385353 32 -0.00120544 32.3855 0.01157 32.8607C0.205875
                                40.0866 2.84213 47.0437 7.50405 52.59C12.3508 58.3562 19.0764 62.2278
                                26.4968 63.5232C33.9172 64.8187 41.5567 63.4549 48.0705 59.672C54.3359
                                56.0333 59.1735 50.3809 61.8046 43.6484C61.9777 43.2056 61.7446 42.7119
                                61.2974 42.5508C60.8501 42.3898 60.3581 42.6224 60.1844 43.0649C57.6911
                                49.4163 53.121 54.7482 47.206 58.1834C41.0426 61.7628 33.814 63.0532
                                26.7928 61.8275C19.7716 60.6017 13.4078 56.9384 8.8218 51.4824C4.42062
                                46.2463 1.9275 39.6813 1.73365 32.8607C1.72015 32.3856 1.33607 32 0.86071 32Z"
                                                      fill="#ED5829"
                                                />
                                            </svg>
                                        </div>
        
                                    </td>
                                    <td style="border-color: transparent;"></td>
                                    <td class="td-right" style="position:relative;background:#fff;height: 30px;padding:0;border-color: #fff;margin:0;">
                                        <div style="
                                                position: absolute;
                                                top: 2px;
                                                left: -1px;
                                                background: #FCAB32;
                                                width: 100%;
                                                border-radius: 8px 8px 0 0;
                                                display: block;
                                                margin: 0;
                                                padding: 1px 1px;
                                                height: 31px;">
                                            <div style="
                                                background: #fff;
                                                width: 100%;
                                                border-radius: 8px 8px 0 0;
                                                border-top: 0;
                                                border-bottom: 0;
                                                height: 32px;
                                            ">
        
                                            </div>
                                        </div>
        
                                        <div style="position: absolute;
                                                    width: 32px;
                                                    z-index: 999;;
                                                    height: 32px;
                                                    top: 28px;
                                                    right: -14px;
                                        ">
                                            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="32" cy="32" r="30"
                                                        fill="#FCAB32"
                                                        stroke="white"
                                                        strokeWidth="4"
                                                />
                                                <path d="M38 30H37.25H38ZM38 40H38.75H38ZM42 40H42.75H42ZM42 30H41.25H42ZM22 38H22.75H22ZM22
                            40H21.25H22ZM26 40H25.25H26ZM26 38H26.75H26ZM30 34H29.25H30ZM30 40H30.75H30ZM34 40H34.75H34ZM34
                            34H33.25H34ZM39 21.25C38.5858 21.25 38.25 21.5858 38.25 22C38.25 22.4142
                            38.5858 22.75 39 22.75V21.25ZM41.25 25C41.25 25.4142 41.5858 25.75 42 25.75C42.4142 25.75
                            42.75 25.4142 42.75 25H41.25ZM41.4702 23.5843C41.7929 23.3246 41.844 22.8525 41.5843
                            22.5298C41.3246 22.2071 40.8525 22.156 40.5298 22.4157L41.4702 23.5843ZM21.9049
                            31.256C21.4941 31.3085 21.2035 31.6842 21.256 32.0951C21.3086 32.5059 21.6842 32.7965
                            22.0951 32.744L21.9049 31.256ZM41.25 30V40H42.75V30H41.25ZM38.75 40V30H37.25V40H38.75ZM38.75
                            30C38.75 29.3096 39.3096 28.75 40 28.75V27.25C38.4812 27.25 37.25 28.4812 37.25 30H38.75ZM40
                            41.25C39.3096 41.25 38.75 40.6904 38.75 40H37.25C37.25 41.5188 38.4812 42.75 40
                            42.75V41.25ZM41.25 40C41.25 40.6904 40.6904 41.25 40 41.25V42.75C41.5188 42.75 42.75
                            41.5188 42.75 40H41.25ZM42.75 30C42.75 28.4812 41.5188 27.25 40 27.25V28.75C40.6904
                            28.75 41.25 29.3096 41.25 30H42.75ZM25.25 38L25.25 40H26.75L26.75 38H25.25ZM22.75 40L22.75
                            38H21.25L21.25 40H22.75ZM22.75 38C22.75 37.3096 23.3096 36.75 24 36.75V35.25C22.4812
                            35.25 21.25 36.4812 21.25 38H22.75ZM24 41.25C23.3096 41.25 22.75 40.6904 22.75
                            40H21.25C21.25 41.5188 22.4812 42.75 24 42.75V41.25ZM25.25 40C25.25 40.6904 24.6904
                            41.25 24 41.25V42.75C25.5188 42.75 26.75 41.5188 26.75 40H25.25ZM26.75 38C26.75 36.4812
                            25.5188 35.25 24 35.25V36.75C24.6904 36.75 25.25 37.3096 25.25 38H26.75ZM33.25
                            34V40H34.75V34H33.25ZM30.75 40V34H29.25V40H30.75ZM30.75 34C30.75 33.3096 31.3096 32.75 32
                            32.75V31.25C30.4812 31.25 29.25 32.4812 29.25 34H30.75ZM32 41.25C31.3096 41.25 30.75 40.6904
                            30.75 40H29.25C29.25 41.5188 30.4812 42.75 32 42.75V41.25ZM33.25 40C33.25 40.6904 32.6904
                            41.25 32 41.25V42.75C33.5188 42.75 34.75 41.5188 34.75 40H33.25ZM34.75 34C34.75
                            32.4812 33.5188 31.25 32 31.25V32.75C32.6904 32.75 33.25 33.3096 33.25 34H34.75ZM39
                            22.75H41V21.25H39V22.75ZM41.25 23V25H42.75V23H41.25ZM41 22.75C41.1381 22.75 41.25
                            22.8619 41.25 23H42.75C42.75 22.0335 41.9665 21.25 41 21.25V22.75ZM40.5298
                            22.4157C36.5781 25.5961 33.6185 27.581 30.8097 28.8837C28.0122 30.1812 25.3286 30.8186
                            21.9049 31.256L22.0951 32.744C25.6135 32.2944 28.4591 31.6274 31.4408 30.2445C34.411
                            28.8669 37.4804 26.7953 41.4702 23.5843L40.5298 22.4157Z"
                                                      fill="white"/>
                                                <path d="M63.1393 32C63.6146 32 64.0012 31.6145 63.9884 31.1393C63.8263 25.1114 61.9637 19.2453
                                58.607 14.2218C55.0908 8.95938 50.0931 4.85786 44.2459 2.43585C38.3986 0.0138507
                                31.9645 -0.619856 25.7571 0.614871C19.8314 1.79356 14.3664 4.62442 9.98938
                                8.77215C9.64434 9.09912 9.64507 9.64507 9.9812 9.9812V9.9812C10.3173 10.3173
                                10.8615 10.3163 11.2071 9.98986C15.343 6.08259 20.5012 3.41549 26.0929
                                2.30322C31.9664 1.13491 38.0544 1.73453 43.5871 4.02624C49.1198 6.31796 53.8487
                                10.1988 57.1757 15.1781C60.3432 19.9186 62.1047 25.4519 62.2663 31.1393C62.2799
                                31.6145 62.6639 32 63.1393 32V32Z"
                                                      fill="#FCAB32"
                                                />
                                                <path d="M0.86071 32C0.385353 32 -0.00120544 32.3855 0.01157 32.8607C0.205875
                                40.0866 2.84213 47.0437 7.50405 52.59C12.3508 58.3562 19.0764 62.2278
                                26.4968 63.5232C33.9172 64.8187 41.5567 63.4549 48.0705 59.672C54.3359
                                56.0333 59.1735 50.3809 61.8046 43.6484C61.9777 43.2056 61.7446 42.7119
                                61.2974 42.5508C60.8501 42.3898 60.3581 42.6224 60.1844 43.0649C57.6911
                                49.4163 53.121 54.7482 47.206 58.1834C41.0426 61.7628 33.814 63.0532
                                26.7928 61.8275C19.7716 60.6017 13.4078 56.9384 8.8218 51.4824C4.42062
                                46.2463 1.9275 39.6813 1.73365 32.8607C1.72015 32.3856 1.33607 32 0.86071 32Z"
                                                      fill="#FCAB32"
                                                />
                                            </svg>
                                        </div>
        
                                    </td>
                                </tr>
        
                                <!-- BEGIN CONTENT -->
                                <tr>
                                    <td class="td-left" style="border-bottom-color: transparent;">
                                        <h2 style="
                                                    font-style: normal;
                                                    font-weight: 600;
                                                    padding-left: 0;
                                                    font-size: 14px;
                                                    line-height: 0;
                                                    padding-top: 0;
                                                    margin-top:0;
                                                    margin-left: 24px;
                                                    margin-bottom: 18px;
                                                    color:#ED5829;
                                                    position: relative;
                                                    z-index: 999;;
                                                    text-align: left;">
                                            Strengths
                                        </h2>
                                    </td>
                                    <td style="border-left-color:#ED5829;border-right-color:#FCAB32;border-bottom-color: transparent;"></td>
                                    <td class="td-right" style="border-bottom-color: transparent;">
                                        <h2 style="
                                                    font-style: normal;
                                                    font-weight: 600;
                                                    padding-left: 0;
                                                    font-size: 14px;
                                                    line-height: 0;
                                                    padding-top: 0;
                                                    margin-top:0;
                                                    margin-left: 24px;
                                                    margin-bottom: 18px;
                                                    color:#ED5829;
                                                    position: relative;
                                                    z-index: 999;
                                                    padding-left: 25px;
                                                    text-align: left;">
                                            Threats
                                        </h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="td-left" style="border-color:#ED5829;border-left-color: transparent;border-bottom-color: transparent;">
                                        <div style="margin-left: 24px;">
                                            ${strenthsContent(JSON.parse(data.item.strengths))}
        
                                        </div>
                                    </td>
                                    <td style="border-left-color:#ED5829;border-right-color:#FCAB32;border-bottom-color: transparent;"></td>
                                    <td class="td-right" style="border-color:#FCAB32;border-right-color: transparent;border-bottom-color: transparent;">
                                        <div style="margin-left: 52px;">
        
                                            ${threatsContent(JSON.parse(data.item.threats))}
        
                                        </div>
                                    </td>
                                </tr>
        
                                <!-- red blocks content -->
                                <tr>
                                    <td class="td-left" style="position: relative;vertical-align: top;border-bottom-color: transparent;border-left-color: transparent;">
                                        <div style="margin-left: 22px;">
                                            ${weaknesses2StrengthsContent({
                                                colorSettings: data.colorSettings, 
                                                weaknesses2StrengthsData:JSON.parse(data.item.weaknesses2strengths)})}
                                        </div>
                                    </td>
                                    <td style="border-left-color:#ED5829;border-right-color:#FCAB32;border-bottom-color: transparent;"></td>
                                    <td style="position: relative;vertical-align: top;padding-top:17px;border-bottom-color: transparent;border-right-color: transparent;">
                                        <div style="margin-left: 52px;">
                                            ${threats2OpportunitiesContent({
                                                colorSettings: data.colorSettings,
                                                threats2OpportunitiesData:JSON.parse(data.item.threats2opportunities)})
                                            }
                                        </div>
                                    </td>
                                </tr>
                                <!-- end red block content -->
        
                                <!-- Headers content -->
                                <tr>
                                    <td class="td-right" style="position: relative;border-left-color:#FCAB32;border-bottom-color: transparent;border-left-color: transparent;">
                                        <h2 style="
                                                    font-style: normal;
                                                    font-weight: 600;
                                                    padding-left: 0;
                                                    font-size: 14px;
                                                    line-height: 0;
                                                    padding-top: 0;
                                                    margin-top:20px;
                                                    margin-bottom: 10px;
                                                    margin-left: 24px;
                                                    color: #FCAB32;
                                                    text-align: left;">
                                            Weaknesses
                                        </h2>
                                    </td>
                                    <td style="border-bottom-color: transparent;border-right-color:#ED5829;border-left-color:#FCAB32"></td>
                                    <td class="td-left" style="position: relative;border-right-color:#FCAB32;border-bottom-color: transparent;border-right-color: transparent;">
                                        <h2 style="
                                                    font-style: normal;
                                                    font-weight: 600;
                                                    font-size: 14px;
                                                    line-height: 0;
                                                    padding-top: 0;
                                                    margin-top:20px;
                                                    margin-bottom: 10px;
                                                    margin-left: 52px;
                                                    color: #ED5829;
                                                    text-align: left;">
                                            Opportunities
                                        </h2>
                                    </td>
                                </tr>
        
                                <tr>
                                    <td style="position: relative;width:362px;border-color:#FCAB32;border-left-color: transparent;border-bottom-color: transparent;">
                                        <div style="margin-left: 24px;color:#000;">
        
                                            ${weaknessesContent(JSON.parse(data.item.weaknesses))}
        
                                        </div>
                                    </td>
                                    <td style="position: relative;border-left-color:#FCAB32;border-right-color:#ED5829;border-bottom-color: transparent;"></td>
                                    <td style="border-color:#ED5829;position: relative;width:362px;border-right-color: transparent;border-bottom-color: transparent;">
                                        <div style="margin-left: 52px;color:#000">
                                            
                                            ${opportunitiesContent(JSON.parse(data.item.opportunities))}
        
                                        </div>
                                    </td>
                                </tr>
        
                                <!-- BORDERED AND SWOT ICONS BOTTOM -->
                                
                                <tr style="background: #fff;" id="rowBottom">
                                    <td style="position:relative;background:#fff;height: 30px;padding:0;border-color: #fff;margin:0;">
                                        <div style="
                                                position: absolute;
                                                top:-2px;
                                                left:1px;
                                                background:#FCAB32;
                                                width: 100%;
                                                border-radius: 0 0 8px 8px;
                                                display: block;
                                                margin: 0;
                                                padding: 0 1px;
                                                height:30px;">
                                            <div style="
                                                    background:#fff;
                                                    width: 100%;
                                                    border-radius: 0 0 8px 8px;
                                                    border-top:0;
                                                    border-bottom:0;
                                                    height:29px;
                                                ">
                                            </div>
                                        </div>
        
                                        <div style="position: absolute;
                                                        width: 32px;
                                                        z-index: 999;;
                                                        height: 32px;
                                                        bottom: 28px;
                                                        left: -16px;
                                                ">
                                            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="32" cy="32" r="30"
                                                        fill="orange"
                                                        stroke="white"
                                                        strokeWidth="4"
                                                />
                                                <path d="M26 30H25.25H26ZM26 40H26.75H26ZM22 40H21.25H22ZM22 30H22.75H22ZM42 38H42.75H42ZM42
                                40H41.25H42ZM38 40H37.25H38ZM38 38H38.75H38ZM34 34H34.75H34ZM34 40H33.25H34ZM30 40H29.25H30ZM30
                                34H30.75H30ZM39 31.25C38.5858 31.25 38.25 31.5858 38.25 32C38.25 32.4142 38.5858 32.75 39
                                32.75V31.25ZM42.75 29C42.75 28.5858 42.4142 28.25 42 28.25C41.5858 28.25 41.25 28.5858
                                41.25 29H42.75ZM40.5298 31.5843C40.8525 31.844 41.3246 31.7929 41.5843 31.4702C41.844 31.1475
                                41.7929 30.6754 41.4702 30.4157L40.5298 31.5843ZM22.0951 21.256C21.6842 21.2035 21.3086 21.4941
                                21.256 21.9049C21.2035 22.3158 21.4941 22.6914 21.9049 22.744L22.0951 21.256ZM21.25 30L21.25
                                40H22.75L22.75 30H21.25ZM26.75 40L26.75 30H25.25L25.25 40H26.75ZM26.75 30C26.75 28.4812
                                25.5188 27.25 24 27.25V28.75C24.6904 28.75 25.25 29.3096 25.25 30H26.75ZM24 42.75C25.5188
                                42.75 26.75 41.5188 26.75 40H25.25C25.25 40.6904 24.6904 41.25 24 41.25V42.75ZM21.25
                                40C21.25 41.5188 22.4812 42.75 24 42.75V41.25C23.3096 41.25 22.75 40.6904 22.75
                                40H21.25ZM22.75 30C22.75 29.3096 23.3096 28.75 24 28.75V27.25C22.4812 27.25 21.25
                                28.4812 21.25 30H22.75ZM37.25 38V40H38.75V38H37.25ZM42.75 40V38H41.25V40H42.75ZM42.75
                                38C42.75 36.4812 41.5188 35.25 40 35.25V36.75C40.6904 36.75 41.25 37.3096 41.25 38H42.75ZM40
                                42.75C41.5188 42.75 42.75 41.5188 42.75 40H41.25C41.25 40.6904 40.6904 41.25 40
                                41.25V42.75ZM37.25 40C37.25 41.5188 38.4812 42.75 40 42.75V41.25C39.3096 41.25
                                38.75 40.6904 38.75 40H37.25ZM38.75 38C38.75 37.3096 39.3096 36.75 40 36.75V35.25C38.4812
                                35.25 37.25 36.4812 37.25 38H38.75ZM29.25 34V40H30.75V34H29.25ZM34.75
                                40V34H33.25V40H34.75ZM34.75 34C34.75 32.4812 33.5188 31.25 32 31.25V32.75C32.6904
                                32.75 33.25 33.3096 33.25 34H34.75ZM32 42.75C33.5188 42.75 34.75 41.5188 34.75
                                40H33.25C33.25 40.6904 32.6904 41.25 32 41.25V42.75ZM29.25 40C29.25 41.5188 30.4812 42.75 32
                                42.75V41.25C31.3096 41.25 30.75 40.6904 30.75 40H29.25ZM30.75 34C30.75 33.3096 31.3096 32.75
                                32 32.75V31.25C30.4812 31.25 29.25 32.4812 29.25 34H30.75ZM39 32.75H41V31.25H39V32.75ZM42.75
                                31V29H41.25V31H42.75ZM41 32.75C41.9665 32.75 42.75 31.9665 42.75 31H41.25C41.25 31.1381
                                41.1381 31.25 41 31.25V32.75ZM41.4702 30.4157C37.4804 27.2047 34.411 25.1331 31.4408
                                23.7555C28.4591 22.3726 25.6135 21.7056 22.0951 21.256L21.9049 22.744C25.3286 23.1814 28.0122
                                23.8188 30.8097 25.1163C33.6185 26.419 36.5781 28.4039 40.5298 31.5843L41.4702 30.4157Z"
                                                      fill="white"
                                                />
                                                <path d="M63.1393 32C63.6146 32 64.0012 31.6145 63.9884 31.1393C63.8263 25.1114 61.9637
                                    19.2453 58.607 14.2218C55.0908 8.95938 50.0931 4.85786 44.2459 2.43585C38.3986 0.0138507
                                    31.9645 -0.619856 25.7571 0.614871C19.8314 1.79356 14.3664 4.62442 9.98938 8.77215C9.64434
                                    9.09912 9.64507 9.64507 9.9812 9.9812C10.3173 10.3173 10.8615 10.3163 11.2071
                                    9.98986C15.343 6.08259 20.5012 3.41549 26.0929 2.30322C31.9664 1.13491 38.0544
                                    1.73453 43.5871 4.02624C49.1198 6.31796 53.8487 10.1988 57.1757 15.1781C60.3432
                                    19.9186 62.1047 25.4519 62.2663 31.1393C62.2799 31.6145 62.6639 32 63.1393 32Z"
                                                      fill="orange"
                                                />
                                                <path d="M0.86071 32C0.385353 32 -0.00120544 32.3855 0.01157 32.8607C0.205875 40.0866
                                    2.84213 47.0437 7.50405 52.59C12.3508 58.3562 19.0764 62.2278 26.4968 63.5232C33.9172
                                    64.8187 41.5567 63.4549 48.0705 59.672C54.3359 56.0333 59.1735 50.3809 61.8046
                                    43.6484C61.9777 43.2056 61.7446 42.7119 61.2974 42.5508C60.8501 42.3898
                                    60.3581 42.6224 60.1844 43.0649C57.6911 49.4163 53.121 54.7482 47.206
                                    58.1834C41.0426 61.7628 33.814 63.0532 26.7928 61.8275C19.7716 60.6017
                                    13.4078 56.9384 8.8218 51.4824C4.42062 46.2463 1.9275 39.6813 1.73365
                                    32.8607C1.72015 32.3856 1.33607 32 0.86071 32Z"
                                                      fill="orange"
                                                />
                                            </svg>
                                        </div>
        
                                    </td>
                                    <td style="border-bottom-color: transparent;border-left-color: transparent;border-right-color: transparent;"></td>
                                    <td style="position:relative;background:#fff;height: 30px;padding:0;border-color: #fff;margin:0;">
                                        <div style="
                                                position: absolute;
                                                top:-2px;
                                                right:1px;
                                                background:#ED5829;
                                                width: 100%;
                                                border-radius: 0 0 8px 8px;
                                                display: block;
                                                margin: 0;
                                                padding: 0 1px;
                                                height:30px;">
                                            <div style="
                                                    background:#fff;
                                                    width: 100%;
                                                    border-radius: 0 0 8px 8px;
                                                    border-top:0;
                                                    border-bottom:0;
                                                    height:29px;
                                                ">
                                            </div>
                                        </div>
        
                                        <div style="position: absolute;
                                                width: 32px;
                                                z-index: 999;;
                                                height: 32px;
                                                bottom: 28px;
                                                right: -16px;
                                        ">
                                            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="32" cy="32" r="30"
                                                        fill="#ED5829"
                                                        stroke="white"
                                                        strokeWidth="4"
                                                />
                                                <path d="M36.8085 34.0871L36.2932 33.5422V33.5422L36.8085 34.0871ZM27.1915 34.0871L27.7068
                                    33.5422H27.7068L27.1915 34.0871ZM30.5303 28.4697C30.2374 28.1768 29.7626 28.1768
                                    29.4697 28.4697C29.1768 28.7626 29.1768 29.2374 29.4697 29.5303L30.5303 28.4697ZM34.5303
                                    29.5303C34.8232 29.2374 34.8232 28.7626 34.5303 28.4697C34.2374 28.1768 33.7626 28.1768
                                    33.4697 28.4697L34.5303 29.5303ZM31.25 38C31.25 38.4142 31.5858 38.75 32 38.75C32.4142
                                    38.75 32.75 38.4142 32.75 38H31.25ZM28 38.75H36V37.25H28V38.75ZM32 41.25C30.2051
                                    41.25 28.75 39.7949 28.75 38H27.25C27.25 40.6234 29.3766 42.75 32 42.75V41.25ZM35.25
                                    38C35.25 39.7949 33.7949 41.25 32 41.25V42.75C34.6234 42.75 36.75 40.6234 36.75
                                    38H35.25ZM25.75 29C25.75 25.5482 28.5482 22.75 32 22.75V21.25C27.7198 21.25 24.25
                                    24.7198 24.25 29H25.75ZM32 22.75C35.4518 22.75 38.25 25.5482 38.25 29H39.75C39.75
                                    24.7198 36.2802 21.25 32 21.25V22.75ZM38.25 29C38.25 30.7892 37.4991 32.4019
                                    36.2932 33.5422L37.3238 34.6321C38.8169 33.2203 39.75 31.2185 39.75 29H38.25ZM35.25
                                    35.7887V38H36.75V35.7887H35.25ZM27.7068 33.5422C26.5009 32.4019 25.75 30.7892
                                    25.75 29H24.25C24.25 31.2185 25.1831 33.2203 26.6762 34.6321L27.7068 33.5422ZM28.75
                                    38V35.7887H27.25V38H28.75ZM26.6762 34.6321C27.0469 34.9826 27.25 35.3963 27.25
                                    35.7887H28.75C28.75 34.8736 28.2862 34.09 27.7068 33.5422L26.6762 34.6321ZM36.2932
                                    33.5422C35.7138 34.09 35.25 34.8736 35.25 35.7887H36.75C36.75 35.3963 36.9531
                                    34.9826 37.3238 34.6321L36.2932 33.5422ZM29.4697 29.5303L31.4697 31.5303L32.5303
                                    30.4697L30.5303 28.4697L29.4697 29.5303ZM32.5303 31.5303L34.5303 29.5303L33.4697
                                    28.4697L31.4697 30.4697L32.5303 31.5303ZM31.25 31V38H32.75V31H31.25Z"
                                                      fill="white"/>
                                                <path d="M63.1393 32C63.6146 32 64.0012 31.6145 63.9884 31.1393C63.8263 25.1114 61.9637 19.2453
                                    58.607 14.2218C55.0908 8.95938 50.0931 4.85786 44.2459 2.43585C38.3986 0.0138507
                                    31.9645 -0.619856 25.7571 0.614871C19.8314 1.79356 14.3664 4.62442 9.98938
                                    8.77215C9.64434 9.09912 9.64507 9.64507 9.9812 9.9812V9.9812C10.3173 10.3173 10.8615
                                    10.3163 11.2071 9.98986C15.343 6.08259 20.5012 3.41549 26.0929 2.30322C31.9664
                                    1.13491 38.0544 1.73453 43.5871 4.02624C49.1198 6.31796 53.8487 10.1988 57.1757
                                    15.1781C60.3432 19.9186 62.1047 25.4519 62.2663 31.1393C62.2799 31.6145 62.6639
                                    32 63.1393 32V32Z" fill="#ED5829"
                                                />
                                                <path d="M0.860711 32C0.385354 32 -0.00120831 32.3855 0.0115697 32.8607C0.205876 40.0866
                                    2.84213 47.0437 7.50405 52.59C12.3508 58.3562 19.0764 62.2278 26.4968 63.5232C33.9172
                                    64.8187 41.5567 63.4549 48.0705 59.672C54.3359 56.0333 59.1735 50.3809 61.8046
                                    43.6484C61.9777 43.2056 61.7446 42.7119 61.2974 42.5508V42.5508C60.8501 42.3898
                                    60.3581 42.6224 60.1844 43.0649C57.6911 49.4163 53.121 54.7482 47.206 58.1834C41.0426
                                    61.7628 33.814 63.0532 26.7928 61.8275C19.7716 60.6017 13.4078 56.9384 8.8218
                                    51.4824C4.42062 46.2463 1.9275 39.6813 1.73365 32.8607C1.72015 32.3856 1.33607 32 0.860711
                                    32V32Z" fill="#ED5829"
                                                />
                                            </svg>
                                        </div>
        
                                    </td>
                                </tr>
                            </table>
                        </div>
        
        
        
                        <div style="width:790px;margin:0 auto; position: absolute;bottom: 0px;">
        
                        </div>
                    </td>
                </tr>
            </table>
        </div>
`;
