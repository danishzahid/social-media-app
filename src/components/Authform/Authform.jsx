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
  const [userName, setUserName] = React.useState("");
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
          userName,
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

  const loginHandler = async () => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          password,
        }),
      });
      const responseData = await response.json();
      console.log(responseData);
      setUser({
        user: responseData.foundUser,
        token: responseData.encodedToken,
      });
      navigate("/feed", { replace: true });
    } catch (e) {
      console.log(e);
    }
  };

  const authHandler = (active) => {
    if (active) {
      signupHandler();
    } else {
      loginHandler();
    }
  };

  const guestLoginHandler = async () => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "danishzahid",
          password: "danishZahid123",
        }),
      });
      const responseData = await response.json();
      console.log(responseData);
      setUser({
        user: responseData.foundUser,
        token: responseData.encodedToken,
      });
      navigate("/feed", { replace: true });
    } catch (e) {
      console.log(e);
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
        </>
      )}

      <div className={styles.formGroup}>
        <label htmlFor="userName">User Name:</label>
        <input
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          type="userName"
          id="userName"
          placeholder="Enter user name"
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
      {!active && (
        <button
          type="button"
          className={styles.guestLoginButton}
          onClick={guestLoginHandler}
        >
          Login as Guest
        </button>
      )}
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
