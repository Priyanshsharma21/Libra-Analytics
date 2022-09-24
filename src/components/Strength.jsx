import React from 'react'
import styles from "../style";
import {motion} from 'framer-motion'
import {india,hr,rel,skills,tro,custo} from '../assets'

const Strength = () => {
  return (
    <div>
    <section class="service-section best-services-bg strenght-sec mt-5">
        <div class="auto-container">
            <motion.div class="sec-title text-center"
            whileInView={{y:[100,0], opacity:[0,1]}}
            transition={{duration:0.8}}
            >
                <p className="text-blue-500 font-semibold">Our Strengths</p>
                <h2 className={`${styles.heading2} pinhead text-slate-700 test_head_head`}>Why work with us?</h2>
            </motion.div>
            <motion.div class="row clearfix"
            whileInView={{y:[100,0], opacity:[0,1]}}
            transition={{duration:1.8}}
            >
                <div class="col-lg-4 col-md-6 col-sm-12 service-block">
                    <div class="service-block-one wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="700ms">
                        <div class="inner-box">
                            <div class="icon-box str_img_box ">
                               <img src={india} width="52" height="52" alt="" className="str_img" />
                            </div>
                            <h3 className="feature_text">Based In India</h3>
                            <p className="feature_text_sub">Get highly educated, world-class people from India to work for you at prices that are
                                affordable, and don’t cost you a fortune.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 service-block">
                    <div class="service-block-one wow fadeInUp" data-wow-delay="00ms" data-wow-duration="700ms">
                        <div class="inner-box">
                                <div class="icon-box str_img_box">
                                <img src={hr} width="45" height="45" alt="" className="str_img" />
                                </div>
                            <h3 className="feature_text">High talent density</h3>
                            <p className="feature_text_sub">Libra Analytics provides you an extremely talented bunch of cutting-edge tech experts
                                and insightful consultants.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 service-block">
                    <div class="service-block-one wow fadeInRight" data-wow-delay="00ms" data-wow-duration="700ms">
                        <div class="inner-box">
                                <div class="icon-box str_img_box">
                                 <img src={skills} width="45" height="45" alt="" className="str_img" />
                                </div>
                            <h3 className="feature_text">Subject matter expertise</h3>
                            <p className="feature_text_sub">Most of our experts hold either a PhD, or possess decades of individual experience
                                working at a specific industry.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 service-block">
                    <div class="service-block-one wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="700ms">
                        <div class="inner-box">
                                <div class="icon-box str_img_box">
                                     <img src={custo} width="45" height="45" alt="" className="str_img" />
                                </div>
                            <h3 className="feature_text">Decades of expertise</h3>
                            <p className="feature_text_sub">Our team boasts a collective experience of over 5 decades of working in the data
                                engineering & decision sciences space.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 service-block">
                    <div class="service-block-one wow fadeInUp" data-wow-delay="300ms" data-wow-duration="700ms">
                        <div class="inner-box">
                             <div class="icon-box str_img_box">
                                     <img src={tro} width="45" height="45" alt="" className="str_img" />
                                </div>
                            <h3 className="feature_text">Top Class Talent</h3>
                            <p className="feature_text_sub">Our experts are a rare combination of industrial expertise & quantitative ability which
                                enable them to solve business challenges.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 service-block">
                    <div class="service-block-one wow fadeInRight" data-wow-delay="300ms" data-wow-duration="700ms">
                        <div class="inner-box">
                                <div class="icon-box str_img_box">
                                     <img src={rel} width="45" height="45" alt="" className="str_img" />
                                </div>
                            <h3 className="feature_text">360° partnership</h3>
                            <p className="feature_text_sub">We maintain an end-to-end relationship with our partners. We always ensure to take you
                                through success from ideation to execution.</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
    </div>
  )
}

export default Strength