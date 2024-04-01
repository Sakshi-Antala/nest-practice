import { ColumnBodyOptions } from "primereact/column";

export const DATATABLE_ROW_PER_PAGE = 10;

export interface IDataTableProps {
    columns: IColumn[];
    value?: any;
    OpenModal?: () => void;
    loading?: boolean;
    actionBodyTemplate?:
    | React.ReactNode
    | ((data: any, options: ColumnBodyOptions) => React.ReactNode);
}

export interface IColumn {
    field: string;
    header: string;
}