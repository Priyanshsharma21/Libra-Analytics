import styles from "../style";
import { logo,csa,lo} from "../assets";
import { footerLinks, socialMedia } from "../constants";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import { useEffect,useState } from "react";

const Footer = () => {

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
  <>
     <footer className="main-footer mt-5">
        <div className="auto-container">
            <div className="footer-top">
                <div className="widget-section wow fadeInUp" data-wow-delay="0ms" data-wow-duration="700ms">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-4 col-sm-12 footer-column">
                            <div className="footer-widget logo-widget">
                            <Link to={`/`} className="main_logo">
                                <motion.div className="logo_im"
                                whileHover={{ scale: 1.0 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={goToTop}
                                >
                                <img src={lo} alt="Libra Analytics" className="w-[204px] h-[42px]" />
                                </motion.div>
                                 
                            </Link>
                                <div className="text mt-3">
                                    <p>Augment your data team with experts who can both set up the infrastructure & extract valuable insights.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h3 className="font-semibold">Quick Links</h3>
                                </div>
                                <div className="widget-content">
                                    <ul>
                                        <li className="footer_text"><Link onClick={goToTop} className="text-slate-800" to={`/`}>Home</Link></li>
                                        <li className="footer_text"><Link className="text-slate-800" onClick={goToCase} to={`/`}>Case Studies</Link></li>
                                        <li onClick={goToTop} className="footer_text"><Link className="text-slate-800" to={`/contact`}>Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 footer-column">
                            <div className="footer-widget contact-widget">
                                <div className="widget-title">
                                    <h3 className="font-semibold">Contact Info</h3>
                                </div>
                                <div className="widget-content">
                                    <ul>
                                        <li> Libra Analytics Inc Private Limited, Diamond District, Old Airport Raod, Kodihalli, Bangalore - 560008.</li>
                                        <li><a href="mailto: contact@libraanalytics.ai"> contact@libraanalytics.ai</a></li>
                                    </ul>
                                </div>
                                 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom clearfix">
                <div className="copyright pull-left">
                    <p><a href="index.html">Libra Analytics</a> &copy; 2022 All Right Reserved</p>
                </div>
                <ul className="footer-nav pull-right">
                </ul>
            </div>
        </div>
    </footer>
  </>
 )
};

export default Footer;
