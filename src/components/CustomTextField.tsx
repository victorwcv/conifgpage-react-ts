import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

interface TextFieldProps {
  name: string;
  defaultValue?: string;
  control: any;
  errors: any;
  label: string;
  rules?: object;
  type?: string;
}

const CustomTextField: React.FC<TextFieldProps> = ({
  name,
  defaultValue,
  control,
  errors,
  label,
  rules,
  type = "text",
}) => {
  return (
    <div className="form__input">
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field }) => (
          <TextField
            {...field}
            type={type}
            variant="outlined"
            color="info"
            fullWidth
            error={!!errors[name]}
            helperText={errors[name] ? errors[name].message : ""}
            InputProps={{
              sx: {
                backgroundColor: "white",
                "& input": {
                  padding: "1rem 2rem",
                  fontSize: "1.6rem",
                },
              },
            }}
          />
        )}
      />
    </div>
  );
};

export default CustomTextField;
