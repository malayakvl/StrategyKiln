import { Action, handleActions } from "redux-actions";
import {
  setCompanyAction,
  updateCompanyLogoAction,
  setStrengthsAction,
  setWeaknessesAction,
  setOpportunitiesAction,
  setThreatsAction,
  setThreats2OpportunitiesAction,
  setWeaknesses2StrengthAction,
  setStrengthsDisplayAction,
  setWeaknessesDisplayAction,
  setOpportunitiesDisplayAction,
  setThreatsDisplayAction,
  setThreats2OpportunitiesDisplayAction,
  setWeaknesses2StrengthDisplayAction,
  setStorageVisibilityAction,
  submitFormAction,
  setColorAction,
  setPaletteAction,
  showModalStrengthsAction,
  showModalWeaknessesAction,
  showModalThreatsAction,
  showModalOpportunitiesAction,
  showModalWeaknesses2StrengthsAction,
  showModalThreats2OpportunitiesAction,
  addUploadedFile,
  removeUploadedFile,
} from "./actions";

const initialState: State.StepData = {
  companyData: {
    company_name: "",
    company_headline: "",
    company_logo: "",
  },
  uploadedFiles: null,
  serverUploadLogo: null,
  strengthsData: {
    strengths_0_description: "",
    strengths_1_description: "",
    strengths_2_description: "",
    strengths_3_description: "",
    strengths_4_description: "",
  },
  strengthsDataStatuses: [false, false, false, false, false],

  weaknessesData: {
    weaknesses_0_description: "",
    weaknesses_1_description: "",
    weaknesses_2_description: "",
    weaknesses_3_description: "",
    weaknesses_4_description: "",
  },
  weaknessesDataStatuses: [false, false, false, false, false],

  opportunitiesData: {
    opportunities_0_description: "",
    opportunities_1_description: "",
    opportunities_2_description: "",
    opportunities_3_description: "",
    opportunities_4_description: "",
  },
  opportunitiesDataStatuses: [false, false, false, false, false],

  threatsData: {
    threats_0_description: "",
    threats_1_description: "",
    threats_2_description: "",
    threats_3_description: "",
    threats_4_description: "",
  },
  threatsDataStatuses: [false, false, false, false, false],

  threats2OpportunitiesData: {
    threats2Opportunities_0_description: "",
    threats2Opportunities_1_description: "",
    threats2Opportunities_2_description: "",
    threats2Opportunities_3_description: "",
    threats2Opportunities_4_description: "",
  },
  threats2OpportunitiesDataStatuses: [false, false, false, false, false],

  weaknesses2StrengthsData: {
    weaknesses2Strengths_0_description: "",
    weaknesses2Strengths_1_description: "",
    weaknesses2Strengths_2_description: "",
    weaknesses2Strengths_3_description: "",
    weaknesses2Strengths_4_description: "",
  },
  weaknesses2StrengthsDataStatuses: [false, false, false, false, false],

  colorSettings: {
    strengths_color: "#ED5829",
    threats_color: "#FCAB32",
    weaknesses_color: "#FCAB32",
    opportunities_color: "#ED5829",
    threats2opportunities_color: "#ED5829",
    weaknesses2strengths_color: "#ED5829",
  },

  paletteSettings: {
    strengths_color: "#ED5829",
    threats_color: "#FCAB32",
    weaknesses_color: "#FCAB32",
    opportunities_color: "#ED5829",
    threats2opportunities_color: "#ED5829",
    weaknesses2strengths_color: "#ED5829",
  },

  showModalStrengths: false,
  showModalWeaknesses: false,
  showModalThreats: false,
  showModalOpportunities: false,
  showModalWeaknesses2Strengths: false,
  showModalThreats2Opportunities: false,
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS: any = {
  [setCompanyAction]: {
    next: (state: State.StepData, action: Action<any>): State.StepData => ({
      ...state,
      companyData: action.payload,
    }),
  },
  [updateCompanyLogoAction]: {
    next: (state: State.StepData, action: Action<any>): State.StepData => ({
      ...state,
      companyData: { ...state.companyData, company_logo: action.payload },
    }),
  },
  [setStrengthsAction]: {
    next: (state: State.StepData, action: Action<any>): State.StepData => ({
      ...state,
      strengthsData: action.payload,
    }),
  },
  [setStrengthsDisplayAction]: {
    next: (state: State.StepData, action: Action<boolean>): State.StepData => ({
      ...state,
      strengthsDataStatuses: action.payload,
    }),
  },
  [setWeaknessesAction]: {
    next: (state: State.StepData, action: Action<any>): State.StepData => ({
      ...state,
      weaknessesData: action.payload,
    }),
  },
  [setWeaknessesDisplayAction]: {
    next: (state: State.StepData, action: Action<boolean>): State.StepData => ({
      ...state,
      weaknessesDataStatuses: action.payload,
    }),
  },
  [setOpportunitiesAction]: {
    next: (state: State.StepData, action: Action<any>): State.StepData => ({
      ...state,
      opportunitiesData: action.payload,
    }),
  },
  [setOpportunitiesDisplayAction]: {
    next: (state: State.StepData, action: Action<boolean>): State.StepData => ({
      ...state,
      opportunitiesDataStatuses: action.payload,
    }),
  },
  [setThreatsAction]: {
    next: (state: State.StepData, action: Action<any>): State.StepData => ({
      ...state,
      threatsData: action.payload,
    }),
  },
  [setThreatsDisplayAction]: {
    next: (state: State.StepData, action: Action<boolean>): State.StepData => ({
      ...state,
      threatsDataStatuses: action.payload,
    }),
  },
  [setThreats2OpportunitiesAction]: {
    next: (state: State.StepData, action: Action<any>): State.StepData => ({
      ...state,
      threats2OpportunitiesData: action.payload,
    }),
  },
  [setThreats2OpportunitiesDisplayAction]: {
    next: (state: State.StepData, action: Action<boolean>): State.StepData => ({
      ...state,
      threats2OpportunitiesDataStatuses: action.payload,
    }),
  },
  [setWeaknesses2StrengthAction]: {
    next: (state: State.StepData, action: Action<any>): State.StepData => ({
      ...state,
      weaknesses2StrengthsData: action.payload,
    }),
  },
  [setWeaknesses2StrengthDisplayAction]: {
    next: (state: State.StepData, action: Action<boolean>): State.StepData => ({
      ...state,
      weaknesses2StrengthsDataStatuses: action.payload,
    }),
  },
  [setStorageVisibilityAction]: {
    next: (state: State.StepData, action: Action<boolean>): State.StepData => ({
      ...state,
      strengthsDataStatuses: JSON.parse(
        localStorage.getItem("step2Data_strengthVisibility") || "{}"
      ),
      weaknessesDataStatuses: JSON.parse(
        localStorage.getItem("step2Data_weaknessesVisibility") || "{}"
      ),
      opportunitiesDataStatuses: JSON.parse(
        localStorage.getItem("step2Data_opportunitiesVisibility") || "{}"
      ),
    }),
  },
  [setPaletteAction]: {
    next: (state: State.StepData, action: Action<any>): State.StepData => ({
      ...state,
      paletteSettings: {
        ...state.paletteSettings,
        [action.payload.field]: action.payload.color,
      },
    }),
  },
  [setColorAction]: {
    next: (state: State.StepData, action: Action<any>): State.StepData => ({
      ...state,
      colorSettings: {
        ...state.paletteSettings,
      },
    }),
  },

  [showModalStrengthsAction]: {
    next: (state: State.StepData, action: Action<boolean>): State.StepData => ({
      ...state,
      showModalStrengths: action.payload,
    }),
  },
  [showModalWeaknessesAction]: {
    next: (state: State.StepData, action: Action<boolean>): State.StepData => ({
      ...state,
      showModalWeaknesses: action.payload,
    }),
  },
  [showModalThreatsAction]: {
    next: (state: State.StepData, action: Action<boolean>): State.StepData => ({
      ...state,
      showModalThreats: action.payload,
    }),
  },
  [showModalOpportunitiesAction]: {
    next: (state: State.StepData, action: Action<boolean>): State.StepData => ({
      ...state,
      showModalOpportunities: action.payload,
    }),
  },
  [showModalWeaknesses2StrengthsAction]: {
    next: (state: State.StepData, action: Action<boolean>): State.StepData => ({
      ...state,
      showModalWeaknesses2Strengths: action.payload,
    }),
  },
  [showModalThreats2OpportunitiesAction]: {
    next: (state: State.StepData, action: Action<boolean>): State.StepData => ({
      ...state,
      showModalThreats2Opportunities: action.payload,
    }),
  },

  [addUploadedFile]: (
    state: State.StepData,
    action: Type.ReduxAction<State.StepData>
  ): State.StepData => {
    return <StepData.Root>(<unknown>{
      ...state,
      uploadedFiles: action.payload,
    });
  },
  // [removeUploadedFile]: (
  //     state: State.StepData,
  //     action: Type.ReduxAction<State.StepData>
  // ): State.StepData => {
  //     return <StepData.Root>{
  //         ...state,
  //         uploadedFiles:
  //         )
  //     };
  // },
};

export {
  setStrengthsAction,
  setWeaknessesAction,
  setOpportunitiesAction,
  setThreatsAction,
  setThreats2OpportunitiesAction,
  setWeaknesses2StrengthAction,
  setStrengthsDisplayAction,
  setWeaknessesDisplayAction,
  setOpportunitiesDisplayAction,
  setThreatsDisplayAction,
  setThreats2OpportunitiesDisplayAction,
  setWeaknesses2StrengthDisplayAction,
  setStorageVisibilityAction,
  setColorAction,
  setPaletteAction,
  showModalStrengthsAction,
  showModalWeaknessesAction,
  showModalThreatsAction,
  showModalOpportunitiesAction,
  showModalWeaknesses2StrengthsAction,
  showModalThreats2OpportunitiesAction,
  submitFormAction,
  addUploadedFile,
  removeUploadedFile,
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions(ACTION_HANDLERS, initialState as any);
