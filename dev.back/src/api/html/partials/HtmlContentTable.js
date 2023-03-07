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
    <html style="background-color:#fff;">
      <head>
        <meta name="viewport" content="width=device-width">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Strategy Kiln</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
        <style>
            @font-face {
              font-family: "Raleway";
              src: local("Raleway"),
                url("./fonts/Raleway-Black.ttf") format("ttf");
            }

            /*body {*/
            /*    font-family: 'Raleway',serif;*/
            /*}*/
        </style>
      </head>
      <body style="background-color:#fff;">
        <div style="width: 790px; margin:0 auto;background-color:#fff;">
            <table style="height: 100%;margin-left:-5px;">
                <tr>
                    <td style="vertical-align: middle;">
                        <div style="width: 100%; font-style: normal; font-weight: 300; margin: 0 auto; position: relative;background-color:#fff;">
                            ${swotLogoTable(data.colorSettings)}
                            <table style="width: 790px;padding: 0; margin: 0;background-color:#fff;border-radius: 8px;line-height: 9px;">
                                <!-- BORDERED AND SWOT ICONS -->
                                <tr style="background: #fff;font-color: #000;">
                                    <td style="position:relative;background:#fff;height: 30px;padding:0;border-color: #fff;margin:0;">
                                        <table cellspacing="0" cellpadding="0" style="border-color: #fff;padding:0; margin: 0;width: 100%;height:30px;border-bottom:0;">
                                            <tr style="padding:0;margin:0;border-color: #fff;">
                                                <td style="padding:0;margin:0;border-color: #fff;">
                                                    <table cellspacing="0" cellpadding="0" style="background:#fff; padding:0; margin:0;width: 100%;border-color:#ED5829;height:30px;border-radius: 0;border-bottom:0;">
                                                        <tr>
                                                            <td style="background: #fff; height: 31px;position:relative;">
                                                                <div style="
                                                                    position: absolute;
                                                                    top:0;
                                                                    left:0;
                                                                    background:#ED5829;
                                                                    width: 100%; 
                                                                    border-radius: 8px 8px 0 0;
                                                                    border-bottom:0;
                                                                    display: block;
                                                                    padding: 1px 1px 0 1px;
                                                                    height:31px;">
                                                                    <div style="
                                                                        background:#fff;
                                                                        width: 100%; 
                                                                        border-radius: 8px 8px 0 0;
                                                                        border-bottom:0;
                                                                        height:32px;
                                                                    ">
                                                                    
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        ${strengthsIcon(data.colorSettings)}
                                    </td>
                                    <td style="position: relative">
                                        <!-- left border -->
                                        <div style="width:1px;height:55vh;background: #ED5829;left: -1px;position: absolute; top:30px;"></div>
                                        <!-- right border -->
                                        <div style="width:1px;height:55vh;background: #FCAB32;right: -3px;position: absolute; top:30px;"></div>
                                    </td>
                                    <td style="position:relative;background:#fff;height: 30px;padding:0;margin:0;">
                                        <table cellspacing="0" cellpadding="0" style="border-color: #fff;padding:0; margin: 0;width: 100%;height:30px;border-bottom:0;">
                                            <tr style="padding:0;margin:0;border-color: #fff;">
                                                <td style="padding:0;margin:0;border-color: #fff;">
                                                    <table cellspacing="0" cellpadding="0" style="background:#fff; padding:0; margin:0;width: 100%;height:30px;border-radius: 0;border-bottom:0;">
                                                        <tr>
                                                            <td style="background: #fff; height: 31px;position:relative;">
                                                                <div style="
                                                                    position: absolute;
                                                                    top:0;
                                                                    left:0;
                                                                    background:#FCAB32;
                                                                    width: 100%; 
                                                                    border-radius: 8px 8px 0 0;
                                                                    border-bottom:0;
                                                                    display: block;
                                                                    padding: 1px 1px 0 1px;
                                                                    height:31px;">
                                                                    <div style="
                                                                        background:#fff;
                                                                        width: 100%; 
                                                                        border-radius: 8px 8px 0 0;
                                                                        border-bottom:0;
                                                                        height:32px;
                                                                    ">
                                                                    
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        ${threatsIcon(data.colorSettings)}
                                    </td>
                                </tr>
                                
                                <!-- BEGIN CONTENT -->
                                <tr>
                                    <td style="position: relative;color: #000;z-index: 999;">
                                        <h2 style="
                                            font-weight: 600;
                                            font-style: normal;
                                            padding-left: 0;
                                            font-size: 14px;
                                            line-height: 0;
                                            padding-top: 0;
                                            margin-top:0;
                                            margin-left: 24px;
                                            color:${data.colorSettings.strengths_color};
                                            border: solid 1px;
                                            text-align: left;">
                                            Strengths
                                        </h2>
                                    </td>
                                    <td></td>
                                    <td style="position: relative;">
                                        <h2 style="
                                            font-style: normal;
                                            font-weight: 600;
                                            font-size: 14px;
                                            line-height: 0;
                                            padding-top: 0;
                                            margin-top:0;
                                            margin-left: 52px;
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
                                    <td></td>
                                    <td style="position: relative;">
                                        <div style="width:1px;background:#ED5829;left: 0;position: absolute; top:-4px;"></div>
                                        <div style="margin-left: 52px;">
                                            ${threatsContent(data.threatsData)}
                                        </div>
                                    </td>
                                </tr>
                                
                                <!-- red blocks content -->
                                <tr>
                                    <td style="position: relative;vertical-align: top;">
                                        <div style="width:1px;background: #ED5829;right: 0;position: absolute; top:-4px;"></div>
                                        <div style="margin-left: 22px;">
                                            ${weaknesses2StrengthsContent(data)}
                                        </div>
                                    </td>
                                    <td></td>
                                    <td style="position: relative;vertical-align: top;padding-top:17px;">
                                        <div style="margin-left: 52px;">
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
                                            color: ${data.colorSettings.weaknesses_color};
                                            text-align: left;">
                                            Weaknesses
                                        </h2>
                                    </td>
                                    <td></td>
                                    <td style="position: relative;">
                                        <h2 style="
                                            font-style: normal;
                                            font-weight: 600;
                                            font-size: 14px;
                                            line-height: 0;
                                            padding-top: 0;
                                            margin-top:20px;
                                            margin-left: 52px;
                                            color: ${data.colorSettings.opportunities_color};
                                            text-align: left;">
                                            Opportunities
                                        </h2>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td style="position: relative;width:362px;">
                                        <div style="margin-left: 24px;color:#000;">
                                            ${weaknessesContent(data.weaknessesData)}
                                        </div>
                                    </td>
                                    <td style="position: relative;"></td>
                                    <td style="position: relative;width:362px;">
                                        <div style="margin-left: 52px;color:#000">
                                            ${opportunitiesContent(data.opportunitiesData)}
                                        </div>
                                    </td>
                                </tr>
                                
                                <!-- BORDERED AND SWOT ICONS -->
                                <tr style="background: #fff;">
                                    <td style="position:relative;background:#fff;height: 30px;padding:0;border-color: #fff;margin:0;">
                                        <table cellspacing="0" cellpadding="0" style="border-color: #fff;padding:0; margin: 0;width: 100%;height:30px;border-bottom:0;">
                                            <tr style="padding:0;margin:0;border-color: #fff;">
                                                <td style="padding:0;margin:0;border-color: #fff;">
                                                    <table cellspacing="0" cellpadding="0" style="background:#fff; padding:0; margin:0;width: 100%;border-color:#ED5829;height:30px;border-radius: 0;border-bottom:0;">
                                                        <tr>
                                                            <td style="background: #fff; height: 31px;position:relative;">
                                                                <div style="
                                                                    position:absolute;
                                                                    width: 100%;
                                                                    height: 2px;
                                                                    top:-1px;
                                                                    left: 0;
                                                                    border-left:solid 1px #ED5829;
                                                                    background: #fff;
                                                                    z-index: 888;
                                                                    "
                                                                ></div>
                                                                <div style="
                                                                    position: absolute;
                                                                    top:0;
                                                                    left:0;
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
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        ${weaknessesIcon(data.colorSettings)}
                                    </td>
                                    <td style="position: relative">
                                        <!-- left border -->
                                        <div style="width:1px;height:55vh;background: #FCAB32;left: -1px;position: absolute; bottom:30px;"></div>
                                        <!-- right border -->
                                        <div style="width:1px;height:55vh;background: #ED5829;right: -3px;position: absolute; bottom:30px;"></div>
                                    </td>
                                    <td style="position:relative;background:#fff;height: 30px;padding:0;margin:0;">
                                        <table cellspacing="0" cellpadding="0" style="border-color: #fff;padding:0; margin: 0;width: 100%;height:30px;border-bottom:0;">
                                            <tr style="padding:0;margin:0;border-color: #fff;">
                                                <td style="padding:0;margin:0;border-color: #fff;">
                                                    <table cellspacing="0" cellpadding="0" style="background:#fff; padding:0; margin:0;width: 100%;height:30px;border-radius: 0;border-bottom:0;">
                                                        <tr>
                                                            <td style="background: #fff; height: 31px;position:relative;">
                                                                <div style="
                                                                    position:absolute;
                                                                    width: 100%;
                                                                    height: 2px;
                                                                    top:-1px;
                                                                    left: 0;
                                                                    border-left:solid 1px #ED5829;
                                                                    background: #fff;
                                                                    z-index: 888;
                                                                    "
                                                                ></div>
                                                                <div style="
                                                                    position: absolute;
                                                                    top:0;
                                                                    left:0;
                                                                    background:#ED5829;
                                                                    width: 100%; 
                                                                    border-radius: 0 0 8px 8px;
                                                                    border-top:0;
                                                                    display: block;
                                                                    padding: 0 1px 1px 1px;
                                                                    height:31px;">
                                                                    <div style="
                                                                        background:#fff;
                                                                        width: 100%; 
                                                                        border-radius: 0 0 8px 8px;
                                                                        border-bottom:0;
                                                                        height:31px;
                                                                    ">
                                                                    
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        ${opportunitiesIcon(data.colorSettings)}
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div style="width:790px;margin:0 auto; position: absolute;bottom: 10px;">
                             ${companyContent(data.companyData)}
                        </div>
                    </td>
                </tr>
            </table>
            
        </div>
    </body>
</html>
`;
