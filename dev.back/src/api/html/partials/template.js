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

export const getHtmlTableTemplate = (data) =>
    `
    <html>
      <head>
        <meta name="viewport" content="width=device-width">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Strategy Kiln</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body style="background: #fff;">
        <div style="width: 896px; margin:0 auto;background-color:#fff;">
            <div style="width: 100%; font-style: normal; font-weight: 300; margin: 0 auto; position: relative;background-color:#fff;">
                ${swotLogoTable(data.colorSettings)}
                <table style="width: 790px;padding: 0; margin: 0;background-color:#fff;" cellspacing="0" cellpadding="0">
                    <tr style="padding: 0;margin:0;">
                        <td style="height:30px;width:368px;">
                            <svg width="368" height="31" viewBox="0 0 489 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M488 31V9C488 4.58172 484.418 1 480 1H8.99997C4.58169 1 0.999969 4.58172 0.999969 9V31" stroke="#ED5829"/>
                            </svg>
                        </td>
                        <td style="width: 160px;"></td>
                        <td style="height:30px;width:368px;">
                            <svg width="368" height="31" viewBox="0 0 489 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M488 31V9C488 4.58172 484.418 1 480 1H8.99997C4.58169 1 0.999969 4.58172 0.999969 9V31" stroke="#ED5829"/>
                            </svg>
                        </td>
                    </tr>
                    
                    <tr style="padding: 0;margin:0;background:yellow;">
                        <td style="position: relative;border-right:solid 1px;width:368px;">
                            <h2 style="
                                font-style: normal;
                                font-weight: 600;
                                padding-left: 0;
                                font-size: 14px;
                                line-height: 0;
                                padding-top: 0;
                                margin-top:0;
                                margin-left: 24px;
                                color:${data.colorSettings.strengths_color};
                                text-align: left;">
                                Strengths
                            </h2>
                        </td>
                        <td style="position: relative;width: 160px;"></td>
                        <td style="position: relative;border-left:solid 1px;width:368px;">
                            <h2 style="
                                font-style: normal;
                                font-weight: 600;
                                font-size: 14px;
                                line-height: 0;
                                padding-top: 0;
                                margin-top:0;
                                margin-left: 42px;
                                color:${data.colorSettings.threats_color};
                                text-align: left;">
                                Threats
                            </h2>
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td style="position: relative;">
                            <div style="width:1px;background: #ED5829;right: 0;position: absolute; top:-4px;"></div>
                            <div style="margin-left: 24px;">
                                ${strenthsContent(data.strengthsData)}
                            </div>
                        </td>
                        <td style="position: relative;width: 160px;background:yellow"></td>
                        <td style="position: relative;">
                            <div style="width:1px;background:#ED5829;left: 0;position: absolute; top:-4px;"></div>
                            <div style="margin-left: 42px;">
                                ${threatsContent(data.threatsData)}
                            </div>
                        </td>
                    </tr>
                    
                    <!-- red blocks content -->
                    <tr>
                        <td style="position: relative;vertical-align: top;border-right:solid 1px;">
                            <div style="width:1px;background: #ED5829;right: 0;position: absolute; top:-4px;"></div>
                            <div style="margin-left: 22px;">
                                ${weaknesses2StrengthsContent(data)}
                            </div>
                        </td>
                        <td style="position: relative;width: 160px;"></td>
                        <td style="position: relative;vertical-align: top;padding-top:17px;">
                            <div style="margin-left: 42px;">
                                ${threats2OpportunitiesContent(data)}
                            </div>
                        </td>
                    </tr>
                    <!-- end red block content -->
                    
                    <!-- Headers content -->
                    <tr>
                        <td style="position: relative;">
                            <h2 style="
                                font-style: normal;
                                font-weight: 600;
                                padding-left: 0;
                                font-size: 14px;
                                line-height: 0;
                                padding-top: 0;
                                margin-top:20px;
                                margin-left: 24px;
                                color:${data.colorSettings.weaknesses_color};
                                text-align: left;">
                                Weaknesses
                            </h2>
                        </td>
                        <td style="position: relative;width: 160px;"></td>
                        <td style="position: relative;">
                            <h2 style="
                                font-style: normal;
                                font-weight: 600;
                                font-size: 14px;
                                line-height: 0;
                                padding-top: 0;
                                margin-top:20px;
                                margin-left: 42px;
                                color:${data.colorSettings.opportunities_color};
                                text-align: left;">
                                Opportunities
                            </h2>
                        </td>
                    </tr>
                    
                    <tr>
                        <td style="position: relative;width:372px;">
                            <div style="margin-left: 24px;">
                                ${weaknessesContent(data.weaknessesData)}
                            </div>
                        </td>
                        <td style="position: relative; width:160px;"></td>
                        <td style="position: relative;width:372px;">
                            <div style="margin-left: 42px;">
                                ${opportunitiesContent(data.opportunitiesData)}
                            </div>
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td style="position:relative;">
                            ${weaknessesIcon(data.colorSettings)}
                        </td>
                        <td style="position: relative">
                            <div style="width:1px;height:51vh;background: #ED5829;right: -3px;position: absolute; bottom:30px;"></div>
                            <div style="width:1px;height:51vh;background: #FCAB32;left: -3px;position: absolute; bottom:30px;"></div>
                        </td>
                        <td style="position:relative;border:solid 1px;border-color:#ED5829;border-top: 0;height: 30px;border-radius: 0 0 8px 8px;">
                            ${opportunitiesIcon(data.colorSettings)}
                        </td>
                    </tr>
                </table>
            </div>
            <div style="width:790px;margin:0 auto; position: absolute;bottom: 0;margin-top: 20px; border-color: #b6b3b3;">
                 ${companyContent(data.companyData)}
            </div>
        </div>
    </body>
</html>
`;
