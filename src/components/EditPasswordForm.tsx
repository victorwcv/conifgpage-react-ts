import React from "react";
import { useForm } from "react-hook-form";
import PasswordField from "./PasswordField";
import CustomButton from "./CustomButtom";

interface IFormInput {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const MyForm: React.FC = () => {
  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<IFormInput>();

  console.log("rendering");

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  const newPassword = watch("newPassword");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div>
        <PasswordField
          name="currentPassword"
          control={control}
          errors={errors}
          label="Current Password"
          rules={{ required: "Current Password is required" }}
        />
        <PasswordField
          name="newPassword"
          control={control}
          errors={errors}
          label="New Password"
          rules={{
            required: "New Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            maxLength: {
              value: 16,
              message: "Password must be no longer than 16 characters",
            },
            pattern: {
              value: /^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{8,16}$/,
              message: "Include at least 1 upper case and a special character",
            },
          }}
        />
        <PasswordField
          name="confirmPassword"
          control={control}
          errors={errors}
          label="Confirm Password"
          rules={{
            required: "Confirm Password is required",
            validate: (value: string) =>
              value === newPassword || "Passwords do not match",
          }}
        />
        <strong className="forgot-password">Forgot Password?</strong>
      </div>

      <CustomButton type="submit" color="secondary">
        Save
      </CustomButton>
    </form>
  );
};

export default MyForm;
