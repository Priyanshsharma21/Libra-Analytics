import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import {motion} from 'framer-motion'
import {feature_img,gets} from '../assets'

const FeatureCard = ({ icon, title, content, index }) => (
  <motion.div className={`flex featured_card flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}
  whileInView={{y:[0,-10],x:[-100,0], opacity:[0,1]}}
  transition={{duration:0.8}}
  >
    <div className={`w-[64px] h-[64px] svg_icon rounded-full ${styles.flexCenter}`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins cont_buss buss2 font-semibold text-slate-600 text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins cont_buss font-normal text-slate-500 text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </motion.div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>

    <motion.div className={`${layout.sectionImg} flex-col`}
    whileInView={{x:[-100,0], opacity:[0,1]}}
    transition={{duration:1}}
    >
    <div className={`${layout.sectionInfo} gt_buss`}>
      <h2 className={`${styles.heading2} pinhead get_start text-slate-700 text-[42px]`}>
        Getting Started with us <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[600px] mt-3 text-slate-500`}>
      With the easy onboarding process at Libra analytics, go from identifying to solving your problems expeditiously.
      </p>
    </div>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </motion.div>

    <motion.div className={`${layout.sectionInfo} buss_img_side`}
    whileInView={{x:[100,0], opacity:[0,1]}}
    transition={{duration:0.5}}
    >
      <img src={gets} alt="billing" className="w-[90%] h-[90%] relative z-[5] ml-5" />
    </motion.div>
  </section>
);

export default Business;
