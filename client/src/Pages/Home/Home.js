import React from 'react';
import Main from '../../components/Main/Main';
import './style.css';
export default function Home() {
    return (
        <div className="mt-5 pt-5">
            <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 text-center">
                        <h2 className="text-center mt-0 about text-danger">We Are Open!</h2>
                        <hr className="divider my-4" color="#408eff" />
                        <a href="/golfandbounce" className="grow btn btn-primary">Book a Birthday Party!</a>
                        <hr className="divider my-4" color="#408eff" />
                    </div>
                </div>
            </div>
            </section>
            <Main className="align-content-sm-center" />
        </div>
    )
}
