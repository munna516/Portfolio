import { Link } from "react-router-dom";
import { MdTableRows } from "react-icons/md";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link>Skills</Link>
      </li>
      <li>
        <Link>Education</Link>
      </li>
      <li>
        <Link>Projects</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <MdTableRows className="text-2xl"></MdTableRows>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="text-4xl font-bold">
          Mehedi Hasan Munna
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Download Resume</a>
      </div>
    </div>
  );
};

export default Navbar;
