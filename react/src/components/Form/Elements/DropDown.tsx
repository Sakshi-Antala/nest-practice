import { Dropdown } from 'primereact/dropdown'
import React, { useEffect, useState } from 'react'
import FormErrorMessage from '../FormErrorMessage'
import { Controller, useFormContext } from 'react-hook-form';
import { IForm_Props } from '../forms.model';
import { watch } from 'fs';

export const DropDown = (props: IForm_Props) => {
    const { attribute, placeholder, options,value } = props;
    const {
        register,
        setError,
        setValue,
        watch,
        formState: { errors },
        control
    } = useFormContext();
    const [selectedValue, setSelectedValue] = useState(value);    

    return (
        <div className="field grid">
            <div className="col-12 md:col-9 relative">
                <Controller
                    control={control}
                    name={attribute}
                    defaultValue={selectedValue} 
                    rules={{ required: `${attribute} is required` }}
                    render={({ field }) => (
                        <Dropdown
                            {...field}
                            options={options}
                            value={selectedValue}
                            onChange={(e) => {
                                setSelectedValue(e.value);
                                field.onChange(e.value)
                            }}
                            optionLabel="label"
                            placeholder={placeholder}
                            id={attribute}
                            showClear className="w-full md:w-14rem"
                        />
                    )}
                />
                <div className="pb-2 pt-1">
                    <FormErrorMessage data={{ errors: errors, name: attribute }} />
                </div>
            </div>
        </div>
    )
}
