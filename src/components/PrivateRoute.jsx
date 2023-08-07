import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router";

export const PrivateRoute = ({ element }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  if (user.token) {
    return element;
  } else {
    return <Navigate to={"/"} state={{ from: location }} />;
  }
};
