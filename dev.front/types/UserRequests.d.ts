declare namespace UserRequests {
  interface Root {
    count: number;
    items: DataItem[];
    item: DataItem;
    html: any;
    isFetched: boolean;
    loading: boolean;
    showPopup: boolean;
    filterData: any;
    showDateSelector: boolean;
    showModalPreviewPopup: boolean;
    statisticData: any;
  }

  interface DataItem {
    id: number;
    company_name: string;
    company_head: string;
    logo: string;
    data: any;
  }
}
