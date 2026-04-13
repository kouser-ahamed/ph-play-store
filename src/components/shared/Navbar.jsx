import React from "react";
import logoImg from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  return (
    <div>
      <nav className="shadow">
        <div className="flex justify-between gap-4 items-center py-[8px] container mx-auto">
          <img src={logoImg} alt="LogoImage" className="w-[50px]" />
          <ul className="flex justify-between items-center gap-4">
            <li>
              <MyNavLink to="/">Home</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/apps">Apps</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/installedApps">Installed Apps</MyNavLink>
            </li>
          </ul>
          <button className="btn bg-purple-500 text-white rounded-xl">
            <FaGithub />
            Contribute
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
