import axios from "axios";

export async function loader({ request, params }) {
  const { verificationString } = params;
  const response = await axios.put("http://localhost:8080/api/verify-email", {
    verificationString,
  });
  const { token } = response.data;
  return token;
}
