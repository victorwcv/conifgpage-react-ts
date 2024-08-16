import ProfileSetting from "./pages/ProfileSetting";
import { useEffect } from "react";
import { useUser } from "./context/UserContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditName from "./pages/EditName";
import EditPassword from "./pages/EditPassword";
import EditUsername from "./pages/EditUsername";
import theme from "./theme/palette";
import { ThemeProvider } from "@mui/material";
import HomeApp from "./pages/HomeApp";

function App() {
  const { setUser } = useUser();

  const USER_ID = "66bf7f915c726b3bfd05299a";

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/api/user/${USER_ID}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/profile-setting" element={<HomeApp />}>
            <Route index element={<ProfileSetting />} />
            <Route path="edit-name" element={<EditName />} />
            <Route path="edit-username" element={<EditUsername />} />
            <Route path="edit-password" element={<EditPassword />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
