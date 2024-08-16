import { useState } from "react";
import {
  TextField,
  IconButton,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Controller } from "react-hook-form";
import CheckCircle from "@mui/icons-material/CheckCircle";

interface PasswordFieldProps {
  name: string;
  control: any;
  errors: any;
  label: string;
  rules?: Record<string, any>;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  name,
  control,
  errors,
  label,
  rules,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form__input">
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={rules}
        render={({ field }) => (
          <>
            <TextField
              {...field}
              type={showPassword ? "text" : "password"}
              variant="outlined"
              color="info"
              fullWidth
              error={!!errors[name]}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={handleClickShowPassword}
                      aria-label={
                        showPassword ? `Hide ${label}` : `Show ${label}`
                      }
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  backgroundColor: "white",
                  "& input": {
                    padding: "1rem 2rem",
                    fontSize: "1.6rem",
                  },
                },
              }}
            />
            {errors[name] ? (
              <FormHelperText error sx={{ color: "red", fontSize: "1.2rem" }}>
                {errors[name].message}
              </FormHelperText>
            ) : (
              <>
                <FormHelperText sx={{ color: "#45aa78", fontSize: "1.2rem" }}>
                  {rules?.minLength &&
                  field.value.length >= rules.minLength.value &&
                  rules?.maxLength &&
                  field.value.length <= rules.maxLength.value ? (
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <CheckCircle sx={{ color: "#45aa78" }} />
                      <span>Password must be 8 - 16 characters</span>
                    </span>
                  ) : (
                    ""
                  )}
                </FormHelperText>
                <FormHelperText sx={{ color: "#45aa78", fontSize: "1.2rem" }}>
                  {rules?.pattern &&
                  new RegExp(rules.pattern.value).test(field.value) ? (
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <CheckCircle sx={{ color: "#45aa78" }} />
                      <span>
                        Include at least 1 upper case and a special character
                      </span>
                    </span>
                  ) : (
                    ""
                  )}
                </FormHelperText>
              </>
            )}
          </>
        )}
      />
    </div>
  );
};

export default PasswordField;
