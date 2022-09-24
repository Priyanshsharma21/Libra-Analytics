import React from 'react'
import './case.css'
import { motion } from 'framer-motion';
import {case6,case1} from '../assets'
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
const Case6 = () => {
  return (
    <div className="container cont_case" id="case_top6">
     <section class="blog-content">
        <div class="auto-container">
            <div class="sec-title stt">
                <h2>Identifying owner information of speeding vehicles using computer vision</h2>
            </div>
            <motion.div class="blog-image"
            variant={scaleVariant}
            whileInView={scaleVariant.whileInView}
             >
                <figure>
                    <img className="case_img" src={case6} />
                </figure>
            </motion.div>
            <div class="content cnt">
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Domain</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            Computer Vision
                        </p>
                    </div>
                </div>
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Business</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            Enterprise 
                        </p>
                    </div>
                </div>
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Situation</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            Driving with excessive speed and Drunken driving are the predominant reasons why road accidents to happen. While the authorities resort to the implementation of traffic signals to regulate traffic within city limits, things get difficult for the police to identify and charge those drivers who disregard traffic laws in the highways.
                        </p>
                    </div>
                </div>
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Complication</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            The client, a digital infrastructure company working on building an expressway had deployed cameras that would actively monitor and sense the speed of vehicles as they passed by. The client wanted to use the installed cameras to identify drivers who drive at speeds over the permitted limit. The client had to submit this information to the government officials for them to go ahead with the legal proceedings.
                        </p>
                    </div>
                </div>
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Solution</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            The computer-vision based solution we built to identifying owner information has three parts:
                            <ol>
                                <li>number-plate image capturing </li>
                                <li>character recognition</li>
                                <li>Owner information extraction</li>
                            </ol> 
                        </p>

                        <p>
                            We made use of the high shutter-speed cameras the client had installed to capture the images of vehicles. This captured image is then processed with a noise-filtering algorithm that reduces the significant noise in the subject. After this process, the image is then fed into a CNN based number plate image capturing model that identifies the number plate from the overall image.
                        </p>
                        <p>
                            After the CNN successfully identifies the number plate, the image is cropped only to contain the number plate. This is then fed into another CNN model that has been trained to do digits classification which identifies and outputs the vehicle registration number. This registration number is then queried from within the official database to pull the information of the vehicle’s owner.
                        </p>
                    </div>
                </div>
                <div class="sub-section">
                    <div class="sub-title">
                        <h3>Impact</h3>
                    </div>
                    <div class="sub-content">
                        <p>
                            Through this solution, the client was able to bring down the requirement of the number of highway patrol teams from 10 for every 100 kilometres to 4 for every 100 kilometres.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Call 
        title="Accelerating New Product Development Research using NLPU"
        img={case1}
        li="accelerating-new-product-development-research-using-nlpu"
    />
    </div>
  )
}

export default Case6