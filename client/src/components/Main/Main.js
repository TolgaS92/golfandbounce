import React from 'react'
import './style.css';
import BlowupSlide from './images/blowupslide.JPG';
import HorseRide from './images/horseride.JPG';
import MiniGolf from './images/minigolf.JPG';
import BirthdayParty from './images/birthdayparty.JPG';

function Main() {
    return (
        <div>
            <div className="row justify-content-center">
            <div className="card col-sm-4">
                <img src={BlowupSlide} className="card-img-top" alt="golfandbounce" />
                <div className="card-body">
                    <h5 className="card-title">Have fun with Blowup Slides</h5>
                </div>
            </div>
            <div className="card col-sm-4">
                <img src={HorseRide} className="card-img-top" alt="golfandbounce" />
                <div className="card-body">
                    <h5 className="card-title">Ride the happiness</h5>
                </div>
            </div>
            </div>
            <div className="row justify-content-center">
            <div className="card col-sm-4">
                <img src={MiniGolf} className="card-img-top" alt="golfandbounce" />
                <div className="card-body">
                    <h5 className="card-title">Challenge to your folks!</h5>
                </div>
            </div><div className="card col-sm-4">
                <img src={BirthdayParty} className="card-img-top" alt="golfandbounce" />
                <div className="card-body">
                    <h5 className="card-title">Schedule a Birthday Party!</h5>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Main
