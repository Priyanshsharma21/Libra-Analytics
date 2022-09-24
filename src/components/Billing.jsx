import { apple, bill, google,getstart } from "../assets";
import styles, { layout } from "../style";
import {motion} from 'framer-motion'


const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <motion.div className={layout.sectionImgReverse}
      whileInView={{x:[-100,0], opacity:[0,1]}}
      transition={{duration:0.5}}
    >
      <img src={getstart} alt="billing" className="w-[80%] h-[80%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </motion.div>

    <motion.div className={layout.sectionInfo}
    whileInView={{x:[100,0], opacity:[0,1]}}
    transition={{duration:1}}
    >
    <h3 className="text-blue-500 font-semibold wrv">Who Are We?</h3>
      <h2 className={`${styles.heading2} pinhead text-slate-700`}>
        Discover Libra  <br className="sm:block hidden" /> Analytics
      </h2>
      <p className={`${styles.paragraph} max-w-[600px] mt-5 text-slate-600`}>
      We are India's best bunch of Data analysts, Data engineers & Data scientists. We actively work with companies from around the world who are looking to embrace the data deluge and create value out of it as a result. We partner with companies from various industries and solve their problems through our quantitative, engineering, business and advisory capabilities.
      </p>
    </motion.div>
  </section>
);

export default Billing;

















// import { apple, bill, google } from "../assets";
// import styles, { layout } from "../style";

// const Billing = () => (
//   <section id="product" className={layout.sectionReverse}>
//     <div className={layout.sectionImgReverse}>
//       <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

//       {/* gradient start */}
//       <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
//       <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
//       {/* gradient end */}
//     </div>

//     <div className={`layout.sectionInfo`}>
//       <h4 className="text-blue-500 font-semibold">Who Are We?</h4>
//       <h2 className={`${styles.heading2} text-slate-700 font_bill`}>
//         Discover Pinhead
//       <br className="sm:block hidden" /> 
//       </h2>
//       <p className={`${styles.paragraph} text-slate-700 max-w-[470px] mt-5`}>
//       We are India's best bunch of Data analysts, Data engineers & Data scientists. We actively work with companies from around the world who are looking to embrace the data deluge and create value out of it as a result. We partner with companies from various industries and solve their problems through our quantitative, engineering, business and advisory capabilities.
//       </p>

//       {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
//         <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
//         <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
//       </div> */}
//     </div>
//   </section>
// );

// export default Billing;
