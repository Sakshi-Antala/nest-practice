import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import React, { useEffect, useRef } from 'react'

export const ConfrimDialogBox = () => {
    const toast = useRef(null);

  

    // const reject = () => {
    //     toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'Rejected', life: 3000 });
    // }
    
  return (
    <>
    <Toast ref={toast} />
    <ConfirmDialog />
    </>
  )
}
