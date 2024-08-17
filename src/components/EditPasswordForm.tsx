import React from "react";
import { useForm } from "react-hook-form";
import PasswordField from "./PasswordField";
import CustomButton from "./CustomButtom";
import { useUser } from "../context/UserContext";
import { useUpdateUser } from "../hooks/useUpdateUser";

interface IFormInput {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const MyForm: React.FC = () => {
  const { updateUser, loading, error } = useUpdateUser();
  const { user, setUser } = useUser();

  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const USER_ID = user?.id?.toString();

  const onSubmit = async (data: IFormInput) => {
    if (!USER_ID) return;
    await updateUser(USER_ID, { password: data.newPassword }, user, setUser);
    reset();
  };

  const newPassword = watch("newPassword");

  if (!user) return null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div>
        <PasswordField
          name="currentPassword"
          control={control}
          errors={errors}
          label="Current Password"
          rules={{
            required: "Current Password is required",
            validate: (value: string) =>
              value === user?.password || "Incorrect Password",
          }}
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

      <div>
        {error && <p className="error">{error}</p>}
        <CustomButton type="submit" color="secondary" disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </CustomButton>
      </div>
    </form>
  );
};

export default MyForm;
