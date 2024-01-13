import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { UserInfoPage } from "./pages/UserInfoPage";
import { LogInPage } from "./pages/LogInPage";
import { SignUpPage } from "./pages/SignUpPage";
import { PrivateRoutes } from "./auth/PrivateRoute";
import { VerifyEmailPage } from "./pages/VerifyEmailPage.js";
import { EmailVerificationPage } from "./pages/EmailVerificationPage.js";
import { loader as EmailVerificationLoader } from "./pages/EmailVerificationLoader.js";
import { EmailVerificationFail } from "./pages/EmailVerificationFail.js";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage.js";
import { PasswordResetPage } from "./pages/PasswordResetPage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="page-container">
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/login",
        element: <LogInPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/verify-email/",
        element: <VerifyEmailPage />,
      },
      {
        path: "/verify-email/:verificationString",
        element: <EmailVerificationPage />,
        loader: EmailVerificationLoader,
        errorElement: <EmailVerificationFail />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "/reset-password/:passwordResetCode",
        element: <PasswordResetPage />,
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "/",
            element: <UserInfoPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
