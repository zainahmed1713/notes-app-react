import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./assets/pages/Home";
import LoginForm from "./assets/pages/LoginForm";
import SignupForm from "./assets/pages/SignupForm";
import Navbar from "./assets/components/Navbar";
import { useAuthContext } from "./assets/context/AuthContext";

function App() {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/login"
          element={!user ? <LoginForm /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <SignupForm /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
