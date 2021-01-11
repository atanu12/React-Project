import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function NavBar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-blue"
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-3xl font-bold cursive tracking-widest "
          >
            Home
          </NavLink>
          <NavLink
            to="/post"
            className="inflex-flex items-center py-6 px-3 my-3 text-red-100 hover:text-green-800"
          >
            Blog Post
          </NavLink>
          <NavLink
            to="/project"
            className="inflex-flex items-center py-6 px-3 my-3 text-red-100 hover:text-green-800"
          >
            Project
          </NavLink>
          <NavLink
            to="/about"
            className="inflex-flex items-center py-6 px-3 my-3 text-red-100 hover:text-green-800"
          >
            About Me!{" "}
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            className=" mr-4"
            target="_blank"
            url="https://www.linkedin.com/in/atanu-mondal30/"
            fgColor="#fff"
            style={{ width: 50, height: 50 }}
          />
          <SocialIcon
            className=" mr-4"
            url="https://github.com/atanu12"
            target="_blank"
            bgColor="#000"
            fgColor="#fff"
            style={{ width: 50, height: 50 }}
          />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
