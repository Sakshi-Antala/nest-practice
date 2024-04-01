import { ConfirmDialog } from 'primereact/confirmdialog'
import React from 'react'
import { IConfrimDialog } from './confrimDialog.model'

export const ConfrimDialogBox = (props:IConfrimDialog) => {
    const { setConfrimDialogs,acceptFunc } = props;
  return (
    <ConfirmDialog
          visible={true} // Always set to true when confirmDialogs is true
          onHide={()=>setConfrimDialogs(false)} // Close ConfirmDialog when hidden
        accept={() => acceptFunc()} // Call deleteTask when user accepts confirmation
          header="Confirmation"
          icon="pi pi-exclamation-triangle"
          defaultFocus="accept"
          message="Are you sure you want to proceed?"
        />
  )
}
