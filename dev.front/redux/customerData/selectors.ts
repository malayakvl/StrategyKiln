import { createSelector } from "reselect";

// ------------------------------------
// Selectors
// ------------------------------------

const rootSelector = createSelector(
  (state: State.Root) => state.stepData,
  (stepData: State.StepData): State.StepData => stepData
);

export const companyDataSelector = createSelector(
  rootSelector,
  (stepData: State.StepData): any => stepData.companyData
);
export const uploadedFileSelector = createSelector(
  rootSelector,
  (stepData: State.StepData): any => stepData.uploadedFiles
);
export const strengthsDataSelector = createSelector(
  rootSelector,
  (stepData: State.StepData): any => stepData.strengthsData
);
export const strengthsDisplayDataSelector = createSelector(
  rootSelector,
  (stepData: State.StepData): any => stepData.strengthsDataStatuses
);

export const weaknessesDataSelector = createSelector(
  rootSelector,
  (stepData: State.StepData): any => stepData.weaknessesData
);
export const weaknessesDisplayDataSelector = createSelector(
  rootSelector,
  (stepData: State.StepData): any => stepData.weaknessesDataStatuses
);

export const opportunitiesDataSelector = createSelector(
  rootSelector,
  (stepData: State.StepData): any => stepData.opportunitiesData
);
export const opportunitiesDisplayDataSelector = createSelector(
  rootSelector,
  (stepData: State.StepData): any => stepData.opportunitiesDataStatuses
);
export const threatsDataSelector = createSelector(
  rootSelector,
  (stepData: State.StepData): any => stepData.threatsData
);
export const threatsDisplayDataSelector = createSelector(
  rootSelector,
  (stepData: State.StepData): any => stepData.threatsDataStatuses
);
export const threats2OpportunitiesDataSelector = createSelector(
  rootSelector,
  (stepData: State.StepData): any => stepData.threats2OpportunitiesData
);
export const threats2OpportunitiesDisplayDataSelector = createSelector(
  rootSelector,
  (stepData: State.StepData): any => stepData.threats2OpportunitiesDataStatuses
);
export const weaknesses2StrengthsDataSelector = createSelector(
  rootSelector,
  (stepData: State.StepData): any => stepData.weaknesses2StrengthsData
);
export const weaknesses2StrengthsDisplayDataSelector = createSelector(
  rootSelector,
  (stepData: State.StepData): any => stepData.weaknesses2StrengthsDataStatuses
);
export const colorDataSelector = createSelector(
  rootSelector,
  (stepData: State.StepData): any => stepData.colorSettings
);
export const paletterDataSelector = createSelector(
  rootSelector,
  (stepData: State.StepData): any => stepData.paletteSettings
);

export const modalStrengthSelector = createSelector(
  rootSelector,
  (stepData: State.StepData): boolean => stepData.showModalStrengths
);
export const modalWeaknessesSelector = createSelector(
  rootSelector,
  (stepData: State.StepData): boolean => stepData.showModalWeaknesses
);
export const modalThreatsSelector = createSelector(
  rootSelector,
  (stepData: State.StepData): boolean => stepData.showModalThreats
);
export const modalOpportunitiesSelector = createSelector(
  rootSelector,
  (stepData: State.StepData): boolean => stepData.showModalOpportunities
);
export const modalWeaknesses2StrengthsSelector = createSelector(
  rootSelector,
  (stepData: State.StepData): boolean => stepData.showModalWeaknesses2Strengths
);
export const modalThreats2OpportunitiesSelector = createSelector(
  rootSelector,
  (stepData: State.StepData): boolean => stepData.showModalThreats2Opportunities
);
