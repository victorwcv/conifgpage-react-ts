import { useForm } from "react-hook-form";
import { useUser } from "../context/UserContext";
import CustomTextField from "./CustomTextField";
import CustomButton from "./CustomButtom";
import { useUpdateUser } from "../hooks/useUpdateUser";

interface IFormInput {
  username: string;
}

const EditUsernameForm = () => {
  const { updateUser, loading, error } = useUpdateUser();

  const { user, setUser } = useUser();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const USER_ID = user?.id?.toString();

  const onSubmit = async (data: IFormInput) => {
    if (!USER_ID) return;
    await updateUser(
      USER_ID,
      { username: data.username.trim() },
      user,
      setUser
    );
  };

  if (!user) return null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <CustomTextField
        name="username"
        defaultValue={user?.username}
        control={control}
        errors={errors}
        label="Username"
        rules={{ required: "Field required" }}
      />
      <div>
        {error && <p className="error">{error}</p>}
        <CustomButton type="submit" color="secondary" disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </CustomButton>
      </div>
    </form>
  );
};

export default EditUsernameForm;
