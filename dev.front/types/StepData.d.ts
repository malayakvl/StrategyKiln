declare namespace StepData {
  interface Root {
    companyData: {} | null;
    strengthsData: {} | null;
    uploadedFiles: File | null;
    serverUploadLogo: string | null;
    weaknessesData: {} | null;
    opportunitiesData: {} | null;
    threatsData: {} | null;
    threats2OpportunitiesData: {} | null;
    weaknesses2StrengthsData: {} | null;
    strengthsDataStatuses: {} | null;
    weaknessesDataStatuses: {} | null;
    opportunitiesDataStatuses: {} | null;
    threatsDataStatuses: {} | null;
    threats2OpportunitiesDataStatuses: {} | null;
    weaknesses2StrengthsDataStatuses: {} | null;
    colorSettings: {
      strengths_color: string;
      threats_color: string;
      weaknesses_color: string;
      opportunities_color: string;
      threats2opportunities_color: string;
      weaknesses2strengths_color: string;
    };
    paletteSettings: {
      strengths_color: string;
      threats_color: string;
      weaknesses_color: string;
      opportunities_color: string;
      threats2opportunities_color: string;
      weaknesses2strengths_color: string;
    };

    // reloadDataStrengths: boolean;
    // reloadDataWeaknesses: boolean;
    // reloadDataThreats: boolean;
    // reloadDataOpportunities: boolean;
    // reloadWeaknesses2Strengths: boolean;
    // reloadThreats2Opportunities: boolean;

    showModalStrengths: boolean;
    showModalWeaknesses: boolean;
    showModalThreats: boolean;
    showModalOpportunities: boolean;
    showModalWeaknesses2Strengths: boolean;
    showModalThreats2Opportunities: boolean;
  }
}
