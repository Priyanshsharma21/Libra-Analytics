import styles from "../style";
import { arrowUp } from "../assets";
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

const goToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
};

const GetStarted = () => (
  <motion.div
  whileHover={{ scale: 1.0 }}
  whileTap={{ scale: 0.9 }}
  >
    <Link onClick={goToTop} to={`/contact`}>
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradients">Get</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradients">Started</span>
      </p>
    </div>
  </div>
  </Link>
  </motion.div>
);

export default GetStarted;
