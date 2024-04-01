import { ErrorMessage } from '@hookform/error-message'
import React from 'react'
import { IError } from './forms.model'

const FormErrorMessage = (props:IError) => {
    const { errors,name } = props.data
  return (
    <small className='p-error absolute'>
        <ErrorMessage errors={errors} name={name} />
    </small>
  )
}

export default FormErrorMessage
