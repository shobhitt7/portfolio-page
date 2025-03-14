import { useRef } from "react"
import emailjs from "@emailjs/browser";


export default function Contact(){

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        "service_0zxk00n",
        "template_qdujzph",
        form.current,
        "AP6sKxk4usqqDrZw1"
      )
      .then((result) => {
        alert("Message Sent Successfully!");
        console.log(result.text);
      })
      .catch((error) => {
        alert("Failed to Send Message");
        console.log(error.text);
      });
  
      e.target.reset();
    };

    return (
        <div className="contact-container">
        <h2>Contact me </h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" placeholder="Your Name" name="name" required className="contact-input" />
          <input type="email" placeholder="Your Email" name="email" required className="contact-input" />
          <textarea placeholder="Your Message" rows="5" required className="contact-textarea" name="message"></textarea>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
        <div className="contact-social-links">
          <h3>Connect with me:</h3>
          <a href="https://www.linkedin.com/in/shobhit-sharma-59b230303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="contact-link">LinkedIn</a>
          <a href="www.google.com" className="contact-link">Twitter</a>
          <a href="https://github.com/shobhitt7" className="contact-link">GitHub</a>
        </div>
      </div>
    )
}