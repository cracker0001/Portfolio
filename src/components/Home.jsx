import React from 'react';
import { motion } from 'framer-motion';
import Resumephoto from "../assets/resume-photo.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-6 md:px-12 lg:px-20">
        
        {/* Animated Text Section */}
        <motion.div
          className="flex flex-col justify-center h-full text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            I'm a Front-End Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md text-sm sm:text-base">
            I am a passionate Frontend Developer skilled in HTML, CSS, JavaScript, and React. 
            I specialize in creating responsive, user-friendly web applications with a strong 
            focus on design and performance. I thrive in collaborative environments and am 
            dedicated to continuous learning and delivering high-quality code.
          </p>
          
          {/* Animated Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="portfolio" 
              smooth duration={500} 
              className="group text-white w-fit px-6 py-3 my-2 flex items-center 
              rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer mx-auto md:mx-0"
            >
              Portfolio
              <motion.span 
                className="ml-1"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <MdOutlineKeyboardArrowRight size={25} />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated Image */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-10, 10, -10] }} // Floating effect
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center mt-24"
        >
          <motion.img
            src={Resumephoto}
            alt="my profile"
            className="rounded-2xl mx-auto max-h-64 md:max-h-80 w-auto"
            animate={{ scale: [1, 1.05, 1] }} // Slight pulsing effect
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
