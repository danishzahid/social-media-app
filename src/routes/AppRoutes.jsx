import react from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { PrivateRoute } from "../components/PrivateRoute";
import { Feed } from "../pages/Feed/Feed";
import Mockman from "mockman-js";
import { Bookmark } from "../pages/Bookmark/Bookmark";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<PrivateRoute element={<Feed />} />} />
        <Route
          path="/bookmark"
          element={<PrivateRoute element={<Bookmark />} />}
        />
        {/* <Route path="/feed" element={<Feed />} /> */}
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </Router>
  );
};
