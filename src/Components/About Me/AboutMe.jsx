import React from "react";
import Title from "../Title/Title";

const AboutMe = () => {
  return (
    <div className="px-3">
      <Title title="About Me"></Title>
      <div className="flex flex-col gap-7 md:text-lg text-navy font-medium">
        <h1>
          My name is <span className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-sky-500 from-10%   to-navy-light to-90%">Mehedi Hasan Munna</span>. A front-end developer from Bangladesh
          who spends most of the day coding, solving problems, or hunting bugs. I
          am currently studying Department of Computer Science and Engineering
          in Daffodil International University. I wrote my first line of code in
          2021, and it was the classic "Hello, World". My journey into the world
          of programming began with the C programming language. Gradually I
          explored C++ and Java diving deeper into the fascinating world of
          code. During this time, I honed my problem-solving skills by
          participating in various online judges like Codeforces, CodeChef, and
          LeetCode primarily using C++.
        </h1>
        <h1>
          {" "}
          At one point, I discovered my passion for web development and decided
          to explore it further. I started with the basics, learning HTML, CSS,
          Git, and CSS frameworks like Tailwind. After mastering these, I
          delved into JavaScript and its popular framework React. Once I became
          proficient in front-end development, I expanded my knowledge to
          include back-end technologies such as Express.js, Node.js, and MongoDB
          as a database. Currently, I am deepening my understanding of advanced
          topics in these technologies, striving to improve and grow as a
          developer every day
        </h1>
        <h1 className="">
          I have a passion for learning and sharing my knowledge with others. I
          love to solve problems. I am strategic , goal oriented & always work
          with an end goal in my mind. Always I try my best to everything. I
          love to travel & explore everything. This is all about me. Thank You ❤️
        </h1>
      </div>
    </div>
  );
};

export default AboutMe;
