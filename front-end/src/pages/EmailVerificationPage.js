import { useLoaderData } from "react-router-dom";
import { useToken } from "../auth/useToken";
import { EmailVerificationSuccess } from "./EmailVerificationSuccess";
import { useEffect } from "react";

export function EmailVerificationPage() {
  const [, setToken] = useToken();
  const token = useLoaderData();

  useEffect(() => {
    setToken(token);
  }, [token, setToken]);

  return <EmailVerificationSuccess />;
}
