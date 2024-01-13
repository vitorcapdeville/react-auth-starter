import { getGoogleOauthUrl } from "../util/getGoogleOauthUrl.js";

export const getGoogleOauthUrlRoute = {
  path: "/auth/google/url",
  method: "get",
  handler: (req, res) => {
    res.status(200).json({ url: getGoogleOauthUrl() });
  },
};
