import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"


export default function Header() {
  return (
    <>

      <header className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            G-PROject
          </Link>

          <nav className="navbar-links">
            <Link to="/dashboard" className="nav-link">
              Tableau de bord
            </Link>
            <Link to="/projets" className="nav-link">
              Projets
            </Link>
            <Link to="/projets/ajouter" className="nav-link primary">
              Ajouter
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
