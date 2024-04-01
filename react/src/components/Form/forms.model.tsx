export interface IError {
  data: {
    errors: any;
    name: string;
  };
}

export interface IForm_Props {
  attribute: string;
  placeholder: string;
  options?: IOptions[] | undefined;
  value?:any
}

export interface IOptions {
  label: string | any;
  value: string | number;
}

export interface IForm_Button {
  label: string;
  onClick?: (e: any) => void;
}
