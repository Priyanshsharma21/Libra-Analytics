import React from 'react'
import './case.css'
import { motion } from 'framer-motion';
import {case5,case6} from '../assets'
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
const Case5 = () => {
  return (
    <div className="container cont_case" id="case_top5">
    <section class="blog-content">
        <div class="auto-container">
            <div class="sec-title stt">
                <h2>Building and deployment of a smart News Recommendation System</h2>
            </div>
            <motion.div class="blog-image" 
            variant={scaleVariant}
            whileInView={scaleVariant.whileInView}
            >
                <figure>
                    <img className="case_img" src={case5} />
                </figure>
            </motion.div>
            <div class="content cnt">
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Domain</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            Recommender Systems
                        </p>
                    </div>
                </div>
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Business</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            Online media
                        </p>
                    </div>
                </div>
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Situation</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            The advent and rise of social media giants has inadvertently made news publishers fight with each other to lure and keep users engaged on their platform. Though users occasionally open and read the news published by a particular media outlet, there is no guarantee that the same user would regularly keep coming to the site.
                        </p>
                    </div>
                </div>
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Complication</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            The client, a leading TV and online news publishing company was witnessing a continuous drop in the engagement levels of users. The Weekly-active-users metric was for their website was on a continuous decline for over 26 weeks. They had no news recommendation system in place and was instead relying on a solution that would provide links to the most recently published articles. As the pages per session metric experienced a huge hit, the client approached Libra analytics to build and deploy a smart news recommendation system.
                        </p>
                    </div>
                </div>
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Solution</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            For users who are visiting the site for the first time, we decided to go for a model that would do content based recommendation. As a first-time user reads an article, the other articles recommended to him/her are computed based of content similarity, freshness and correlation of persons or events specified in the article. Apart from the content based recommendations, the user would also be given links to read the popular articles from across different domains.  
                        </p>
                        <p>
                            As the user opens and reads these articles, the system starts accumulating user data. Another recommender model that makes use of collaborative filtering now looks for similarities in interests and behavior between the user in consideration and the rest of the users. It then combines this information with the results from the content based recommender to make the best possible recommendation.
                        </p>
                    </div>
                </div>
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Impact</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            Within two weeks of implementing the recommendation system, the client witnessed a 34% increase in the session duration and a 26% rise in the pages per session.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Call 
        title="Identifying owner information of speeding vehicles using computer vision"
        img={case6}
        li="identifying-owner-information-of-speeding-vehicles-using-computer-vision"
    />
    </div>
  )
}

export default Case5