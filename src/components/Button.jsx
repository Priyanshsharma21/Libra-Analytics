import React from "react";
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

const Button = ({ styles }) => {

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  };

  return(
    <>
      <motion.div
      whileHover={{ scale: 1.0 }}
      whileTap={{ scale: 0.9 }}
    >
      <Link onClick={goToTop} to={`/contact`}>
      <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
        Get Started
      </button>
    </Link>
  </motion.div>
    </>
  )
 };

export default Button;
