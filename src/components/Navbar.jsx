import { useEffect, useState } from "react";
import { close, logo, menu,la,ana,csa,lo } from "../assets";
import { navLinks } from "../constants";
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'



const Navbar = ({setProgress}) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  };

  
  
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
     <Link to={`/`} className="main_logo">
      <motion.div className="logo_im"
      whileHover={{ scale: 1.0 }}
      whileTap={{ scale: 0.9 }}
      onClick={goToTop}
      >
        <img src={lo} alt="Libra Analytics" className="w-[204px] h-[42px]" />
      </motion.div>
     </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] nav_li ${
              active === nav.title ? "text-black" : "text-dimBlue"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
          {nav.id === "case-studies" ? (
            <a href={`#${nav.id}`}>{nav.title}</a>
          ):(
              <Link onClick={goToTop} to={`/${nav.id}`}>{nav.title}</Link>
          )}
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain hamb"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
               {nav.id === "case-studies" ? (
                <a href={`#${nav.id}`}>{nav.title}</a>
              ):(
                
                  <Link onClick={goToTop} to={`/${nav.id}`}>{nav.title}</Link>
                
              )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
