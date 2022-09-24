import { clients } from "../constants";
import styles from "../style";
import { useState } from "react";
import {FaSearchPlus} from 'react-icons/fa'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import {case1, case2,case3,case4,case5,case6} from '../assets'


const Clients = () => {
  const [postHovered, setPostHovered] = useState(false);
  const [postHovered2, setPostHovered2] = useState(false);
  const [postHovered3, setPostHovered3] = useState(false);
  const [postHovered4, setPostHovered4] = useState(false);
  const [postHovered5, setPostHovered5] = useState(false);
  const [postHovered6, setPostHovered6] = useState(false);

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  };



 return(
    <>
         <section className="project-section mt-5" id="case-studies" >
        <div className="auto-container">
            <motion.div className="sec-title text-center mb-5"
            whileInView={{y:[100,0], opacity:[0,1]}}
            transition={{duration:0.8}}
            >
                <p className="text-blue-500 font-semibold">Case Studies</p>
                <h2 className={`${styles.heading2} pinhead text-slate-700 test_head_head`}>Our Showcase</h2>
            </motion.div>
            <div className="row clearfix">
                <motion.div className="col-lg-4 col-md-6 col-sm-12 project-block"
                whileInView={{x:[-100,0], opacity:[0,1]}}
                transition={{duration:1.2}}
                >
                    <div className="project-block-one wow fadeInUp" data-wow-delay="00ms" data-wow-duration="700ms">
                        <div className="inner-box if">
                            <div className="image-holder"
                            onMouseEnter={() => setPostHovered(true)}
                            onMouseLeave={() => setPostHovered(false)}
                            >
                            {postHovered ?(
                                <motion.div
                                >
                                <figure className="image-box2 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  vv hovered_box">
                                    <FaSearchPlus className="search_ico" />
                                </figure>
                                </motion.div>
                            ):(
                                <motion.div
                                >
                                <figure className="image-box hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  vv noHovered">
                                    <img src={case1} alt="accelerating-new-product-development-research-using-nlpu" />
                                </figure>
                                </motion.div>
                            )}
                                
                                <a href="ages/case-study1.html" className="lightbox-image view-btn"
                                    data-fancybox="gallery"><i className="fas fa-search-plus"></i></a>
                            </div>
                            <div className="lower-content">
                                <h3 className="arti_text"><Link onClick={goToTop} to={`/accelerating-new-product-development-research-using-nlpu`}>Accelerating New Product Development Research using NLPU</Link></h3>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="col-lg-4 col-md-6 col-sm-12 project-block"
                whileInView={{y:[100,0], opacity:[0,1]}}
                transition={{duration:0.8}}
                >
                    <div className="project-block-one wow fadeInUp" data-wow-delay="00ms" data-wow-duration="700ms">
                        <div className="inner-box if">
                            <div className="image-holder"
                             onMouseEnter={() => setPostHovered2(true)}
                            onMouseLeave={() => setPostHovered2(false)}
                            >
                                {postHovered2 ?(
                                    <figure className="image-box2 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  hovered_box">
                                     <FaSearchPlus className="search_ico" />
                                    </figure>
                                ):(
                                    <figure className="image-box hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  noHovered">
                                    <img src={case2} 
                                    
                                    alt="hyperpersonalized-product-promotion-for-e-commerce-using-advanced-machine-learning" />
                                </figure>
                                )}
                                <a href="Pages/case-study2.html" className="lightbox-image view-btn"
                                    data-fancybox="gallery"><i className="fas fa-search-plus"></i></a>
                            </div>
                            <div className="lower-content">
                                <h3 className="arti_text"><Link onClick={goToTop} to={`/hyperpersonalized-product-promotion-for-e-commerce-using-advanced-machine-learning`}>Hyperpersonalized Product Promotion for eCommerce using Advanced Machine Learning</Link></h3>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="col-lg-4 col-md-6 col-sm-12 project-block"
                whileInView={{x:[100,0], opacity:[0,1]}}
                transition={{duration:1.2}}
                >
                    <div className="project-block-one wow fadeInUp" data-wow-delay="00ms" data-wow-duration="700ms">
                        <div className="inner-box if">
                            <div className="image-holder"
                            onMouseEnter={() => setPostHovered3(true)}
                            onMouseLeave={() => setPostHovered3(false)}
                            >
                            {postHovered3 ?(
                                <figure className="image-box2 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  hovered_box">
                                     <FaSearchPlus className="search_ico" />
                                    </figure>
                            ):(
                                <figure className="image-box hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  noHovered">
                                    <img src={case3} alt="sentiment-classification-using-nlp-techniques-to-optimize-customer-experience" />
                                </figure>
                            )}
                                
                                <a href="Pages/case-study3.html" className="lightbox-image view-btn"
                                    data-fancybox="gallery"><i className="fas fa-search-plus"></i></a>
                            </div>
                            <div className="lower-content">
                                <h3 className="arti_text">
                                <Link onClick={goToTop} to={`/sentiment-classification-using-nlp-techniques-to-optimize-customer-experience`}>Sentiment Classification using NLP techniques to optimize Customer Experience</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="col-lg-4 col-md-6 col-sm-12 project-block"
                whileInView={{x:[-100,0], opacity:[0,1]}}
                transition={{duration:1.2}}
                >
                    <div className="project-block-one wow fadeInUp" data-wow-delay="500ms" data-wow-duration="700ms">
                        <div className="inner-box if">
                            <div className="image-holder"
                            onMouseEnter={() => setPostHovered4(true)}
                            onMouseLeave={() => setPostHovered4(false)}
                            >
                            {postHovered4 ?(
                                <figure className="image-box2 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  hovered_box">
                                     <FaSearchPlus className="search_ico" />
                                    </figure>
                            ):(
                                <figure className="image-box hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  noHovered">
                                    <img src={case4} alt="optimizing-the-quality-of-online-courses-through-effective-evaluation-techniques" />
                                </figure>
                            )}
                               
                                <a href="Pages/case-study4.html" className="lightbox-image view-btn"
                                    data-fancybox="gallery"><i className="fas fa-search-plus"></i></a>
                            </div>
                            <div className="lower-content">
                                <h3 className="arti_text">
                                <Link onClick={goToTop} to={`/optimizing-the-quality-of-online-courses-through-effective-evaluation-techniques`}>Optimizing the quality of online courses through effective evaluation techniques</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="col-lg-4 col-md-6 col-sm-12 project-block"
                whileInView={{y:[100,0], opacity:[0,1]}}
                transition={{duration:1.2}}
                >
                    <div className="project-block-one wow fadeInUp" data-wow-delay="500ms" data-wow-duration="700ms">
                        <div className="inner-box if">
                            <div className="image-holder"
                            onMouseEnter={() => setPostHovered5(true)}
                            onMouseLeave={() => setPostHovered5(false)}
                            >
                            {postHovered5 ?(
                                <figure className="image-box2 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  hovered_box">
                                     <FaSearchPlus className="search_ico" />
                                    </figure>
                            ):(
                                <figure className="image-box hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  noHovered">
                                    <img src={case5} alt="building-and-deployment-of-a-smart-news-recommendation-system" />
                                </figure>
                            )}
                               
                                <a href="Pages/case-study5.html" className="lightbox-image view-btn"
                                    data-fancybox="gallery"><i className="fas fa-search-plus"></i></a>
                            </div>
                            <div className="lower-content">
                                <h3 className="arti_text">
                                <Link onClick={goToTop} to={`/building-and-deployment-of-a-smart-news-recommendation-system`}>Building and deployment of a smart News Recommendation System</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="col-lg-4 col-md-6 col-sm-12 project-block"
                whileInView={{x:[100,0], opacity:[0,1]}}
                transition={{duration:1.2}}
                >
                    <div className="project-block-one wow fadeInUp" data-wow-delay="500ms" data-wow-duration="700ms">
                        <div className="inner-box if">
                            <div className="image-holder"
                            onMouseEnter={() => setPostHovered6(true)}
                            onMouseLeave={() => setPostHovered6(false)}
                            >
                            {postHovered6 ?(
                                <figure className="image-box2 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  hovered_box">
                                     <FaSearchPlus className="search_ico" />
                                    </figure>
                            ):(
                                <figure className="image-box hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  noHovered">
                                    <img src={case6} alt="identifying-owner-information-of-speeding-vehicles-using-computer-vision" />
                                </figure>
                            )}
                                
                                <a href="Pages/case-study6.html" className="lightbox-image view-btn"
                                    data-fancybox="gallery"><i className="fas fa-search-plus"></i></a>
                            </div>
                            <div className="lower-content">
                                <h3 className="arti_text">
                                <Link onClick={goToTop} to={`/identifying-owner-information-of-speeding-vehicles-using-computer-vision`}>Identifying owner information of speeding vehicles using computer vision</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
    </>
 )
 };

export default Clients;
