import React from 'react';
import Main from '../../components/Main/Main';
export default function Home() {
    return (
        <div>
            <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 text-center">
                        <h2 className="text-center mt-0 about text-danger">Golf And Bounce</h2>
                        <hr className="divider my-4" color="#408eff" />
                        <a href="/" className="btn btn-primary">Book a Birthday Party!</a>
                        <hr className="divider my-4" color="#408eff" />
                    </div>
                </div>
            </div>
            </section>
            <Main className="align-content-sm-center" />
        </div>
    )
}
