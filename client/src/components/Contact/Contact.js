import React, { useState, useEffect } from 'react';
import './style.css';
import ContactForm from '../ContactForm/ContactForm';
import Map from '../Map/Map'

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
const loadGoogleMapScript = (callback) => {
  if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", callback);
  }
} 
function Contact () {
    const [loadMap, setLoadMap] = useState(false);
 
  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true)
    });
  }, []);
    return (
        <section className="about-page mt-5 pt-5 mb-3" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                    <div className="jumbotron jumbotron-fluid mb-5 bg-light rounded p-3 m-3">
                        <div className="container">
                            <h1 className="display-4 text-dark">Get In Touch</h1>
                            <p className="lead text-dark"><strong>Location:</strong> Inside Flatiron Crossing Mall</p>
                            <p className="lead text-dark">1 West Flatiron Crossing Dr. #1122, Broomfield, CO 80021<br></br><span>(Next to California Pizza Kitchen)</span></p>
                            <p className="lead text-dark"><strong>Phone:</strong> 333-333-3333</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mb-3">
                    {!loadMap ? <div>Loading...</div> : <Map />}
                    </div>
                        <div className="row">
                            <div className="col-sm-6 ml-auto contact-btn">
                                    <a className="text-decoration-none text-light" href="https://www.instagram.com/golfandbounce/" target="blank"><i className="fab fa-instagram fa-4x"></i>
                                <p className="text-center">Instagram</p>
                                </a>
                            </div>
                            <div className="col-sm-6 ml-auto contact-btn">
                                <a className="text-decoration-none text-light" href="mailto:golfandbounce@gmail.com" target="blank"><i className="fas fa-envelope-open-text fa-4x"></i>
                                <p className="text-center">Email</p>
                                </a>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;