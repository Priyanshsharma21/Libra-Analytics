import React from 'react'
import './case.css'
import { motion } from 'framer-motion';
import {case1,case2} from '../assets'
import {Call} from '../components'

const scaleVariant = {
    whileInView : {
      scale:[0,1],
      opacity:[0,1],
      transition : {
        duration:1,
        ease:'easeInOut',
      }
    }
}


const Case1 = () => {
    
  return (
    <div className="container cont_case" id="case_top1">
        <section class="blog-content">
        <div class="auto-container">
            <div class="sec-title stt">
                <h2>Accelerating New Product Development Research using NLPU</h2>
            </div>
            <motion.div class="blog-image"
            variant={scaleVariant}
            whileInView={scaleVariant.whileInView}
             >
                <figure>
                    <img className="case_img" src={case1} />
                </figure>
            </motion.div>
            <div class="content cnt">
                <div class="sub-section case_margin">
                    <div class="sub-title">
                        <h3 className="">Domain</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            Automotive R&D
                        </p>
                    </div>
                </div>
                <div class="sub-section case_margin">
                    <div class="sub-title">
                        <h3 className="">Customer type</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            Enterprise Fortune 500 company
                        </p>
                    </div>
                </div>
                <div class="sub-section case_margin">
                    <div class="sub-title">
                        <h3 className="">Situation</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            New Product Development in the automotive industry is a research & capital-intensive process. It takes, on an average, 2 years for an automotive company to study, ideate & come up with the design for the initial prototype. It takes an equal amount of time to then build, test, improvize and get the vehicle ready for a market launch.
                        </p>
                        <p>
                            A lot of engineering conversations that dominate the initial R&D days tend to be repetitive and time-consuming. There’s usually a lot of data in the form of paperwork and documentation from the previous design cycles that can provide immensely valuable insights. Yet, studying them thoroughly would extend the design cycle even further.
                        </p>
                    </div>
                </div>
                <div class="sub-section case_margin">
                    <div class="sub-title">
                        <h3 className="">Resolution</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            We utilized state-of-the-art Machine Learning and Natural Language Processing concepts to build an ideation engine. 
                        </p>
                        <p>
                            The end-to-end process that we adopted to arrive at the solution is as follows:
                            <ul>
                                <li>
                                    Thoroughly analyze existing engineering text data and label them according to the nature of the problem.
                                </li>
                                <li>
                                    A Transformer that would study from this labelled dataset and learn to automatically label future engineering conversations thereby reducing dependency on Subject matter experts.
                                </li>
                                <li>
                                    Build a complex AI engine that implements an NLP model using the technique of word embedding to which the labelled data would be fed.
                                </li>
                                <li>
                                    This engine would analyze and extract the learning outcomes of these conversations and interprets the associated risk.
                                </li>
                                <li>
                                    The insights gained would then be communicated to researches through a User-interface enabling them make quick decisions.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div class="sub-section case_margin">
                    <div class="sub-title">
                        <h3 className="">Impact</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            The system has not only reduced the duration of the design cycle in half, but also has resulted in significant cost savings for the R&D department. The client is also in plans to implement the solution for all their future R&D processes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Call 
        title="Hyperpersonalized Product Promotion for eCommerce using Advanced Machine Learning"
        img={case2}
        li="hyperpersonalized-product-promotion-for-e-commerce-using-advanced-machine-learning"
    />
    </div>
  )
}

export default Case1