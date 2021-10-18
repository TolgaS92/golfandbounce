import React from 'react'
import PriceList from './image/pricelist.JPG';
export default function About() {
    return (
        <div className="mt-5 pt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 text-center">
                        <h2 className="text-center mt-0 about">About Golf and Bounce</h2>
                        <hr className="divider my-4" color="#408eff" />
                        <p>Located in Flatiron Malls</p>
                    </div>
                    <img src={PriceList} className="d-block w-100 rounded mb-3" alt="priceList" />
                </div>
            </div>
        </div>
    )
}
