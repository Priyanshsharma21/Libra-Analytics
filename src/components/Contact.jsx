import React from 'react'
import '../contact.css'
import {motion} from 'framer-motion'



const Contact = () => {
  return (
    <>
         <div className="contactus">
        <div className="box">
        <div className="content">
                <h3 className="contact_head">
                    Interested in solving your data problems with Libra Analytics experts?
                </h3>
                <p className="contact_head_sub">
                    Get in touch to discuss, identify and explore data strategies, and implement data engineering and data science solutions to boost your business.
                </p>
                
            </div>
          <div className="contact form cont_form">
            <h3 className="contact_head">Send us a Message</h3>
            <form  action="https://formspree.io/f/mjvzwrgp" method="POST" >
              <div className="formBx">
                <div className="row50">
                  <div className="inputBox">
                    <input type="text" name="Nme" placeholder="Your Name" required />
                  </div>
                  <div className="inputBox">
                    <input type="text" placeholder="Name of Your Organiztion" name="Organization Name" required />
                  </div>
                </div>
                <div className="row100">
                  <div className="inputBox">
                    <input type="text"  placeholder="Your Email" name="email" required />
                  </div>
                </div>
                <div className="row100">
                  <div className="inputBox">
                    <textarea placeholder="Your Enquiry"></textarea>
                  </div>
                </div>
                <div className="row100">
                  <motion.div className="inputBox submit"
                  whileHover={{ scale: 1.0 }}
                  whileTap={{ scale: 0.9 }}
                  >
                    <input type="submit" value="Send" />
                  </motion.div>
                </div>
              </div>
            </form>
          </div>
          </div>
    </div>
    </>
  )
}

export default Contact



