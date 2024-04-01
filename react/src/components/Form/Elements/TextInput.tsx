import React, { useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { useFormContext } from "react-hook-form";
import { IForm_Props } from "../forms.model";
import FormErrorMessage from "../FormErrorMessage";

const TextInput = (props: IForm_Props) => {
  const { attribute, placeholder,value } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="field grid">
      <div className="col-12 md:col-9 relative">
        <InputText
          placeholder={placeholder}
          id={attribute}
          {...register(attribute, {
            required: `${attribute} is required`,
            value:value
          })}
        />
        <div className="pb-2 pt-1">
          <FormErrorMessage data={{ errors: errors, name: attribute }} />
        </div>
      </div>
    </div>
  );
};

export default TextInput;
