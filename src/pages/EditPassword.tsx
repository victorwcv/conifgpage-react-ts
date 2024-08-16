import ArrowBack from "@mui/icons-material/ArrowBack";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import EditPasswordForm from "../components/EditPasswordForm";

const EditPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="layout">
      <div style={{ position: "relative" }}>
        <ArrowBack
          sx={{
            fontSize: "3rem",
            position: "absolute",
            top: "3rem",
            left: "3rem",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        />
        <Title title="Change Password" />
      </div>
      <EditPasswordForm />
    </div>
  );
};

export default EditPassword;
