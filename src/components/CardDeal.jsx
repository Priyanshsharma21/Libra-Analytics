import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import '../index.css'
import {data_engi,ml,bl,ss,computerEye,data_Sci,ds} from '../assets'
import { useState } from "react";
import {motion} from 'framer-motion'

const CardDeal = () => {
    const [postHovered, setPostHovered] = useState(false);
    const [postHovered2, setPostHovered2] = useState(false);
    const [postHovered3, setPostHovered3] = useState(false);
    const [postHovered4, setPostHovered4] = useState(false);
    const [postHovered5, setPostHovered5] = useState(false);
    const [postHovered6, setPostHovered6] = useState(false);

  return(
    <>
        <section className="service-section look-section mt-5">
  <div className="auto-container">
      <motion.div className="sec-title text-center"
        whileInView={{y:[100,0], opacity:[0,1]}}
        transition={{duration:0.8}}
      >
          <p className="text-blue-500 font-semibold">Our Capabilities</p>
          <h2 className={`${styles.heading2} pinhead text-slate-700`}>A look inside our toolbox</h2>
          <p className="font-light text-lg test_head_sub">Our skillsets span across all ranges of the Modern Data spectrum.</p>
      </motion.div>
      <div className="row">
          <motion.div className="col-lg-4 col-md-6 col-sm-12 feature-block"
            whileInView={{x:[-100,0], opacity:[0,1]}}
            transition={{duration:1.2}}
          >
              <div className="feature-block-one wow fadeInUp" data-wow-delay="300ms" data-wow-duration="500ms">
                  <div className="inner-box ib rounded-xl" 
                   onMouseEnter={() => setPostHovered(true)}
                    onMouseLeave={() => setPostHovered(false)}
                  >
                  {postHovered ?(
                    <div className="icon-box1">
                                <div class="anim-icon">
                                    <span class="icon icon-1"></span>
                                    <span class="icon icon-2"></span>
                                    <span class="icon icon-3"></span>
                                </div>
                          <img src={ds} alt="data logo" className="svg_our1" width={59} height={60} />
                      </div>
                  ):(
                    <div className="icon-box">
                                <div class="anim-icons">
                                    <span class="icon icon-1"></span>
                                    <span class="icon icon-2"></span>
                                    <span class="icon icon-3"></span>
                                </div>
                          <img src={ds} alt="data logo" className="svg_our" width={59} height={60} />
                      </div>
                  )}
                      
                      <h3 className="font-semibold text-slate-700  text-2xl"><p>Data Engineering</p></h3>
                      <p className="text-slate-500 mt-4 text-lg font-normal">Data engineering is the biggest obstacle to implementing analytics and AI. Our experts at
                          Libra analytics deliver you a flexible, easy-to-scale data foundation.
                      </p>
                  </div>
              </div>
          </motion.div>
          <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <motion.div 
                  whileInView={{y:[100,0], opacity:[0,1]}}
                transition={{duration:0.8}}
              className="feature-block-one wow fadeInUp" data-wow-delay="600ms" data-wow-duration="500ms">
                  <div className="inner-box ib rounded-xl" 
                   onMouseEnter={() => setPostHovered2(true)}
                    onMouseLeave={() => setPostHovered2(false)}
                  >
                      {postHovered2 ?(
                    <div className="icon-box1">
                    <div class="anim-icon">
                                    <span class="icon icon-1"></span>
                                    <span class="icon icon-2"></span>
                                    <span class="icon icon-3"></span>
                                </div>
                          <img src={bl} alt="data logo" className="svg_our2" width={59} height={60} />
                      </div>
                  ):(
                    <div className="icon-box">
                    <div class="anim-icons">
                                    <span class="icon icon-1"></span>
                                    <span class="icon icon-2"></span>
                                    <span class="icon icon-3"></span>
                                </div>
                          <img src={bl} alt="data logo" className="svg_our" width={59} height={60} />
                      </div>
                  )}
                      <h3 className="font-semibold text-slate-700  text-2xl"><p>Business Intelligence</p></h3>
                      <p className="text-slate-500 mt-4 text-lg font-normal">Visualizing data can help uncover fascinating stories that are hidden from plain sight.
                          Our Data wizards build intuitive dashboards that help make intelligent decisions.
                      </p>
                  </div>
              </motion.div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <motion.div 
                 whileInView={{x:[100,0], opacity:[0,1]}}
                transition={{duration:1.2}}
              className="feature-block-one wow fadeInUp" data-wow-delay="900ms" data-wow-duration="500ms">
                  <div className="inner-box ib rounded-xl" 
                   onMouseEnter={() => setPostHovered3(true)}
                    onMouseLeave={() => setPostHovered3(false)}
                  >

                      {postHovered3 ?(
                    <div className="icon-box1">
                    <div class="anim-icon">
                                    <span class="icon icon-1"></span>
                                    <span class="icon icon-2"></span>
                                    <span class="icon icon-3"></span>
                                </div>
                          <img src={data_Sci} alt="data logo" className="svg_our3" width={59} height={60} />
                      </div>
                  ):(
                    <div className="icon-box">
                     <div class="anim-icons">
                                    <span class="icon icon-1"></span>
                                    <span class="icon icon-2"></span>
                                    <span class="icon icon-3"></span>
                                </div>
                          <img src={data_Sci} alt="data logo" className="svg_our" width={59} height={60} />
                      </div>
                  )}
                      <h3 className="font-semibold text-slate-700  text-2xl"><p>Data Science</p></h3>
                      <p className="text-slate-500 mt-4 text-lg font-normal">We actively create and test hypotheses to find answers to your most pertaining business
                          problems. We thoroughly analyze data and provide intelligent insights.</p>
                  </div>
              </motion.div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <motion.div className="feature-block-one wow fadeInUp" data-wow-delay="600ms" data-wow-duration="500ms"
                whileInView={{x:[-100,0], opacity:[0,1]}}
                transition={{duration:1}}
              >
                  <div className="inner-box ib rounded-xl" 
                   onMouseEnter={() => setPostHovered4(true)}
                    onMouseLeave={() => setPostHovered4(false)}
                  >

                      {postHovered4 ?(
                    <div className="icon-box1">
                    <div class="anim-icon">
                                    <span class="icon icon-1"></span>
                                    <span class="icon icon-2"></span>
                                    <span class="icon icon-3"></span>
                                </div>
                          <img src={ml} alt="data logo" className="svg_our4" width={59} height={60} />
                      </div>
                  ):(
                    <div className="icon-box">
                    <div class="anim-icons">
                                    <span class="icon icon-1"></span>
                                    <span class="icon icon-2"></span>
                                    <span class="icon icon-3"></span>
                                </div>
                          <img src={ml} alt="data logo" className="svg_our" width={59} height={60} />
                      </div>
                  )}
                      <h3 className="font-semibold text-slate-700  text-2xl"><p>Machine Learning & AI</p></h3>
                      <p className="text-slate-500 mt-4 text-lg font-normal">Today’s businesses actively leverage Artificial Intelligence to transform their
                          businesses. We help make smart predictions and optimize processes by deploying smart ML
                          solutions.
                      </p>
                  </div>
              </motion.div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <motion.div 
                  whileInView={{y:[100,0], opacity:[0,1]}}
                transition={{duration:0.8}}
              className="feature-block-one wow fadeInUp" data-wow-delay="900ms" data-wow-duration="500ms">
                  <div className="inner-box ib rounded-xl" 
                   onMouseEnter={() => setPostHovered5(true)}
                    onMouseLeave={() => setPostHovered5(false)}
                  >
                      {postHovered5 ?(
                    <div className="icon-box1">
                    <div class="anim-icon">
                                    <span class="icon icon-1"></span>
                                    <span class="icon icon-2"></span>
                                    <span class="icon icon-3"></span>
                                </div>
                          <img src={computerEye} alt="data logo" className="svg_our5" width={59} height={60} />
                      </div>
                  ):(
                    <div className="icon-box">
                    <div class="anim-icons">
                                    <span class="icon icon-1"></span>
                                    <span class="icon icon-2"></span>
                                    <span class="icon icon-3"></span>
                                </div>
                          <img src={computerEye} alt="data logo" className="svg_our" width={59} height={60} />
                      </div>
                  )}
                      <h3 className="font-semibold text-slate-700  text-2xl"><p>Computer Vision & NLP</p></h3>
                      <p className="text-slate-500 mt-4 text-lg font-normal">Track & automate your processes with state-of-the-art Computer Vision models. Analyze &
                          uncover insights from conversational data using modern NLP techniques.
                      </p>
                  </div>
              </motion.div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <motion.div 
                whileInView={{x:[100,0], opacity:[0,1]}}
                transition={{duration:1.2}}
              className="feature-block-one wow fadeInUp" data-wow-delay="1200ms" data-wow-duration="500ms">
                  <div className="inner-box ib rounded-xl" 
                   onMouseEnter={() => setPostHovered6(true)}
                     onMouseLeave={() => setPostHovered6(false)}
                  >

                      {postHovered6 ?(
                    <div className="icon-box1">
                    <div class="anim-icon">
                                    <span class="icon icon-1"></span>
                                    <span class="icon icon-2"></span>
                                    <span class="icon icon-3"></span>
                                </div>
                          <img src={ss} alt="data logo" className="svg_our6" width={59} height={60} />
                      </div>
                  ):(
                    <div className="icon-box">
                    <div class="anim-icons">
                                    <span class="icon icon-1"></span>
                                    <span class="icon icon-2"></span>
                                    <span class="icon icon-3"></span>
                                </div>
                          <img src={ss} alt="data logo" className="svg_our" width={59} height={60} />
                      </div>
                  )}
                      <h3 className="font-semibold text-slate-700  text-2xl"><p>Quality Engineering</p></h3>
                      <p className="text-slate-500 mt-4 text-lg font-normal">Ensure quality and performance of your software systems with Quality engineering
                          solutions built specifically for testing your business imperatives.
                      </p>
                  </div>
              </motion.div>
          </div>

      </div>
  </div>
</section>
    </>
  )
  };

export default CardDeal;
