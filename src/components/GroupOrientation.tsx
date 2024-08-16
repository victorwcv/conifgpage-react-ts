import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { useUser } from "../context/UserContext";
import SettingButton from "./SettingButton";

const GroupOrientation = () => {
  const { user } = useUser();

  const settings = [
    { title: "Name", content: user?.name, path: "edit-name" },
    { title: "Username", content: user?.username, path: "edit-username" },
    { title: "Email", content: user?.email },
    { title: "Phone Number", content: user?.phoneNumber },
    { title: "Change Password", path: "edit-password" },
  ];

  return (
    <div className="setting">
      <Box
        sx={{
          display: "flex",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="Vertical button group"
          fullWidth={true}
          variant="contained"
          sx={{
            borderRadius: "12px",
            overflow: "hidden",
            "& .MuiButton-root": {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "left",
              padding: "1.5rem 2rem",
              textTransform: "none",
            },
          }}
        >
          {settings.map((setting) => (
            <SettingButton
              key={setting.title}
              title={setting.title}
              content={setting.content}
              path={setting.path}
            />
          ))}
        </ButtonGroup>
      </Box>

      <Box
        sx={{
          display: "flex",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="Vertical button group"
          fullWidth={true}
          variant="contained"
          sx={{
            borderRadius: "12px",
            overflow: "hidden",

            "& .MuiButton-root": {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "left",
              padding: "1.5rem 2rem",
              textTransform: "none",
            },
          }}
        >
          <SettingButton title="Delete my account and data" />
        </ButtonGroup>
      </Box>
      <Box
        sx={{
          display: "flex",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="Vertical button group"
          fullWidth={true}
          variant="contained"
          sx={{
            borderRadius: "12px",
            overflow: "hidden",
            "& .MuiButton-root": {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "left",
              padding: "1.5rem 2rem",
              textTransform: "none",
            },
          }}
        >
          <SettingButton title="Notifications" content="On" />
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default GroupOrientation;
