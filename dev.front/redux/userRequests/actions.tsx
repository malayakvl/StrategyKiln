import { createAction } from "redux-actions";
import { authHeader, toggleModalConfirmation } from "../../lib/functions";
import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/api`;
import { setSuccessToastAction, showLoaderAction } from "../layouts/actions";
import { paginationSelectorFactory } from "../layouts/selectors";
import { PaginationType } from "../../constants";
import queryString from "query-string";
// import { UserRequests } from "../../types/UserRequests";

export const fetchItemsAction: any = createAction(
  "UserRequests/FETCH_ITEMS",
  async () =>
    (
      dispatch: Type.Dispatch,
      getState: () => State.Root
    ): Promise<{ count: number; items: UserRequests.DataItem[] }> => {
      const state = getState();
      const { limit, offset, sort, column, query, filters } =
        paginationSelectorFactory(PaginationType.USERREQUESTS)(state);
      const queryFilter = JSON.stringify(filters);
      dispatch(showLoaderAction(true));
      return axios
        .get(
          `${baseUrl}/user-requests/fetch-items?${queryString.stringify({
            limit,
            offset,
            sort,
            column,
            query,
            queryFilter,
          })}`,
          {
            headers: {
              ...authHeader(state.user.user.email),
            },
          }
        )
        .then((res: any) => {
          dispatch(showLoaderAction(false));
          return {
            count: res.data.count,
            items: res.data.items,
          };
        });
    }
);

export const fetchItemAction: any = createAction(
  "UserRequests/FETCH_ITEM",
  async (itemId: number) =>
    (
      dispatch: Type.Dispatch,
      getState: () => State.Root
    ): Promise<{ item: any }> => {
      const state = getState();
      // const filters = { buyer_id: [+buyerId] };
      // const queryFilter = JSON.stringify(filters);
      dispatch(showLoaderAction(true));
      return axios
        .get(`${baseUrl}/user-requests/fetch-item/${itemId}`, {
          headers: {
            ...authHeader(state.user.user.email),
          },
        })
        .then((res: any) => {
          dispatch(showLoaderAction(false));
          return {
            item: res.data.item,
            html: res.data.html,
          };
        });
    }
);

export const fetchFilerItems: any = createAction(
  "UserRequests/FETCH_FILTER_ITEMS",
  async () =>
    async (
      dispatch: Type.Dispatch,
      getState: () => State.Root
    ): Promise<{ fileterData: any }> => {
      const state = getState();
      dispatch(showLoaderAction(true));
      const res = await axios.get(`${baseUrl}/user-requests/fetch-filters`, {
        headers: {
          ...authHeader(state.user.user.email),
        },
      });
      if (res.status) {
        dispatch(showLoaderAction(false));
      }
      return {
        fileterData: res.data.items,
      };
    }
);
export const bulkDeleteAction: any = createAction(
  "UserRequests/BULK_DELETE",
  async () =>
    async (
      dispatch: Type.Dispatch,
      getState: () => State.Root
    ): Promise<void> => {
      const state = getState();
      dispatch(showLoaderAction(true));
      return axios
        .post(
          `${baseUrl}/user-requests/bulk-delete`,
          { data: JSON.stringify(state.layouts.checkedIds) },
          {
            headers: {
              ...authHeader(state.user.user.email),
            },
          }
        )
        .then(async () => {
          dispatch(showLoaderAction(false));
          // dispatch(setSuccessToastAction("Items has been deleted"));
          await dispatch(fetchItemsAction());
        });
    }
);
export const deleteRowAction: any = createAction(
  "UserRequests/DELETE_ROW",
  async (id: number) =>
    (dispatch: Type.Dispatch, getState: () => State.Root): Promise<void> => {
      const state = getState();
      dispatch(showLoaderAction(true));
      console.log("Redux Delete ID", id);
      return axios
        .delete(`${baseUrl}/user-requests/delete/${id}`, {
          headers: {
            ...authHeader(state.user.user.email),
          },
        })
        .then(async () => {
          dispatch(showLoaderAction(false));
          await dispatch(fetchItemsAction());
          dispatch(setSuccessToastAction("Product has been deleted"));
          toggleModalConfirmation();
        });
    }
);

export const fetchStatsAction: any = createAction(
  "UserRequests/FETCH_STATISTIC",
  async () =>
    (
      dispatch: Type.Dispatch,
      getState: () => State.Root
    ): Promise<{ data: any }> => {
      const state = getState();
      dispatch(showLoaderAction(true));
      return axios
        .get(`${baseUrl}/user-requests/statistic`, {
          headers: {
            ...authHeader(state.user.user.email),
          },
        })
        .then((res) => {
          dispatch(showLoaderAction(false));
          return {
            data: res.data,
          };
        });
    }
);

export const showPopupAction: any = createAction("buyers/SHOW_POPUP");
export const showModalPreviewAction: any = createAction(
  "UserRequests/SHOW_POPUP_PREVIEW"
);
export const showDateSelectorAction: any = createAction(
  "buyers/SHOW_DATE_POPUP"
);
