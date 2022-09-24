import React from 'react'
import './case.css'
import { motion } from 'framer-motion';
import {case4,case5} from '../assets'
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
const Case4 = () => {
  return (
    <div className="container cont_case" id="case_top4">
    
    <section class="blog-content">
        <div class="auto-container">
            <div class="sec-title stt">
                <h2>Optimizing the quality of online courses through effective evaluation techniques</h2>
            </div>
            <motion.div class="blog-image" 
            variant={scaleVariant}
            whileInView={scaleVariant.whileInView}
            >
                <figure>
                    <img className="case_img" src={case4} />
                </figure>
            </motion.div>
            <div class="content cnt">
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Domain</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            Edtech
                        </p>
                    </div>
                </div>
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Customer-type:</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            Online learning marketplace
                        </p>
                    </div>
                </div>
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Situation</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            The rise of online learning and certification platforms have transformed the lives of many. The ability to learn new skills anywhere and anytime has offered far greater opportunities for education than ever before. On the other end of the spectrum, it has also given tutors a way to monetize their expertise by creating content that can be purchased and consumed by learners from around the world.
                        </p>
                        <p>
                            There are numerous online learning marketplaces where tutors can post their knowledge and learners can find courses to learn the skill of their interest. As more and more tutors sign up and upload their courses, maintaining the quality of the content offered becomes a challenge. The learners usually depend on user reviews to find and pick courses.
                        </p>
                    </div>
                </div>
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Complication</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            The client, an online learning marketplace, has over 1,000 registered tutors and offers over 4,000 online courses. Yet, the client suffered a huge attrition rate of over 80%. More than 70% of its users who signed up and purchased a course did not complete it and over 95% users never purchased another course on their platform. The average completion rate for courses on their platform stood at just 23%.
                        </p>
                        <p>
                            The client built an NLP model which helped them to analyse user reviews and remove tutors whose offerings were subpar. Besides this, the client also wanted to help tutors improve the quality of courses by assessing where and why users struggle in their learning paths and drop off. Thus, they approached the Libra analytics team.
                        </p>
                    </div>
                </div>
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Solution</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            Our first task was to analyze the modules of a course and evaluate if they aided in fulfilling the specified learning outcome. With the help of tutors who peer reviewed the content offerings and the mentioned outcomes, we were able to generate a high-quality training dataset. This training dataset was then fed to a Classifier based on Logistic regression that would analyse and flag future courses based on whether or not they fulfil the learning requirements. 
                        </p>
                        <p>
                            Then, we built a clustering model that would analyze user generated activity from logs and flag places where user drop-off rates are abnormally high. From the findings of this model, a feedback engine reaches out to users asking if they found a particular piece of content to be incoherent.
                        </p>
                        <p>
                            Based on the feedback received from the users, the tutors are informed about the existing drop-off points within their course and are asked to improve the quality of the content and its structure.
                        </p>
                    </div>
                </div>
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Impact</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            Within the first six months of deploying this solution, the course completion rates shot up to 46%. The client also witnessed an 80% increase in the number of users who continued their learning journey on the platform by purchasing a second course.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Call 
        title="Building and deployment of a smart News Recommendation System"
        img={case5}
        li="building-and-deployment-of-a-smart-news-recommendation-system"
    />
    </div>
  )
}

export default Case4