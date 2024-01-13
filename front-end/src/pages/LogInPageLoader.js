import axios from "axios";

export async function loader({ request, params }) {
  const url = new URL(request.url);
  const response = await axios.get("http://localhost:8080/auth/google/url");

  return {
    googleOauthUrl: response.data.url,
    token: url.searchParams.get("token"),
  };
}
