import React, { Fragment, useCallback, useEffect, useState } from "react";
import { DataTable, ButtonTableAction } from "../_common";
import { PaginationType } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import {
  checkedIdsSelector,
  switchHeaderSelector,
} from "../../redux/layouts/selectors";
import {
  checkIdsAction,
  initIdsAction,
  setModalConfirmationMetaAction,
} from "../../redux/layouts";
import {
  itemsCountSelector,
  paginatedItemsSelector,
  itemSelector,
} from "../../redux/userRequests/selectors";
import {
  fetchItemsAction,
  fetchItemAction,
  bulkDeleteAction,
  showModalPreviewAction,
} from "../../redux/userRequests";
import { deleteRowAction } from "../../redux/userRequests/actions";
import { baseApiUrl } from "../../constants";
import { toggleModalConfirmation } from "../../lib/functions";
import PreviewModal from "./modal/preview";

const ListRequests: React.FC = () => {
  const dispatch = useDispatch();
  const items: UserRequests.DataItem[] = useSelector(paginatedItemsSelector);
  const count: number = useSelector(itemsCountSelector);
  const checkedIds = useSelector(checkedIdsSelector);
  const switchAllHeader = useSelector(switchHeaderSelector);
  const item = useSelector(itemSelector);
  // const [filterOpen, setFilterOpen] = useState(false);
  // const { filters }: Layouts.Pagination = useSelector(
  //   paginationSelectorFactory(PaginationType.USERREQUESTS)
  // );
  const [showMoreConfigs, setShowMoreConfigs] = useState<any>({});

  const sendRequest = useCallback(() => {
    return dispatch(fetchItemsAction());
  }, [dispatch]);

  const sendDeleteRequest = useCallback(() => {
    return dispatch(bulkDeleteAction());
  }, [dispatch]);

  const handleDeleteBtnClick = useCallback(
    (event: React.SyntheticEvent): void => {
      const id = Number(event.currentTarget.getAttribute("data-id"));
      dispatch(
        setModalConfirmationMetaAction({
          onConfirm: async () =>
            dispatch(deleteRowAction(id)).then(sendRequest),
        })
      );
    },
    [dispatch, sendRequest]
  );

  const handleEditBtnClick = useCallback(
    (event: React.SyntheticEvent): void => {
      const id = Number(event.currentTarget.getAttribute("data-id"));
      dispatch(fetchItemAction(id));
    },
    [items, dispatch]
  );

  useEffect(() => {
    if (switchAllHeader) {
      const nextCheckedItems = { ...showMoreConfigs };
      items.forEach((item: UserRequests.DataItem) => {
        nextCheckedItems[item.id] = true;
      });
      setShowMoreConfigs(nextCheckedItems);
    } else {
      setShowMoreConfigs({});
    }
  }, [switchAllHeader]);

  useEffect(() => {
    if (item) {
      dispatch(showModalPreviewAction(true));
    }
  }, [item]);

  useEffect(() => {
    const setupChecked: any = [];
    items.forEach((item: UserRequests.DataItem) => {
      setupChecked.push({ id: item.id, checked: false });
    });
    dispatch(initIdsAction(setupChecked));
  }, [items]);

  return (
    <>
      <div>
        <DataTable
          hideBulk={false}
          paginationType={PaginationType.USERREQUESTS}
          totalAmount={count}
          sendRequest={sendRequest}
          sendDeleteRequest={sendDeleteRequest}
        >
          {items?.map((item) => (
            <Fragment key={item.id}>
              <tr>
                <td>
                  <input
                    className="float-checkbox"
                    type="checkbox"
                    onChange={() => dispatch(checkIdsAction(item.id))}
                    value={item.id}
                    checked={
                      checkedIds.find((data: any) => data.id === item.id)
                        ?.checked || false
                    }
                  />
                </td>
                <td style={{ width: "100px" }}>
                  {item.logo && (
                    <img
                      src={
                        /(http(s?)):\/\//i.test(item.logo)
                          ? item.logo
                          : `${baseApiUrl}/uploads/logos/${item.logo}`
                      }
                      alt=""
                      className="object-scale-down w-[85px] p-1.5"
                    />
                  )}
                </td>
                <td>{item.company_name}</td>
                <td>{item.company_head}</td>
                <td
                  className="text-right whitespace-nowrap"
                  style={{ minWidth: "150px" }}
                >
                  <ButtonTableAction
                    dataId={String(item.id)}
                    localeKey="View"
                    className={"btn-view"}
                    onClick={handleEditBtnClick}
                  />
                  <ButtonTableAction
                    dataId={String(item.id)}
                    onClick={handleDeleteBtnClick}
                    localeKey="Delete"
                    className={"btn-delete"}
                  />
                </td>
              </tr>
            </Fragment>
          ))}
        </DataTable>
        <PreviewModal />
      </div>
    </>
  );
};
export default ListRequests;
