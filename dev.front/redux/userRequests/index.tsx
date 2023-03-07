import { Action, handleActions } from "redux-actions";
import {
  fetchItemsAction,
  fetchItemAction,
  showPopupAction,
  fetchFilerItems,
  showDateSelectorAction,
  bulkDeleteAction,
  showModalPreviewAction,
  fetchStatsAction,
} from "./actions";

const initialState: {
  isFetched: boolean;
  loading: boolean;
  count: number;
  items: any[];
  item: any;
  html: any;
  showPopup: boolean;
  filterData: any;
  checkedIds: any[];
  showModalPreviewPopup: boolean;
  statisticData: any;
} = {
  isFetched: false,
  loading: false,
  count: 0,
  items: [],
  item: null,
  html: null,
  showPopup: false,
  filterData: {
    company_name: "",
    company_headline: "",
  },
  checkedIds: [],
  showModalPreviewPopup: false,
  statisticData: null,
};

const ACTION_HANDLERS: any = {
  [fetchItemsAction]: {
    next: (
      state: State.UserRequests,
      action: Type.ReduxAction<Pick<State.UserRequests, "count" | "items">>
    ): State.UserRequests => ({
      ...state,
      ...action.payload,
      loading: false,
      isFetched: true,
    }),
    throw: (state: State.UserRequests): State.UserRequests => ({
      ...state,
      loading: false,
      isFetched: false,
    }),
  },
  [fetchItemAction]: {
    next: (
      state: State.UserRequests,
      action: Type.ReduxAction<Pick<State.UserRequests, "item">>
    ): State.UserRequests => ({
      ...state,
      ...action.payload,
      loading: false,
      isFetched: true,
    }),
    throw: (state: State.UserRequests): State.UserRequests => ({
      ...state,
      loading: false,
      isFetched: false,
    }),
  },
  [fetchFilerItems]: {
    next: (
      state: State.UserRequests,
      action: Type.ReduxAction<Pick<State.UserRequests, "filterData">>
    ): State.UserRequests => ({
      ...state,
      ...action.payload,
      loading: false,
      isFetched: true,
    }),
    throw: (state: State.UserRequests): State.UserRequests => ({
      ...state,
      loading: false,
      isFetched: true,
    }),
  },
  [showPopupAction]: {
    next: (
      state: State.UserRequests,
      action: Action<boolean>
    ): State.UserRequests => ({
      ...state,
      showPopup: action.payload,
    }),
  },
  [fetchStatsAction]: {
    next: (
      state: State.UserRequests,
      action: Action<boolean>
    ): State.UserRequests => ({
      ...state,
      statisticData: action.payload,
    }),
  },
  [bulkDeleteAction]: (state: State.UserRequests): State.UserRequests => {
    return {
      ...state,
    };
  },
  [showDateSelectorAction]: {
    next: (
      state: State.UserRequests,
      action: Action<boolean>
    ): State.UserRequests => ({
      ...state,
      showDateSelector: action.payload,
    }),
  },
  [showModalPreviewAction]: {
    next: (
      state: State.UserRequests,
      action: Action<boolean>
    ): State.UserRequests => ({
      ...state,
      showModalPreviewPopup: action.payload,
    }),
  },
};

export {
  fetchItemsAction,
  fetchItemAction,
  showPopupAction,
  fetchFilerItems,
  showDateSelectorAction,
  bulkDeleteAction,
  showModalPreviewAction,
  fetchStatsAction,
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions(ACTION_HANDLERS, initialState as any);
