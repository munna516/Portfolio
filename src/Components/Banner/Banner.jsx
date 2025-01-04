import { FaXTwitter } from "react-icons/fa6";
import profilePic from "../../assets/Images/munna.jpg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="md:flex items-center justify-evenly mt-32 px-5 lg:px-10">
      {/* Left Side Designamtion */}
      <div className="text-center md:text-left">
        <div className="">
          <h1 className="text-navy font-medium text-base md:text-lg lg:text-xl">
            Welcome to My Personal Portfolio
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold my-3">
            I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 from-10%   to-navy-light to-90%">
              Mehedi Hasan Munna
            </span>
          </h1>
          <p className="md:text-xl lg:text-2xl font-semibold">
            Frontend Developer From Bangladesh..
          </p>
        </div>
        <div className="text-3xl flex justify-center md:justify-start gap-5 mt-6">
          <a href="https://github.com/munna516" target="_blank">
            {" "}
            <FaGithub />
          </a>
          <a
            className="text-blue-600"
            href="https://www.facebook.com/mehedi.hasan.munna.5161/"
            target="_blank"
          >
            {" "}
            <FaFacebook />
          </a>
          <a href="https://x.com/munna_516" target="_blank">
            {" "}
            <FaXTwitter />
          </a>
          <a
            className="text-blue-600"
            href="https://www.linkedin.com/in/mehedi--hasan-munna/"
            target="_blank"
          >
            {" "}
            <FaLinkedin />
          </a>
        </div>
        <div className="mt-8">
          <a
            href="/resume.pdf"
            download="Munna_Resume.pdf"
            className="btn bg-royal-blue text-white hover:bg-navy-light "
          >
            Download Resume
          </a>
        </div>
      </div>
      {/* Right Side Picture */}
      <div className="mt-8 md:mt-0 flex justify-center">
        <img className="w-56 lg:w-72 rounded-full " src={profilePic} alt="" />
      </div>
    </div>
  );
};

export default Banner;
