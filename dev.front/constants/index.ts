// Each table pagination and controls meta stored to redux separately
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
export const baseApiUrl = publicRuntimeConfig.apiUrl;
export const baseUrl = publicRuntimeConfig.siteUrl;

export enum PaginationType {
  USERREQUESTS = "userrequests",
}

export const TableHeaders: { [key in PaginationType]: Type.DataTableHeader[] } =
  {
    [PaginationType.USERREQUESTS]: [
      { titleKey: "Logo" },
      { sortKey: "company_name", titleKey: "Company Name" },
      { sortKey: "company_headline", titleKey: "Company Headline" },
      { titleKey: "Actions", className: "actions" },
    ],
  };
