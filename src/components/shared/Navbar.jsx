import React from "react";
import logoImg from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  // This is the new code, I have added this array to make the navbar more dynamic and reusable.
  const navItems = [
    {
      path: "/",
      text: "Home",
    },

    {
      path: "/apps",
      text: "Apps",
    },
    {
      path: "/installedApps",
      text: "Installation",
    },
  ];

  return (
    <div>
      <nav className="shadow">
        <div className="flex justify-between gap-4 items-center py-[8px] container mx-auto">
          <img src={logoImg} alt="LogoImage" className="w-[50px]" />
          <ul className="flex justify-between items-center gap-4">
           
            {/* This is the new code, I have replaced the old code with this to make it more dynamic and reusable. */}

            {navItems.map((item,ind) => (
              <MyNavLink key={ind} to={item.path}>{item.text}</MyNavLink>
            ))}

            {/* 
            This is the old code, I have replaced it with the above code to make it more dynamic and reusable. */}

            {/* <li>
              <MyNavLink to="/">Home</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/installedApps">Installation</MyNavLink>
            </li> */}
            
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
