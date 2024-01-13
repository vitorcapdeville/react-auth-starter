import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const VerifyEmailPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);

  return (
    <div className="content-container">
      <h1>Thanks for signing up!</h1>
      <p>
        A verification e-mail has been sent to the e-mail address you provided.
        Please verify your e-mail to unlock full site features.
      </p>
    </div>
  );
};
