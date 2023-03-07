import { createSelector } from "reselect";

// ------------------------------------
// Selectors
// ------------------------------------
const rootSelector = createSelector(
  (state: State.Root) => state.userRequests,
  (userRequests: State.UserRequests): State.UserRequests => userRequests
);

export const paginatedItemsSelector = createSelector(
  rootSelector,
  (userRequests: State.UserRequests): any => userRequests.items
);
export const itemsCountSelector = createSelector(
  rootSelector,
  (userRequests: State.UserRequests): number => userRequests.count
);
export const itemSelector = createSelector(
  rootSelector,
  (userRequests: State.UserRequests): any => userRequests.item
);
export const itemHTMLSelector = createSelector(
  rootSelector,
  (userRequests: State.UserRequests): any => userRequests.html
);
// export const htmlSelector = createSelector(
//     rootSelector,
//     (userRequests: State.UserRequests): any => userRequests.item
// );
export const filterDataSelector = createSelector(
  rootSelector,
  (userRequests: State.UserRequests): any => userRequests.filterData
);
export const showPreviewPopupSelector = createSelector(
  rootSelector,
  (userRequests: State.UserRequests): boolean =>
    userRequests.showModalPreviewPopup
);

export const statisticDataSelector = createSelector(
  rootSelector,
  (userRequests: State.UserRequests): any => userRequests.statisticData
);
