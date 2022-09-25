import styles from "../style";
import { discount, robot,herobg } from "../assets";
import {motion} from 'framer-motion'
import GetStarted from "./GetStarted";

const scaleVariant = {
    whileInView : {
      scale:[0,1],
      opacity:[0,1],
      transition : {
        duration:0.1,
        ease:'easeInOut',
      }
    }
}




const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <motion.div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      whileInView={{x:[-100,0], opacity:[0,1]}}
      transition={{duration:0.5}}
      >

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[52px] text-slate-700 ss:leading-[72.8px] leading-[75px] heading_hero">
            We make your Data <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Works For You</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        
        <p className={`${styles.paragraph} max-w-[470px] mt-3 text-slate-700 `}>
          Augment your data team with experts who can both set up the infrastructure & extract valuable insights.
        </p>
      </motion.div>

      <motion.div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      variant={scaleVariant}
      whileInView={scaleVariant.whileInView}
      >
        <img src={herobg} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </motion.div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
