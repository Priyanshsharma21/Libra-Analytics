import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import {motion} from 'framer-motion'

const Testimonials = () => {


  return (<>
    <section className="service-section best-services-bg mt-5">
        <div className="auto-container">
            <motion.div className="sec-title text-center"
            whileInView={{y:[100,0], opacity:[0,1]}}
            transition={{duration:0.8}}
            >
                <p className="text-blue-500 font-semibold">Industries</p>
                <h2 className={`${styles.heading2} pinhead text-slate-700 test_head_head`}>Our Fields of Expertise</h2>
                <p className="font-light text-lg test_head_sub">We work extensively with an impressive clientele that spans across major industries.</p>
            </motion.div>

            <motion.div className="b-s-section"
            whileInView={{y:[100,0], opacity:[0,1]}}
            transition={{duration:2}}
            >
                <div className="row">
                    <div className="col-md-4">
                        <div className="post-hire">
                            <img src={`https://www.pinheadanalytics.com/assets/images/service/s-1.svg`} alt="s-1" />
                            <h4>DTC</h4>
                            <p>Get actionable insights on Digital marketing, customer journey & supply chain which help
                                ensure profitable revenue growth.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="post-hire">
                            <img src={`https://www.pinheadanalytics.com/assets/images/service/s-2.svg`} alt="s-2" />
                            <h4>SaaS</h4>
                            <p>Understand your product usage & customer journey thoroughly with the help of insights
                                that you can instantly act upon
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="post-hire">
                            <img src={`https://www.pinheadanalytics.com/assets/images/service/s-3.svg`} alt="s-3" />
                            <h4>CPG & Retail</h4>
                            <p>Optimize manufacturing & supply-chain operations. Figure out the right strategies for
                                Pricing, Promotions & Marketing.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="post-hire">
                            <img src={`https://www.pinheadanalytics.com/assets/images/service/s-4.svg`} alt="s-4" />
                            <h4>BFSI</h4>
                            <p>Employ proper risk assessment techniques & ensure profitable growth with systems that are
                                built to function effectively at scale.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="post-hire">
                            <img src={`https://www.pinheadanalytics.com/assets/images/service/s-5.svg`} alt="s-5" />
                            <h4>EdTech</h4>
                            <p>Readily understand learning styles of students with the help of applied analytics & cater
                                to each of their special needs.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="post-hire">
                            <img src={`https://www.pinheadanalytics.com/assets/images/service/s-6.svg`} alt="s-6" />
                            <h4>Logistics</h4>
                            <p>Ensure the smooth running of your transport & inventory operations in a timely,
                                cost-effective manner.</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        
        </div>
        <div id="case-study" ></div>
    </section>
  </>)

  };

export default Testimonials;
