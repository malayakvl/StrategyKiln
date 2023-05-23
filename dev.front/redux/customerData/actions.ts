import { createAction } from "redux-actions";
import axios from "axios";
import {
  setupFileNameAction,
  showLoaderAction,
  startDownloadAction,
  setupRowIdAction,
} from "../layouts/actions";
import { baseApiUrl } from "../../constants";

const baseUrl = `${baseApiUrl}/api`;

export const setCompanyAction: any = createAction("data/SET_COMPANY_DATA");
export const updateCompanyLogoAction: any = createAction(
  "data/UPDATE_COMPANY_DATA"
);

export const setStrengthsAction: any = createAction("data/SET_STRENGTH_DATA");
export const setWeaknessesAction: any = createAction(
  "data/SET_WEAKNESSES_DATA"
);
export const setOpportunitiesAction: any = createAction(
  "data/SET_OPPORTUNITIES_DATA"
);
export const setThreatsAction: any = createAction("data/SET_THREATS_DATA");
export const setThreats2OpportunitiesAction: any = createAction(
  "data/SET_THREATS2OPPORTUNITIES_DATA"
);
export const setWeaknesses2StrengthAction: any = createAction(
  "data/SET_WEAKNESSES2STRENGTH_DATA"
);

export const setReloadStrengthsAction: any = createAction(
  "data/SET_RELOAD_STRENGTH_STATUS"
);

// save status about textarea
export const setStrengthsDisplayAction: any = createAction(
  "data/SET_STRENGTH_DISPLAY_STATUS"
);
export const setWeaknessesDisplayAction: any = createAction(
  "data/SET_WEAKNESSES_DISPLAY_STATUS"
);
export const setOpportunitiesDisplayAction: any = createAction(
  "data/SET_OPPORTUNITIES_DISPLAY_STATUS"
);
export const setThreatsDisplayAction: any = createAction(
  "data/SET_THREATS_DISPLAY_STATUS"
);
export const setThreats2OpportunitiesDisplayAction: any = createAction(
  "data/SET_THREATS2OPPORTUNITIES_DISPLAY_STATUS"
);
export const setWeaknesses2StrengthDisplayAction: any = createAction(
  "data/SET_WEAKNESSES2STRENGTH_DISPLAY_STATUS"
);

export const setStorageVisibilityAction: any = createAction(
  "data/SET_STORAGE_DISPLAY_STATUS"
);

export const setColorAction: any = createAction("data/SET_COLOR");
export const setPaletteAction: any = createAction("data/SET_PALETTE_COLOR");

export const showModalStrengthsAction: any = createAction(
  "data/MODAL_STRENGTHS_ACTION"
);
export const showModalWeaknessesAction: any = createAction(
  "data/MODAL_WEAKNESSES_ACTION"
);
export const showModalThreatsAction: any = createAction(
  "data/MODAL_THREATS_ACTION"
);
export const showModalOpportunitiesAction: any = createAction(
  "data/MODAL_OPPORTUNITIES_ACTION"
);
export const showModalWeaknesses2StrengthsAction: any = createAction(
  "data/MODAL_WEAKNESSES2STRENGTHS_ACTION"
);
export const showModalThreats2OpportunitiesAction: any = createAction(
  "data/MODAL_THREATS2OPPORTUNITIES_ACTION"
);
export const submitFormAction: any = createAction(
  "slide/ADD_DATA",
  async (type: string) =>
    (dispatch: Type.Dispatch, getState: () => State.Root): Promise<void> => {
      const state = getState();
      dispatch(showLoaderAction(true));
      const rowId = state.layouts.dbRowId;
      return axios
        .post(
          `${baseUrl}/saveSlideData?rowId=${rowId}&type=${type}`,
          { data: JSON.stringify(state.stepData), rowId: rowId, type: type },
          {}
        )
        .then(async (res) => {
          dispatch(showLoaderAction(false));
          dispatch(setupFileNameAction(res.data.fileName));
          dispatch(setupRowIdAction(res.data.objectId));
          dispatch(startDownloadAction(true));
        })
        .catch((e) => {
          dispatch(showLoaderAction(false));
        });
    }
);
export const uploadLogoAction: any = createAction(
  "slide/UPLOAD_LOGO_ACTION",
  async (data: any) =>
    (dispatch: Type.Dispatch, getState: () => State.Root): Promise<void> => {
      const state = getState();
      dispatch(showLoaderAction(true));
      return axios
        .post(`${baseUrl}/upload-logo`, data, {})
        .then(async (res) => {
          dispatch(updateCompanyLogoAction(res.data.fileName));
          dispatch(showLoaderAction(false));
        });
    }
);
export const addUploadedFile: any = createAction("formData/ADD_UPLOADED_FILE");

// export const addUploadedFile: any = createAction(
//   "formData/ADD_UPLOADED_FILE",
//   async (data: any) =>
//     (dispatch: Type.Dispatch, getState: () => State.Root): Promise<void> => {
//       const state = getState();
//       dispatch(showLoaderAction(true));
//       return axios.post(`${baseUrl}/upload-logo`, data, {}).then(async () => {
//         console.log("FILE addUploadedFile", data.fileName);
//         dispatch(showLoaderAction(false));
//       });
//     }
// );
export const removeUploadedFile: any = createAction(
  "formData/REMOVE_UPLOADED_FILE"
);
