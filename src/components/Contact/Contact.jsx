import React from 'react'
import "./Contact.css"
import msgIcon from "/msg-icon.png"
import mailIcon from "/mail-icon.png"
import phoneIcon from "/phone-icon.png"
import locationIcon from "/location-icon.png"
import Button from '../Button/Button'
import whiteArrow from "/white-arrow.png"
function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      formData.append("access_key", "4dada8b0-74af-4d7f-be2b-731eb1829698");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <>
      <div className="contact">
        <div className="contact-col">
          <h3>
            Send us message <img src={msgIcon} alt="message icon" />
          </h3>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. your feedback , questions and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <ul>
            <li>
              <img src={mailIcon} alt="mail icon" />
              contact@rizwan@gmail.com
            </li>
            <li>
              <img src={phoneIcon} alt="phone icon" />
              +911234567890
            </li>
            <li>
              <img src={locationIcon} alt="location icon" />
              Ilm College of Engineering <br /> Sayyed Nagar, Pune, India
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              required
            />
            <label>Write your message here</label>
            <textarea
              name="message"
              rows={6}
              placeholder="Enter your message here"
              required
            ></textarea>
            <Button content="Submit Now" whiteArrow={whiteArrow} />
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
}

export default Contact