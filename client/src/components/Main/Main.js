import React from 'react'
import './style.css';
import BlowupSlide from './images/IMG_3093.jpg';
import HorseRide from './images/IMG_3093.jpg';
import MiniGolf from './images/IMG_3105.jpg';
import BirthdayParty from './images/IMG_3096.jpg';
import img1 from './images/IMG_3085.jpg';
import img2 from './images/IMG_3087.jpg';
import img3 from './images/IMG_3105.jpg';
import img4 from './images/IMG_3122.JPG';


function Main() {
    return (
        <div className="container-fluid">
            <div id="carouselExampleInterval" className="carousel slide mt-3" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="10000">
                        <img src={BlowupSlide} className="pic d-block w-100 border border-danger rounded" alt="blow" />
                    </div>
                <div className="carousel-item" data-interval="2000">
                    <img src={HorseRide} className="pic d-block w-100 rounded border border-warning" alt="horse" />
                </div>
                <div className="carousel-item">
                    <img src={BirthdayParty} className="pic d-block w-100 rounded border border-dark" alt="birthday" />
                </div>
                <div className="carousel-item">
                    <img src={MiniGolf} className="pic d-block w-100 rounded border border-primary" alt="golf" />
                </div>
                <div className="carousel-item">
                    <img src={img1} className="pic d-block w-100 rounded border border-dark" alt="birthday" />
                </div>
                <div className="carousel-item">
                    <img src={img2} className="pic d-block w-100 rounded border border-primary" alt="golf" />
                </div>
                <div className="carousel-item">
                    <img src={img3} className="pic d-block w-100 rounded border border-dark" alt="birthday" />
                </div>
                <div className="carousel-item">
                    <img src={img4} className="pic d-block w-100 rounded border border-primary" alt="golf" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
            </div>
        </div>
    )
}

export default Main
