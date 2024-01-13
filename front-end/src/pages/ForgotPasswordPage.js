import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const onSubmitClicked = async () => {
    try {
      await axios.put(`http://localhost:8080/api/forgot-password/${email}`);
      setSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (e) {
      setError(e.message);
    }
  };

  return success ? (
    <div className="content-container">
      <h1>Success</h1>
      <p>Check your email for a reset link.</p>
    </div>
  ) : (
    <div className="content-container">
      <h1>Forgot Password</h1>
      <p>Enter your email and we'll send you a reset link.</p>
      {error && <div className="fail">{error}</div>}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="someone@gmail.com"
      />
      <button disabled={!email} onClick={onSubmitClicked}>
        Send reset link
      </button>
    </div>
  );
};
