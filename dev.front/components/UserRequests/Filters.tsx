import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setPaginationAction } from "../../redux/layouts";
import { PaginationType } from "../../constants";
// import { userSelector } from "../../redux/user/selectors";
import FilterCompanyName from "./filters/FilterCompanyName";

interface Props {
  handleHideFilter: () => void;
  filterOpen: boolean;
}

const Filters: React.FC<Props> = ({ handleHideFilter, filterOpen }) => {
  const dispatch = useDispatch();
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const reset = () => {
    dispatch(
      setPaginationAction({
        type: PaginationType.USERREQUESTS,
        modifier: {
          filters: {
            company_name: "",
            company_headline: "",
          },
          offset: 0,
        },
      })
    );
  };

  const handleClick = (e: any) => {
    if (node?.current?.contains(e.target)) {
      return;
    }
    handleHideFilter();
  };

  return (
    <div
      className={`${
        filterOpen ? "" : "w-0 p-0"
      } fixed top-0 right-0 overflow-y-scroll fill-screen bg-white w-80 p-6 shadow-xl filters border min-h-screen max-h-screen z-50`}
      ref={node}
    >
      <div className="pb-3 border-b flex justify-between mb-4">
        <div className="text-gray-350 font-bold text-xl">Filters</div>
        <span
          className="float-right text-sm mt-1.5 text-gray-350 presentaion cursor-pointer"
          role="presentation"
          onClick={() => reset()}
        >
          Reset
        </span>
      </div>
      <div>
        <FilterCompanyName />
      </div>
    </div>
  );
};

export default Filters;
