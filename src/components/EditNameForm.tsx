import { useForm} from "react-hook-form";
import { useUser } from "../context/UserContext";
import CustomTextField from "./CustomTextField";
import CustomButton from "./CustomButtom";

interface IFormInput {
  firstname: string;
  lastname: string;
}

const EditNameForm = () => {
  const { user } = useUser();

  const [firstname, lastname] = (user?.name?.split(" ") || ["", ""]) as [
    string,
    string
  ];

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log({name:data.firstname + " " + data.lastname});
  };

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
      <CustomButton type="submit" color="secondary">
        Save
      </CustomButton>
    </form>
  );
};

export default EditNameForm;
