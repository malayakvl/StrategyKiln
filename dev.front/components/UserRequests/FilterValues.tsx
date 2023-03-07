import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useSelector } from "react-redux";
import { paginationSelectorFactory } from "../../redux/layouts/selectors";
import { PaginationType } from "../../constants";
// import { setPaginationAction } from "../../redux/layouts";
// import { filterDataSelector } from "../../redux/userRequests/selectors";

const FilterValues: React.FC<any> = () => {
  // const dispatch = useDispatch();

  // const filterData = useSelector(filterDataSelector);
  const { filters }: Layouts.Pagination = useSelector(
    paginationSelectorFactory(PaginationType.USERREQUESTS)
  );

  const dataFetched = true;

  return (
    <>
      {dataFetched && (
        <div className="flex flex-wrap ml-8">
          {filters?.name && (
            <div className="filter-value">
              Search By: {filters.name}
              <em role="presentation" />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FilterValues;
