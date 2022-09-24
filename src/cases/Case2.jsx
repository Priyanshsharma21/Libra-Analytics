import React from 'react'
import './case.css'
import { motion } from 'framer-motion';
import {case2,case3} from '../assets'
import { Call } from '../components';

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
const Case2 = () => {
  return (
    <div className="container cont_case" id="case_top2">
    <section class="blog-content">
        <div class="auto-container">
            <div class="sec-title stt">
                <h2>Hyperpersonalized Product Promotion for eCommerce using Advanced Machine Learning</h2>
            </div>
            <motion.div class="blog-image" 
            variant={scaleVariant}
            whileInView={scaleVariant.whileInView}
            >
                <figure>
                    <img className="case_img" src={case2} />
                </figure>
            </motion.div>
            <div class="content cnt">
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Domain</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            Digital Marketing
                        </p>
                    </div>
                </div>
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Customer-type:</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            DTC eCommerce Brand
                        </p>
                    </div>
                </div>
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Situation</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            From online shopping to online media consumption, hyperpersonalized recommendation has taken the world by storm. Online shopping giants have sophisticated systems in place that analyze terabytes of data to make personalized product recommendations to its users.
                        </p>
                        <p>
                            On the other hand, it is extremely difficult for DTC brands that operate on a much smaller scale to make personalized product promotions and recommendations. In the complex eCommerce ecosystem of today where a customer has tons of options to choose from, making personalized recommendations is one of the best ways to ensure consumer retention.
                        </p>
                    </div>
                </div>
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Complication</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            Our client is a DTC brand which sells apparels and home decor products online. With a consumer base of over 50000 and the total SKU types exceeding a little over 2500, the client felt the need for running smart promotions through hyperpersonalized product recommendations to customers.
                        </p>
                        <p>
                            Since slices of the customer data was silod across various data sources, it would be highly inefficient to build a Recommendation engine on top of the existing setup.
                        </p>
                    </div>
                </div>
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Resolution</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            At Libra analytics, we broke the problem down into minute problems and solved them:
                            <ul>
                                <li>
                                    Pulled the data to a centralized warehouse with a faster, scalable architecture from the various CRM and marketing platforms to break the silos
                                </li>
                                <li>
                                    Created a Recommendation engine that analyses customer behavior and create personalized product recommendations for every user profile
                                </li>
                                <li>
                                    Built an orchestration mechanism that would send these recommendations over email & SMS in real-time to customers.
                                </li>
                                <li>
                                    Used GPT-3 to make copy suggestions that would go along with the product recommendations.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Impact</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            The project was deployed site-wide by the client. Through the orchestration tool that was built, 26,000 personalized product recommendation emails were sent to their customers just in the first month of its deployment. As a result, the client witnessed a 240% increase in revenue through email marketing for the corresponding month.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Call 
        title="Sentiment Classification using NLP techniques to optimize Customer Experience"
        img={case3}
        li="sentiment-classification-using-nlp-techniques-to-optimize-customer-experience"
    />
    </div>
  )
}

export default Case2