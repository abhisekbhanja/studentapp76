import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-info">
        <NavLink to="/" className="navbar-brand">
          Student App
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ml-3 mt-2 mt-lg-0">
          <li className="nav-item">
              <NavLink to="/" className="nav-link">
                search marks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/addmarks" className="nav-link">
                add marks
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
