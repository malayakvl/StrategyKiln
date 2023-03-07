declare namespace Layouts {
  interface Root {
    pagination: {
      // notifications: Pagination;
      userrequests: Pagination;
    };
    toggleMenu: boolean;
    checkedIds: CheckedIds[];
    toasts: Toast[];
    isDataLoading: boolean;
    isReload: boolean;
    showModalColorPopup: boolean;
    startDownload: boolean;
    fileName: string | null;
    dbRowId: number | null;
    switchHeader: boolean;
    modalConfirmationMeta: ModalConfirmationMeta | null;
    submenuDisplayStatus: any;
  }

  interface Toast {
    id: number;
    message: ToastMessage;
    type: "error" | "success" | "info";
  }

  type ToastMessage = string | { key: string; options: object };

  interface Pagination {
    limit: number;
    offset: number;
    sort: string;
    column: string;
    query: string;
    filters?: any;
    meta?: Meta;
  }
  interface CheckedIds {
    id: number;
    checked: boolean;
  }

  interface Meta {
    preWarningSetting?: number;
  }

  interface ModalConfirmationMeta {
    titleKey?: string;
    onConfirm: () => void;
    onCancel?: () => void;
  }
}
