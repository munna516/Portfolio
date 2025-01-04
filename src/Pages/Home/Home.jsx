import React from "react";
import Banner from "../../Components/Banner/Banner";
import Skills from "../../Components/Skills/Skills";
import Education from "../../Components/Education/Education";
import Projexts from "../../Components/Projects/Projexts";
import Contact from "../../Components/Contact/Contact";
import AboutMe from "../../Components/About Me/AboutMe";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Education></Education>
      <Projexts></Projexts>
      <Contact></Contact>
    </div>
  );
};

export default Home;
