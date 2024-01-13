import { signUpRoute } from "./signUpRoute.js";
import { logInRoute } from "./logInRoute.js";
import { updateUserInfoRoute } from "./updateUserInfoRoute.js";
import { verifyEmailRoute } from "./verifyEmailRoute.js";
import { forgotPasswordRoute } from "./forgotPasswordRoute.js";
import { resetPasswordRoute } from "./resetPasswordRoute.js";
import { getGoogleOauthUrlRoute } from "./getGoogleOauthUrlRoute.js";
import { googleOauthCallbackRoute } from "./googleOauthCallbackRoute.js";

export const routes = [
  signUpRoute,
  logInRoute,
  updateUserInfoRoute,
  verifyEmailRoute,
  forgotPasswordRoute,
  resetPasswordRoute,
  getGoogleOauthUrlRoute,
  googleOauthCallbackRoute,
];
