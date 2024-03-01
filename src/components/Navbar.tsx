import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { NavLinks } from "../components";
import { useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState(false);
  const handleTheme = () => {
    setTheme(!theme);
  };
  return (
    <nav className="bg-base-200">
      <div className=" navbar align-elements">
        <div className="navbar-start">
          {/* TITLE */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            C
          </NavLink>
          {/* DROPDOWN */}
          <details className="dropdown">
            <summary tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </summary>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </details>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* THEME SETUP */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            <BsSunFill className="swap-on w-4 h-4" />
            <BsMoonFill className="swap-off w-4 h-4" />
          </label>
          {/* CART LINKS */}
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="w-6 h-6" />
              <span className=" badge badge-sm badge-primary indicator-item">
                8
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
