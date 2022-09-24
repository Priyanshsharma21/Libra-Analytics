import React from 'react'
import Next from "./Next";
import styles from "../style";
import {motion} from 'framer-motion'


const Call = ({title,img,li}) => {


  return (
    <motion.div
    whileInView={{y:[100,0], opacity:[0,1]}}
    transition={{duration:0.4}}
    >

       <section className="cta-section bg-blue-500 mt-5"
       style={{
        backgroundImage : `url("${img}")`,
     }}
       >
         <div class="linear_GRAD"></div>

        <div className="auto-container">
            <div className="content-box text-center wow fadeInUp" data-wow-delay="0ms" data-wow-duration="700ms">
                <h2 className="cta_text_head">{title}</h2>
                <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                <Next 
                  li={li}
                />
              </div>
            </div>
        </div>

    </section>

    </motion.div>
  )
}

export default Call