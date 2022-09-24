import React from 'react'
import './case.css'
import { motion } from 'framer-motion';
import {case3,case4} from '../assets'
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
const Case3 = () => {
  return (
    <div className="container cont_case" id="case_top3">
    <section class="blog-content">
        <div class="auto-container">
            <div class="sec-title stt">
                <h2>Sentiment Classification using NLP techniques to optimize Customer Experience</h2>
            </div>
            <motion.div class="blog-image"
            variant={scaleVariant}
            whileInView={scaleVariant.whileInView}
             >
                <figure>
                    <img  className="case_img" src={case3} />
                </figure>
            </motion.div>
            <div class="content cnt">
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Domain</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            B2B SaaS
                        </p>
                    </div>
                </div>
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Customer-type:</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            B2B SaaS marketplace
                        </p>
                    </div>
                </div>
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Overview</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            The perception a customer holds towards a brand can reveal a lot of hidden insights about its functioning. Understanding customer perception and working on improving it mission-critical for companies to retain existing customers and acquire new customers.
                        </p>
                        <p>
                            Sentiment analysis is a popular way for organizations to determine and categorize opinions about a product, service, or idea. It can help determine the opinions of customers by analysing their public opinions about topics and gain valuable insights which in turn can help provide better customer experiences.
                        </p>
                        <p>
                            However, platforms like social media and public forums where one could find such conversations are often opinionated, and the process of filtering the signal from the noice can prove to be really difficult.
                        </p>
                    </div>
                </div>
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>The Problem</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            The client, who runs an online marketplace that provides freelancers a platform to sell their services, wanted to understand and improve their brand perception. They had a team which would examine popular social media platforms and public forums trying to analyse and understand what the customers are talking about and asking for. This was a really inefficient way of solving the problem and it was taking them nowhere. Upon realising this, the client approached Libra analytics looking for ways to optimize the entire process.
                        </p>
                    </div>
                </div>
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>The Solution</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            Our team first analyzed the problem at hand thoroughly and built an initial rule-based system which would analyze and flag conversations as either positive or negative sentiments. We then used this flagged data to train a complex, BERT transfomer-based architecture model that helped identify not just the sentiment, but also the subject of the conversations. 

                        </p>
                    </div>
                </div>
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>The Impact</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            The sentiment classifier tool helped the client understand customer perception faster, and in a better manner. With the insights obtained from the classifier, the client built two additional features to their software which in turn produced a 28% MoM increase in the number of free-to-paid conversions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Call 
        title="Optimizing the quality of online courses through effective evaluation techniques"
        img={case4}
        li="optimizing-the-quality-of-online-courses-through-effective-evaluation-techniques"
    />
    </div>
  )
}

export default Case3