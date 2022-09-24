import { useEffect, useState } from "react";
import styles from "./style";
import {motion} from 'framer-motion'
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import { Billing, Business, CardDeal, Clients, CTA,CTA2, Footer, Navbar, Stats, Testimonials, Hero,Strength,Contact, ScrollTop } from "./components";
import {Case1, Case2, Case3, Case4, Case5, Case6} from '../src/cases'


const scaleVariant = {
  whileInView : {
    scale:[0,1],
    opacity:[0,1],
    transition : {
      duration:4,
      ease:'easeInOut',
    }
  }
}

const App = () => {
  const [show, handelShow] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [progress, setProgress] = useState(0)

  const transictionNavBar = ()=>{
    if(window.scrollY>100){
      handelShow(true);
    }else{
      handelShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });
}, []);

const goToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
};


  useEffect(()=>{
    window.addEventListener("scroll",transictionNavBar)
    return ()=> window.removeEventListener("scroll",transictionNavBar)
  },[])

  
  return(
    <>
      <div className=" w-full overflow-hidden">
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <div className={`nav_bg sticky top-0 ${show && 'nav__black'} ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar setProgress={setProgress}/>
      </div>
    </div>

    <div className={`hero_bg ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Routes>
            <Route exact path="/" element={
              <>
              <Hero />
              </>
            } />
        </Routes>
      </div>
    </div>
    <motion.div className="scroll_btn"
    variant={scaleVariant}
    whileInView={scaleVariant.whileInView}
    >
    {showTopBtn &&(
      <ScrollTop onClick={goToTop}/>
    )}
    </motion.div>
    
    <div className={`rest_bg ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        <Routes>
            <Route exact path="/" element={
              <>
              <Billing />
              <Business />
              <CardDeal />
              <Testimonials />
              <Clients />
              <Strength />
              <CTA />
              <Footer />   
              </>
            } />
            <Route exact path="/contact" element={
              <>
            <Contact />
            <Footer />
              </>
            } />

            <Route exact path="/accelerating-new-product-development-research-using-nlpu" element={
            <>
            <Case1 />
            <CTA />
            <Footer /> 
            </> 
            } />

            <Route exact path="/hyperpersonalized-product-promotion-for-e-commerce-using-advanced-machine-learning" element={
            <>
            <Case2 />
            <CTA />
            <Footer /> 
            </> 
            } />

            <Route exact path="/sentiment-classification-using-nlp-techniques-to-optimize-customer-experience" element={
            <>
            <Case3 />
            <CTA />
            <Footer /> 
            </> 
            } />

            <Route exact path="/optimizing-the-quality-of-online-courses-through-effective-evaluation-techniques" element={
            <>
            <Case4 />
            <CTA />
            <Footer /> 
            </> 
            } />

            <Route exact path="/building-and-deployment-of-a-smart-news-recommendation-system" element={
            <>
            <Case5 />
            <CTA />
            <Footer /> 
            </> 
            } />

            <Route exact path="/identifying-owner-information-of-speeding-vehicles-using-computer-vision" element={
            <>
            <Case6 />
            <CTA />
            <Footer /> 
            </> 
            } />

        </Routes>
        
      </div>
    </div>

    
  </div>
    </>
  )
};

export default App;
