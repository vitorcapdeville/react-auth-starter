import { useNavigate } from "react-router-dom";

export const EmailVerificationSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="content-container">
      <h1>Success!</h1>
      <p>
        Thanks for verifying your email, you can now use all the site's features
      </p>
      <button onClick={() => navigate("/")}> Go to home page </button>
    </div>
  );
};
