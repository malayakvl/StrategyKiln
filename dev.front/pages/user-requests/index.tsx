import { getSession } from "next-auth/react";
import { useSelector } from "react-redux";
import {
  // InfoBuyers,
  ListRequests,
  Filters,
  FilterValues,
} from "../../components/UserRequests";
import { paginationSelectorFactory } from "../../redux/layouts/selectors";
import { PaginationType } from "../../constants";
import Head from "next/head";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import BackendLayout from "../../components/Layout/BackendLayout";

export default function UserRequests({ session }: { session: any }) {
  if (!session) return <></>;

  const [filterOpen, setFilterOpen] = useState(false);

  const { filters }: Layouts.Pagination = useSelector(
    paginationSelectorFactory(PaginationType.USERREQUESTS)
  );

  const handleHideFilter = useCallback(() => {
    setFilterOpen(false);
  }, []);

  return (
    <>
      <Head>
        <title>Strategy Kilns - User Requests</title>
      </Head>

      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  User Requests
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-10">
              <div className="mb-2 relative">
                <FilterValues />

                {filterOpen && (
                  <Filters
                    handleHideFilter={handleHideFilter}
                    filterOpen={filterOpen}
                  />
                )}
                <button
                  onClick={() => setFilterOpen(!filterOpen)}
                  className="absolute top-0 right-0 flex items-center text-sm border border-darkGray-700 rounded-lg px-4 py-1"
                >
                  <Image
                    width={16}
                    height={16}
                    src={"/images/filter.svg"}
                    alt=""
                  />
                  <div className="font-medium text-darkGray-700 ml-2">
                    Filters
                  </div>
                  <div className="ml-2 font-bold rounded-full p-[2px] text-center bg-darkGray-700 text-xs h-5 w-5 text-white">
                    {+!!filters.company_name + +!!filters.company_headline}
                  </div>
                </button>
              </div>
              <div className="mt-10">
                <ListRequests />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

UserRequests.Layout = BackendLayout;

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: `/auth/signin`,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
