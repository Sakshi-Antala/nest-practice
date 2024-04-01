import { Button } from 'primereact/button'
import React from 'react'
import { IForm_Button } from '../forms.model'

const FormButton = (props:IForm_Button) => {
    const { label,onClick } = props
  return (
    <Button label={label} onClick={onClick} className='mr-2'/>
  )
}

export default FormButton
