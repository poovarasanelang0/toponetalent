import React ,{ useRef } from 'react'
import emailjs from '@emailjs/browser';

import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import { AiFillChrome } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import { BsTelephoneForward } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import Contact_Img from "../Contact/Assets/contact.jpg";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
    // 
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gcxqcub', 'template_gaczc7r', form.current, 'BrVJuhmqBMVrTO8W2')
          .then((result) => {
              console.log(result.text);

              e.target.reset();

              alert('Email Send...')
             }, (error) => {
                console.log(error.text);
                alert("can't send...")
             });
      };


  return (
    <>
      <Header />
      <div className="map-section ">
        <div className="mt-5 pt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.7573845172587!2d77.7346172!3d12.9873636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11c8dc6372f9%3A0x96ecc3efec310aa!2sSCB%20Brigade%20Tech%20Park!5e0!3m2!1sen!2sin!4v1711523622554!5m2!1sen!2sin"
            style={{ border: 0, width: "100%", height: 500 }}
            allowfullscreen
            frameBorder={0}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="change_whole_ppp">
          <section className="sec_tr_d">
            <div className="section-header">
              <div className="container con_cc_pr contact_h2_tag">
                <h2 className="">Contact Us</h2>
               
              </div>
            </div>
            <div className="container con_cc_pr">
              <div className="row change_row_prop ">
                <div className="contact-info ">
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <i class="bi bi-house-fill"></i>
                    </div>
                    <div className="contact-info-content">
                      <h4>Address</h4>
                      <p>
                      Block A, BRIGADE TECH PARK, Pattandur Agrahara, Whitefield, Bengaluru, Karnataka 560066
                      </p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-icon change_color_iiii">
                      <i class="bi bi-telephone-fill "></i>
                    </div>
                    <div className="contact-info-content">
                      <h4>Phone</h4>
                      <p>571-457-2321</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <i class="bi bi-envelope-check-fill"></i>
                    </div>
                    <div className="contact-info-content">
                      <h4>Email</h4>
                      <p>connect@toponetalents.com</p>
                    </div>
                  </div>
                </div>
                <div className="contact-form changeprop_tt">
                <form className='contactForm' ref={form}  onSubmit={sendEmail}>
                    <h2>Send Message</h2>
                    <div className="input-box">
                    <input type="text" className='name' placeholder='Your Name' name='your_name'/>
                    </div>
                    <div className="input-box">
                    <input type="email" className='email' placeholder='Your Email' name='your_email'/>
                    </div>
                    <div className="input-box">
                    <textarea className='msg' name="message" row="5" placeholder='Message'></textarea>

                    </div>
                    <div className="input-box">
                    <button type="submit" value="Send" className='submitBtn border-0 bg-primary text-white px-4 py-2'>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
