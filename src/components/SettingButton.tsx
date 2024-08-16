import NavigateNext from "@mui/icons-material/NavigateNext";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface SettingButtonProps {
  title: string;
  content?: string;
  path?: string;
}

const SettingButton = ({ title, content, path }: SettingButtonProps) => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => path && navigate(path)}>
      <div>
        <strong className="setting__title">{title}</strong>
        {content && <p className="setting__content">{content}</p>}
      </div>
      <NavigateNext sx={{ fontSize: "3rem" }} />
    </Button>
  );
};
export default SettingButton;
