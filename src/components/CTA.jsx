import styles from "../style";
import Button from "./Button";
import {motion} from 'framer-motion'

const CTA = () => {

  


  return(
    <motion.div
    whileInView={{y:[100,0], opacity:[0,1]}}
    transition={{duration:0.4}}
    >

       <section className="cta-section bg-blue-500 mt-5"
        style={{
        backgroundImage : `url("https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVzaW5lc3MlMjBhbmFseXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`,
     }}
       >
         <div class="linear_GRAD"></div>

        <div className="auto-container">
            <div className="content-box text-center wow fadeInUp" data-wow-delay="0ms" data-wow-duration="700ms">
                <h2 className="cta_text_head">Start your Data transformation <br /> Journey with Libra Analytics today!</h2>
                <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                <Button />
              </div>
            </div>
        </div>

    </section>

    </motion.div>
  )
  };

export default CTA;
