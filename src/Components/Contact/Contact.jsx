import React from 'react'
import './Contact.css'


const Contact = () => {

   const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "9ef808b2-6d9d-4588-8af1-dcb4348eb457");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        alert(res.message);
      }
   };  


  return (
    <div id='contact'>
    <div className='contact'>
       <div className="conatact-title">
        <h1>Get in touch</h1>
       </div>
    </div>
     <div className="contact-section">
          <div className="contact-left">
              <img src="assets/contact-me.svg" alt="" />
          </div>
           <form onSubmit={onSubmit} className="contact-right">
              <label htmlFor="">Your Name</label><br/>
              <input type="text" placeholder='Enter your name' name='name' required/><br/>
              <label htmlFor="">Your Email</label><br/>
              <input type="email" placeholder='Enter your email' name='email' required/><br/>
              <label htmlFor="">Write your message here</label><br/>
              <textarea name="message" rows='8' placeholder='Enter your message' id="" required/><br/>
              <button type='submit' className='contact-submit'>Submit now</button><br/>
          </form>
       </div>
    </div>
  )
}

export default Contact