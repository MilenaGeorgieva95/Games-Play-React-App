import { useRegister } from "../api/authApi";
import { useUserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router";

export default function Register() {
  const { register } = useRegister();
  const { userLoginHandler } = useUserContext();
  const navigate = useNavigate();

  const registerHandler = async (formData) => {
    const {
      username,
      email,
      password,
      "confirm-password": repass,
    } = Object.fromEntries(formData);

    if (password !== repass || password === "") {
      console.log("Password mismatch!");

      return;
    }
    const authData = await register(username, email, password);
    userLoginHandler(authData);
    navigate("/games");
  };

  return (
    <section id="register-page" className="content auth">
      <form id="register" action={registerHandler}>
        <div className="container">
          <div className="brand-logo"></div>
          <h1>Register</h1>

          <label htmlFor="username">Username:</label>
          <input
            type="username"
            id="username"
            name="username"
            placeholder="maria"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="maria@email.com"
          />

          <label htmlFor="pass">Password:</label>
          <input type="password" name="password" id="register-password" />

          <label htmlFor="con-pass">Confirm Password:</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
          />

          <input className="btn submit" type="submit" value="Register" />

          <p className="field">
            <span>
              If you already have profile click <a href="#">here</a>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
}
