import { useForm } from "react-hook-form";
import { useUser } from "../context/UserContext";
import CustomTextField from "./CustomTextField";
import CustomButton from "./CustomButtom";

interface IFormInput {
  username: string;
}

const EditUsernameForm = () => {
  const { user } = useUser();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
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
      <CustomButton type="submit" color="secondary">
        Save
      </CustomButton>
    </form>
  );
};

export default EditUsernameForm;
