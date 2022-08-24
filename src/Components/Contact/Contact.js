import React, { useState } from 'react'
import './contact.css'

const Contact = () => {
    function NewTab() {
        window.open(
            "https://wa.me/5491165147225", "_blank");
    }

    const [form,setForm] = useState({
        name:"",
        email: "",
        phone: "",
        message: "",
    })
    const [click,setClick] = useState(false)

    const handleSend = () => {
           if(form.name !== "" && form.email !== "" && form.message !== ""  ) {
            setForm({name:"", email: "", phone:"",message:""})
            setClick(!click)
            document.location.reload()
        }
    }    

    const handleChange = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
    }
  return (
    <section>
        <div id='contact' className='container'>
        <div className='slider-title'>
            <h6 className='subtitle'>Get in touch</h6>
            <h2>Contact Me</h2>
        </div>
            <div className='display-contact'>
                <div className="contact">

                    <div className="input-container">
                        <div className="col-xs-12">
                            <div className="styled-input wide">
                                <input type="text" name="name" value={form.name} onChange={handleChange} required />
                                <label>Name</label> 
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="styled-input">
                                <input type="text" name="email" value={form.email} onChange={handleChange} required />
                                <label>Email</label> 
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="styled-input" >
                                <input type="text" name="phone" value={form.phone} onChange={handleChange} required />
                                <label>Phone Number</label> 
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="styled-input wide">
                                <textarea  name="message" value={form.message} onChange={handleChange} required></textarea>
                                <label>Message</label>
                            </div>
                        </div>
                        <div className="col-xs-12" onClick= {handleSend}>
                            <div className={!click ? "btn-lrg submit-btn" :"btn-lrg submit-btn2"}>
                               {!click ? "Send Message" : "Sent!"}
                            </div>
                        </div>
                    </div>

                </div>
                <div className='link-container'>
                    <div>
                        <div className='wpp'>
                            <span>WhatsApp</span>
                            <div>+1165147225</div>
                            <div className='wpp-cursor' onClick={() => NewTab()}>
                                <span>Send me a message</span>        
                            </div>
                        </div>
                        <div className='mail'>
                            <span>Email</span>
                            <div>sebafraga0@gmail.com.</div>
                            <div className='wpp-cursor' >
                                <a href="mailto:sebafraga0@gmail.com">Send me an email</a>          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    )
}

export default Contact