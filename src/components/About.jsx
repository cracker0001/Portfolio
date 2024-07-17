import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am Prem Raj, a B.Tech student at Netaji Subhash Engineering College, specializing in Computer Science with a strong passion for frontend development. My skills include HTML, CSS, JavaScript, and frameworks like Reactjs. I have experience creating responsive, user-friendly web applications and a keen eye for design and detail. My coursework and projects have honed my problem-solving abilities and taught me to work effectively in team settings. I am always eager to learn new technologies and improve my coding skills. My goal is to create seamless and engaging digital experiences that delight users and drive innovation.
        </p>

        <br />

        <p className="text-xl">
        I have a solid foundation in core subjects like Computer Networks, DBMS, and OOPS. I excel in Data Structures and Algorithms, actively solving problems on LeetCode and GeeksforGeeks. Additionally, I have participated in hackathons, enhancing my problem-solving and team collaboration abilities. I came 3rd position in the college level Hackathon.  
        </p>
      </div>
    </div>
  );
};

export default About;