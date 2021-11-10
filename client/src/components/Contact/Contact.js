import React, { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Map from '../Map/Map';

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
        <section className="mt-5 pt-5 mb-3">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center animate__animated animate__backInLeft">
                      <div className="jumbotron jumbotron-fluid mb-5 bg-light rounded p-3 m-3">
                        <div className="container">
                            <h1 className="display-4 text-dark">Get In Touch</h1>
                            <p className="lead text-dark"><strong>Location:</strong> Inside Flatiron Crossing Mall</p>
                            <p className="lead text-dark text-decoration-none">1 West Flatiron Crossing Dr. #1122, Broomfield, CO 80021<br></br><span>(Next to California Pizza Kitchen)</span></p>
                            <button type="button" className="btn btn-outline-info rounded-pill">
                            <a className="lead text-dark text-decoration-none" target="_blank" href="http://maps.google.com/?q=1 West Flatiron Crossing Dr. #1122, Broomfield, CO 80021" rel="noreferrer">Get Directions</a></button>
                            <button type="button" className="btn btn-outline-info rounded-pill">
                            <a className="lead text-dark text-decoration-none" href="tel:+17208269487">Make a Phone Call</a></button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 animate__animated animate__backInRight">
                    {!loadMap ? <div>Loading...</div> : <Map />}
                    </div>
                  </div>
                <div className="row col-6 animate__animated animate__backInUp">
                  <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default Contact;