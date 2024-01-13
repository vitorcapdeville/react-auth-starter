import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import { useToken } from "../auth/useToken";

export const LogInPage = () => {
  const [, setToken] = useToken();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { googleOauthUrl, token: oauthToken } = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (oauthToken) {
      setToken(oauthToken);
      navigate("/");
    }
  }, [oauthToken, setToken, navigate]);

  const onLogInClicked = async () => {
    const response = await axios.post("http://localhost:8080/api/login", {
      email: email,
      password: password,
    });
    setToken(response.data.token);
    navigate("/");
  };

  return (
    <div className="content-container">
      <h1>Log In</h1>
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
      <hr />
      <button disabled={!email || !password} onClick={onLogInClicked}>
        Log In
      </button>
      <button onClick={() => navigate("/forgot-password")}>
        Forgot your password?
      </button>
      <button onClick={() => navigate("/signup")}>
        Don't have an account? Sign up
      </button>
      <button
        disabled={!googleOauthUrl}
        onClick={() => {
          window.location.href = googleOauthUrl;
        }}
      >
        Log in with Google
      </button>
    </div>
  );
};
