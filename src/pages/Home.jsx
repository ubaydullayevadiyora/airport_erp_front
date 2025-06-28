import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="Container">
      <div className="row mt-5">
        <div className="d-flex gap-4">
          <Link to="/" className="btn btn-success">
            Home page
          </Link>

          <Link to="/login" className="btn btn-info">
            Login
          </Link>

          <Link to="/register" className="btn btn-primary">
            register
          </Link>

          <Link to="/dashboard" className="btn btn-primary">
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
