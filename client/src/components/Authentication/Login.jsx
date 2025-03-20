import { useActionState } from "react";
import { Link, useNavigate } from "react-router";
import { useLogin } from "../api/authApi";

export default function Login({ onLogin }) {
  const navigate = useNavigate();

  const { login } = useLogin();

  const loginHandler = async (previousState, formData) => {
    const formValues = Object.fromEntries(formData);
    // onLogin(formValues.email);
    // navigate("/games");
    const authData = await login(formValues.email, formValues.password);
    onLogin(authData);

    return formValues;
  };

  const [values, loginAction, isPending] = useActionState(loginHandler, {
    email: "",
    password: "",
  });

  console.log(values);
  console.log(isPending);

  return (
    <section id="login-page" className="auth">
      <form id="login" action={loginAction}>
        <div className="container">
          <div className="brand-logo"></div>
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Sokka@gmail.com"
          />

          <label htmlFor="login-pass">Password:</label>
          <input type="password" id="login-password" name="password" />
          <input
            type="submit"
            className="btn submit"
            value="Login"
            disabled={isPending}
          />
          <p className="field">
            <span>
              If you don't have profile click{" "}
              <Link to="/auth/register">here</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
}
