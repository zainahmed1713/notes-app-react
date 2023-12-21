import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { json } from "react-router-dom";

const SignupForm = () => {
  const { dispatch } = useAuthContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showError, setShowError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCreds = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCreds.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({ type: "LOGIN", payload: user.accessToken });
      window.location.assign("/");
    } catch (err) {
      setError(true);
      setShowError(err.code);
      if (err.code === "auth/email-already-in-use")
        setShowError("Email already in use");
      if (err.code === "auth/weak-password")
        setShowError("Password should be at least 6 characters long");
    }
  };

  return (
    <div className="flex justify-center h-screen bg-[#E3E8F8]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#F1F2F6] w-full h-96 p-4 mt-24"
      >
        <h3 className="font-montserrat font-semibold text-center text-xl text-[#203562]">
          Sign Up
        </h3>
        <label
          htmlFor="name"
          className="block font-montserrat text-[#203562] font-semibold mt-4 mb-1"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          placeholder="John Doe"
          className="w-full mb-4 p-2 text-sm font-montserrat"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label
          htmlFor="email"
          className="block font-montserrat text-[#203562] font-semibold mb-1"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="john@example.com"
          className="w-full mb-4 p-2 text-sm font-montserrat"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label
          htmlFor="password"
          className="block font-montserrat text-[#203562] font-semibold mb-1"
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          className="w-full mb-10 p-2 text-sm font-montserrat"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="btn flex justify-center">
          <input
            type="submit"
            id="submit-btn"
            value="Sign Up"
            className="block font-montserrat bg-[#203562] text-white p-2 rounded-xl w-2/3 hover:opacity-80 cursor-pointer"
          />
        </div>
        {error && (
          <div className="error font-montserrat font-semibold text-xs text-center p-3 my-2 bg-red-700 text-white">
            {showError}
          </div>
        )}
      </form>
    </div>
  );
};
export default SignupForm;
