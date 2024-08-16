import Title from "../components/Title";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import EditNameForm from "../components/EditNameForm";

const EditName = () => {
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
        <Title title="Name" />
      </div>
      
        <EditNameForm />
      
    </div>
  );
};

export default EditName;
