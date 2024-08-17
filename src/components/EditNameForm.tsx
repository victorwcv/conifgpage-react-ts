import { useForm } from "react-hook-form";
import { useUser } from "../context/UserContext";
import CustomTextField from "./CustomTextField";
import CustomButton from "./CustomButtom";
import { useUpdateUser } from "../hooks/useUpdateUser";

interface IFormInput {
  firstname: string;
  lastname: string;
}

const EditNameForm = () => {
  const { updateUser, loading, error } = useUpdateUser();
  const { user, setUser } = useUser();

  const [firstname, lastname] = (user?.name?.split(" ") || ["", ""]) as [
    string,
    string
  ];

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
      { name: `${data.firstname.trim()} ${data.lastname.trim()}` },
      user,
      setUser
    );
  };

  if (!user) return null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div>
        <CustomTextField
          name="firstname"
          defaultValue={firstname}
          control={control}
          errors={errors}
          label="First Name"
          rules={{ required: "Field required" }}
        />

        <CustomTextField
          name="lastname"
          defaultValue={lastname}
          control={control}
          errors={errors}
          label="Last Name"
          rules={{ required: "Field required" }}
        />
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

export default EditNameForm;
