import React from 'react'
import './style.css';
import BlowupSlide from './images/blowupslide.JPG';
import HorseRide from './images/horseride.JPG';
import MiniGolf from './images/minigolf.JPG';
import BirthdayParty from './images/birthdayparty.JPG';

function Main() {
    return (
        <div className="container mt-5 mb-5">
            <div id="carouselExampleInterval" className="carousel slide mt-3" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="10000">
                        <img src={BlowupSlide} className="pic d-block w-75 border border-danger rounded" alt="blow" />
                    </div>
                <div className="carousel-item" data-interval="2000">
                    <img src={HorseRide} className="pic d-block w-50 rounded border border-warning" alt="horse" />
                </div>
                <div className="carousel-item">
                    <img src={BirthdayParty} className="pic d-block w-50 rounded border border-dark" alt="birthday" />
                </div>
                <div className="carousel-item">
                    <img src={MiniGolf} className="pic d-block w-50 rounded border border-primary" alt="golf" />
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
