import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButtom";
import { useEffect, useState } from "react";

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [serverConnected, setServerConnected] = useState(false);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const checkServerStatus = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Server response was not ok");
        }
        const data = await response.json();
        if (data.connected) {
          setServerConnected(true);
        } else {
          setServerConnected(false);
          console.error("Server is not connected");
        }
      } catch (err) {
        console.error("Error checking server status:", err);
        setServerConnected(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkServerStatus();
  }, [apiUrl]);

  if (isLoading) {
    return (
      <div className="layout">
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Connecting to Server...</h2>
        </div>
      </div>
    );
  }

  if (serverConnected) {
    return (
      <div className="layout">
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CustomButton
            onClick={() => navigate("/profile-setting")}
            color="info"
            sx={{ width: "25rem" }}
          >
            Profile Setting
          </CustomButton>
        </div>
      </div>
    );
  }

  return (
    <div className="layout">
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ textAlign: "center", margin: "0 2rem" }}>
          Unable to connect to the server. Please try again later.
        </h2>
      </div>
    </div>
  );
};

export default MainPage;
