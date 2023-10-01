import React, { useContext, useRef } from 'react'
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context'

const Contact = () => {
    const formRef = useRef();
    // const[done, setDone] = useState(false);
    const themeContext = useContext(ThemeContext);
    const darkMode = themeContext.state.darkMode;

    const sendEmail = e=>{
        e.preventDefault();
        emailjs.sendForm('service_qfn4cbj', 'template_0zp1q0n', formRef.current, 'QCuhMYeqgiu2DFK_e')
            .then((result) => {
            console.log(result.text);
            // setDone(true);
            }, (error) => {
          console.log(error.text);
        });
    }
  return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
            <h1 className="c-title">Let's discuss your project</h1>
            <div className="c-info">
                <div className="c-info-item">
                    <img src={Phone} alt="" className="c-icon" />
                    +316 123 4567
                </div>
                <div className="c-info-item">
                    <img src={Email} alt="" className="c-icon" />
                    zeuz.deleuz@gmail.com
                </div>
                <div className="c-info-item">
                    <img src={Address} alt="" className="c-icon" />
                    Komkomerstraat 22fh
                </div>
            </div>
        </div>
        <div className="c-right">
            <p className="c-desc">
                <b>Lorem ipsum dolor sit amet?</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quas mollitia error, temporibus itaque saepe.
            </p>
            <form ref={formRef} onSubmit={sendEmail}>
                <input style={{backgroundColor: darkMode ? "#333" : "white"}} type="text" name="username" placeholder="Name" />
                <input style={{backgroundColor: darkMode ? "#333" : "white"}} type="text" name="subject" placeholder="Subject" />
                <input style={{backgroundColor: darkMode ? "#333" : "white"}} type="text" name="email" placeholder="Email" />
                <textarea style={{backgroundColor: darkMode ? "#333" : "white"}} name="message" placeholder="message" rows="5" />
                <button>Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
