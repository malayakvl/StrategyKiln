export const companyContent = (data) => {
    return `
        <div style="float:right;">
            <div style="float:left;margin-top: -10px;">
                <span style="margin-top: 10px;display: block;margin-bottom: 5px;font-size: 11px;line-height: 10px;">${data.company_name}</span>
                <span style="display: block;font-size: 11px;line-height: 10px;">${data.company_headline}</span>
            </div>
        </div>
        <div style="float:left;margin-top: -20px;">
        ${data.company_logo ? 
            `<img style="width: auto;height:40px;" src="${process.env.API_URL}/uploads/logos/${data.company_logo}" alt="" />`
            : ''
        }
        </div>
    `
}

export const strenthsContent = (data) => {
    let strengthsContentData = '';
    // const contentKey = ['strengths_0_description', 'strengths_1_description', 'strengths_2_description', 'strengths_3_description', 'strengths_4_description']
    // contentKey.forEach((key, index) => {
    //     if (data[key]) {
    //         strengthsContentData +=
    //             `<p style="margin-bottom:0;padding-bottom: 0;padding-top:0;font-size: 9px;margin-top:3px;display: block;text-align:left;">
    //                 ${data[`strengths_${index}_description`]}
    //         </p>
    //         `;
    //     }
    // });
    // const contentKey = ['strengths_0_description', 'strengths_1_description', 'strengths_2_description', 'strengths_3_description', 'strengths_4_description']
    Object.keys(data).forEach((key, index) => {
        if (data[key]) {
            strengthsContentData +=
                `<p style="overflow-wrap: break-word;margin-bottom:0;padding-bottom: 0;padding-top:0;font-size: 9px;margin-top:3px;display: block;text-align:left;">
                    ${data[`strengths_${index}_description`]}
            </p>
            `;
        }
    });
    return `
        <div style="color: #3D3E52;
                text-align: left;
                margin-top:-5px;
                width: 295px;
                "
        >
            ${strengthsContentData}
        </div>
    `;
}

export const weaknessesContent = (data) => {
    let weaknessesContentData = '';
    Object.keys(data).forEach((key, index) => {
        if (data[key]) {
            weaknessesContentData +=
                `<p style="overflow-wrap: break-word;margin-bottom:0;padding-bottom: 0;padding-top:0;font-size: 9px;margin-top:3px;display: block;text-align:left;">
                    ${data[`weaknesses_${index}_description`]}
            </p>
            `;
        }
    });
    return `
        <div style="
                color: #3D3E52;
                text-align: left;
                margin-top:0;
                width: 300px;
                "
        >
            ${weaknessesContentData}
        </div>
    `;
}

export const threatsContent = (data) => {
    let threatsContentData = '';

    Object.keys(data).forEach((key, index) => {
        if (data[key]) {
            threatsContentData +=
                `<p style="overflow-wrap: break-word;margin-bottom:0;padding-bottom: 0;padding-top:0;font-size: 9px;margin-top:3px;display: block;text-align:left;">
                    ${data[`threats_${index}_description`]}
            </p>
            `;
        }
    });
    return `
        <div style="color: #3D3E52;
                 text-align: left;
                 margin-top:-5px;
                width: 285px;
                "
        >
            ${threatsContentData}
        </div>
    `;
}

export const opportunitiesContent = (data) => {
    let opportunitiesContentData = '';
    Object.keys(data).forEach((key, index) => {
        if (data[key]) {
            opportunitiesContentData +=
                `<p style="overflow-wrap: break-word;margin-bottom:0;padding-bottom: 0;padding-top:0;font-size: 9px;margin-top:3px;display: block;text-align:left;margin-right: 10px;">
                    ${data[`opportunities_${index}_description`]}
            </p>
            `;
        }
    });
    return `
        <div style="color: #3D3E52;
                 text-align: left;
                 margin-top:0;
                width: 285px
                "
        >
            ${opportunitiesContentData}
        </div>
    `;
}

export const threats2OpportunitiesContent = (data) => {
    let contentData =
        `<div style="position:relative">
            <div style="
                    background: ${data.colorSettings.threats2opportunities_color};
                    border-radius: 12px;
                    color: #FFF;
                    padding: 10px 10px 10px 10px;
                    margin-top: 10px;
                    width: 270px;
                    "
            >`;
    Object.keys(data.threats2OpportunitiesData).forEach((key, index) => {
        if (data.threats2OpportunitiesData[key]) {
            contentData +=
                `<p style="overflow-wrap: break-word;margin-bottom:0;padding-bottom: 0;padding-top:0;font-size: 9px;margin-top:3px;display: block;text-align:left;">
                   ${data.threats2OpportunitiesData[key]}
            </p>
            `;
        }
    });
    contentData += `
        </div>
        <div style="
            width: 16px;
            height: 31px;
            position: absolute;
            bottom: -21px;
            left: 143px;
        ">
            <svg width="16" height="31" viewBox="0 0 16 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.70711 40.7071C8.31658 41.0976 7.68342 41.0976 7.29289 40.7071L0.928932
                            34.3431C0.538408 33.9526 0.538408 33.3195 0.928932 32.9289C1.31946
                            32.5384 1.95262 32.5384 2.34315 32.9289L8 38.5858L13.6569
                            32.9289C14.0474 32.5384 14.6805 32.5384 15.0711
                            32.9289C15.4616 33.3195 15.4616 33.9526
                            15.0711 34.3431L8.70711 40.7071ZM9 0V40H7V0H9Z"
                      fill="${data.colorSettings.threats2opportunities_color}"
                />
            </svg>
        </div>
    </div>`;

    return contentData;
}

export const weaknesses2StrengthsContent = (data) => {
    let contentData =
        `<div style="position:relative;">
            <div style="
                    width: 16px;
                    height: 21px;
                    position: absolute;
                    top: -21px;
                    left: 143px;">
                <svg width="16" height="31" viewBox="0 0 16 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932
                            6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159
                            1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159
                            14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711
                            6.65685L8.70711 0.292893ZM9 41V1H7V41H9Z"
                          fill="${data.colorSettings.weaknesses2strengths_color}"
                    />
                </svg>
            </div>
            <div style="position: relative;
                background: ${data.colorSettings.weaknesses2strengths_color};
                border-radius: 12px;
                color: #FFF;
                padding: 10px 10px 10px 10px;
                margin-top: 25px;
                width: 275px;"
            >
        `;
    const keysWeaknesses2Strengths = [
        'weaknesses2Strengths_0_description',
        'weaknesses2Strengths_1_description',
        'weaknesses2Strengths_2_description',
        'weaknesses2Strengths_3_description',
        'weaknesses2Strengths_4_description',
    ]
    Object.keys(data.weaknesses2StrengthsData).forEach((key, index) => {
        if (data.weaknesses2StrengthsData[key] && keysWeaknesses2Strengths.includes(key)) {
            contentData +=
                `<p style="margin-bottom:0;padding-bottom: 0;padding-top:0;font-size: 9px;margin-top:3px;display: block;text-align:left;">
                   ${data.weaknesses2StrengthsData[key]}
            </p>
            `;
        }
    });

    contentData += `
        </div>
    </div>`;

    return contentData;
}

