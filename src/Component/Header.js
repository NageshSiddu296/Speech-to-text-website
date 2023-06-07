import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";
const Header = () => {
  return (
    <div className="shadow">
      <nav className="navbar">
        <div>
          <a href="https://www.linkedin.com/in/nagesh-b-c-739bb622a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bi1AdObNJQ%2F%2BAX6feUnediA%3D%3D">
            <img
              className="logo"
              src="https://firebasestorage.googleapis.com/v0/b/sid-projects.appspot.com/o/1643089063754.jpg?alt=media&token=2f5f5f8c-fe78-4e6d-b27f-66217b6d91a9"
              alt=""
            />
          </a>
        </div>
        <ul className="items">
          <li>
            <NavLink className="item-name" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="item-name" to="/About">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="item-name" to="/Contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="item-name" to="/Login">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
