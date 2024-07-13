import LoginForm from "./_components/login-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login with your GitHub account",
};

const LoginPage = () => {
  return <LoginForm />;
};

export default LoginPage;
