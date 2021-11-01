import React from 'react'
import PriceList from './image/Bounceandgolf.jpg';
import BirtdayPrice from './image/birthday.jpg'
export default function About() {
    return (
        <div className="mt-5 pt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 text-center">
                        <h2 className="text-center mt-0 about">Golf and Bounce Price List</h2>
                        <p>Located in Flatiron Malls</p>
                    </div>
                    <img src={PriceList} className="d-block w-100 rounded mb-3 shadow-lg p-3 mb-5 bg-white" alt="priceList" />
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-9 text-center">
                        <h2 className="text-center mt-0 about">Birthday Party Price List</h2>
                        <p>Located in Flatiron Malls</p>
                    </div>
                    <img src={BirtdayPrice} className="d-block w-100 mb-3 shadow-lg p-3 mb-5 bg-white rounded" alt="priceList" />
                </div>
            </div>
        </div>
    )
}
