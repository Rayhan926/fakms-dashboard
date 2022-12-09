import React from "react";
import { useField } from "formik";
import { InputProps } from "../../config/types";

type FormikInputProps = {
  name: string;
} & InputProps;
const FormikInput = React.forwardRef<HTMLInputElement, FormikInputProps>(
  (props, ref) => {
    const [field, meta, helpers] = useField(props);
    return (
      <input
        className="__input"
        type={"text"}
        {...field}
        {...props}
        ref={ref}
      />
    );
  },
);

FormikInput.displayName = "FormikInput";
export default FormikInput;
