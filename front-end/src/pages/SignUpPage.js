import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../auth/useToken";
import axios from "axios";

export const SignUpPage = () => {
  const [, setToken] = useToken();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, ] = useState("");
  const navigate = useNavigate();

  const onSignUpClicked = async () => {
    const response = await axios.post("http://localhost:8080/api/signup", {
      email: email,
      password: password,
    });
    setToken(response.data.token);
    navigate("/verify-email");
  };

  return (
    <div className="content-container">
      <h1>Sign Up</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <input
        placeholder="someone@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        placeholder="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <hr />
      <button
        disabled={!email || !password || password !== confirmPassword}
        onClick={onSignUpClicked}
      >
        Sign Up
      </button>
      <button onClick={() => navigate("/login")}>
        Already have an account? Log in
      </button>
    </div>
  );
};
