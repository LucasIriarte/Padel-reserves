import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()} className="bg-primary-4 px-4 text-xl text-white rounded-xl border border-primary-5/[.8]">Log In</button>;
};

export default LoginButton;