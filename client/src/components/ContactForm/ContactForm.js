import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { useHistory } from 'react-router-dom';

function ContactForm() {
    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userMessage, setUserMessage] = useState();
    const history = useHistory();
    
    const handleFormSubmit = event => {
        event.preventDefault();
        if (!userName || !userEmail || !userMessage) {
            alert("Please fill the empty areas")
        } else {
            sendMessage(event)
            alert("Your message has been sent, thank you! and You are redirecting to Home Page!")
            history.push('/golfandbounce')
        }
        setUserName()
        setUserEmail()
        setUserMessage()
    };

    const sendMessage = event => {
        event.preventDefault();
        emailjs.sendForm("service_d8qtvwr","template_kvtw7ew", event.target, "user_IEY2B4qCo5pxM3M3TXhCk",{
            from_name: "",
            to_name: "",
            message: "",
            from_email: "",
            })
            .then(() => {
                window.location.reload()
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="container">
            <div className="row">
                <h2 className="col-sm-12 mt-5 font-weight-bold text-light">Contact with Golf and Bounce
                <div className="spinner-grow text-light" role="status"></div></h2>
            </div>
            <section className="row">
                <form className="col-lg-12" onSubmit={handleFormSubmit}>
                    <div className="col-md-12">
                        <div className="row form-group">
                            <div className="col-sm-12">
                                <label htmlFor="name"></label>
                                <br />
                                <input type="text" className="form-control" id="name" name="from_name" placeholder="Name" onChange={e => setUserName(e.target.value)} />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-sm-12">
                                <label htmlFor="email"></label>
                                <br />
                                <input type="email" className="form-control" id="email" name="from_email" placeholder="Email" onChange={e => setUserEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-sm-12">
                                <label htmlFor="message"></label>
                                <textarea className="form-control" id="message" rows="3" placeholder="Message" type="text" name="message" onChange={e => setUserMessage(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-sm-12 mt-2">
                                <button type="submit" value="Send" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default ContactForm;