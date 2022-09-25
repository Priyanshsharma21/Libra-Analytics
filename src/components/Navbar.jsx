import { useEffect, useState } from "react";
import { close, logo, menu,la,ana,csa,lo } from "../assets";
import { navLinks } from "../constants";
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'



const Navbar = ({setProgress}) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [toggleWidth, setToggleWidth] = useState(window.innerWidth);

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  };

  useEffect(()=>{
    window.addEventListener("resize",()=>{
      setToggleWidth(window.innerWidth)
    })
  },[window.innerWidth])

  // console.log(toggleWidth)

  const goToCase = () => {
    if(toggleWidth >= 1060){
      window.scrollTo({
        top: 4500,
        behavior: "smooth",
    });
    }else if(toggleWidth<1059 && toggleWidth>=992){
      window.scrollTo({
        top: 6800,
        behavior: "smooth",
    });
    }
    else if(toggleWidth<=991 && toggleWidth>=768){
      window.scrollTo({
        top: 7300,
        behavior: "smooth",
    });
    }
    else if(toggleWidth<=767 && toggleWidth>=390){
      window.scrollTo({
        top: 9600,
        behavior: "smooth",
    });
    }
    else if(toggleWidth<390 && toggleWidth>=335){
      window.scrollTo({
        top: 9700,
        behavior: "smooth",
    });
    }
    else if(toggleWidth<335 && toggleWidth>=200){
      window.scrollTo({
        top: 10100,
        behavior: "smooth",
    });
    }


    
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
            <Link onClick={goToCase} to={`/`}>{nav.title}</Link>
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
                <Link onClick={goToCase} to={`/`}>{nav.title}</Link>
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
