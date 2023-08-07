import React from "react";
import styles from "./Authform.module.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const Authform = () => {
  const navigate = useNavigate();
  const { user, setUser } = React.useContext(AuthContext);

  const [active, setActive] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signupHandler = async () => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });

      const responseData = await response.json();
      //console.log(response);
      if (response.status === 201 || response.status === 200) {
        console.log("mil gaya response :", responseData);
        setUser({
          user: responseData.createdUser,
          token: responseData.encodedToken,
        });
        navigate("/feed", { replace: true });
      }
      if (response.status === 422) {
        console.log("already exist");
      }
      // setUser({user:responseData.createdUser, token:responseData.encodedToken})
      // navigate("/products");
    } catch (e) {
      console.log(e);
    }
  };

  const loginHandler = () => {
    console.log("login handler");
  };

  const authHandler = (active) => {
    if (active) {
      signupHandler();
    } else {
      loginHandler();
    }
  };

  return (
    <form
      className={styles.loginForm}
      onSubmit={(e) => {
        e.preventDefault();
        authHandler(active);
      }}
    >
      <h2>{active ? "Sign up" : "Login"}</h2>
      {active && (
        <>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name:</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="firstName"
              id="firstName"
              placeholder="Enter first name"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name:</label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="lastName"
              id="lastName"
              placeholder="Enter last name"
            />
          </div>
        </>
      )}
      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          id="email"
          placeholder="Enter your email"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Password:</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          id="password"
          placeholder="Enter your password"
        />
      </div>
      <button type="submit" className={styles.loginButton}>
        {active ? "Sign up" : "Login"}
      </button>
      <button type="button" className={styles.guestLoginButton}>
        Login as Guest
      </button>
      <p className={styles.signupLink}>
        {active ? "Already have an account?" : "New user?"}{" "}
        <Link
          onClick={() => {
            setActive(!active);
          }}
        >
          {active ? "Login" : "Sign up"}
        </Link>
      </p>
    </form>
  );
};
