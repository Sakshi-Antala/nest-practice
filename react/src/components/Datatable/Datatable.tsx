import React, { useMemo } from 'react'
import FormButton from '../Form/Elements/FormButton'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { DATATABLE_ROW_PER_PAGE, IDataTableProps } from './dataTable.model'

export const Datatable = (props: IDataTableProps) => {
    const { OpenModal, value, columns,actionBodyTemplate,loading } = props
    const dynamicColumns = useMemo(() => {
        if (columns) {
            const dynamicColumn = columns?.map((col, index) => (
                <Column
                    key={index}
                    field={col.field}
                    header={col.header}
                />
            ));
            return dynamicColumn;
        }
    }, [columns]);

    const isColumnDefined =
        dynamicColumns && dynamicColumns.length > 0 ? true : false;
    return (
        <>
            <FormButton
                label="Add Task"
                onClick={OpenModal}
            />
            <DataTable
                value={value}
                size="small"
                showGridlines
                paginator={true}
                rows={DATATABLE_ROW_PER_PAGE}
                stripedRows
                emptyMessage={loading ? 'Loading...' : 'No records found'}
                dataKey="id">
                {isColumnDefined && dynamicColumns}
                {isColumnDefined && actionBodyTemplate && (
                    <Column className="action-column" body={actionBodyTemplate}></Column>
                )}
            </DataTable>
        </>
    )
}
