import React from 'react'
import PriceList from './image/Bounceandgolf.jpg';
import BirtdayPrice from './image/birthday.jpg'
export default function About() {
    return (
        <div className="mt-5 pt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 text-center">
                        <a href={PriceList} target="blank">
                            <h2 className="text-center mt-3 about btn btn-outline-light">Golf and Bounce Price List</h2>
                        </a>
                        <p>Located in Flatiron Malls</p>
                    </div>
                    <img src={PriceList} className="d-block w-100 rounded mb-3 shadow-lg p-3 mb-5 bg-white img-thumbnail" alt="priceList" />
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-9 text-center">
                        <a href={BirtdayPrice} target="blank">
                            <h2 className="text-center mt-3 about btn btn-outline-light">Birthday Party Price List</h2>
                        </a>
                    </div>
                    <img src={BirtdayPrice} className="d-block w-100 mb-3 shadow-lg p-3 mb-5 bg-white rounded" alt="birthdayprice" />
                </div>
            </div>
        </div>
    )
}
