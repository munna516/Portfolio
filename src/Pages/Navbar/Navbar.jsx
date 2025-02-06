import { Link } from "react-router-dom";
import { MdTableRows } from "react-icons/md";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <Link
          to="/"
          className="border-royal-blue hover:border-b-2 rounded-b-sm"
        >
          Home
        </Link>
      </li>
      <li>
        <a
          href="#about"
          className="border-royal-blue hover:border-b-2 rounded-b-sm"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#skills"
          className="border-royal-blue hover:border-b-2 rounded-b-sm"
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="#education"
          className="border-royal-blue hover:border-b-2 rounded-b-sm"
        >
          Education
        </a>
      </li>
      <li>
        <a
          href="#project"
          className="border-royal-blue hover:border-b-2 rounded-b-sm"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="border-royal-blue hover:border-b-2 rounded-b-sm"
        >
          Contact
        </a>
      </li>
    </>
  );
  return (
    <div className="navbar fixed top-0 bg-base-300 left-0 z-50  py-3 px-5 lg:px-16">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <MdTableRows className="text-2xl text-royal-blue"></MdTableRows>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2 text-royal-blue font-bold"
          >
            {navOptions}
          </ul>
        </div>
        <Link
          to="/"
          className="text-xl md:text-2xl lg:text-3xl font-bold text-royal-blue"
        >
          MH MUNNA
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1 gap-10 text-royal-blue font-bold text-lg ">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="/resume.pdf"
          download="Munna_Resume.pdf"
          className="btn bg-royal-blue text-white hover:bg-navy-light "
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
