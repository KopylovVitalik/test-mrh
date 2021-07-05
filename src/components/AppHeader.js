import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="border fixed split-nav">
      <div className="nav-brand">
        <h3>
          <Link to="/">Vitalii Test</Link>
        </h3>
      </div>
      <Link to="/user/create" className="paper-btn">
        Create user
      </Link>
    </nav>
  );
};

export default Header;
