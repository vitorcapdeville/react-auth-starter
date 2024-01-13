import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PasswordResetFail } from "./PasswordResetFail.js";
import { PasswordResetSuccess } from "./PasswordResetSucess.js";

export const PasswordResetPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setisFailure] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { passwordResetCode } = useParams();

  const onResetClicked = async () => {
    try {
      await axios.put(
        `http://localhost:8080/api/users/${passwordResetCode}/reset-password`,
        { newPassword: password }
      );
      setIsSuccess(true);
    } catch (e) {
      setisFailure(true);
    }
  };

  if (isFailure) {
    return <PasswordResetFail />;
  }
  if (isSuccess) {
    return <PasswordResetSuccess />;
  }
  return (
    <div className="content-container">
      <h1>Reset Password</h1>
      <p>Please enter a new password</p>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        type="password"
      />
      <input
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="confirm password"
        type="password"
      />
      <button
        disabled={!password || !confirmPassword || password !== confirmPassword}
        onClick={onResetClicked}
      >
        Reset Password
      </button>
    </div>
  );
};
