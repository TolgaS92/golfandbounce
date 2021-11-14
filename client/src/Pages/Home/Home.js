import React from 'react';
import Main from '../../components/Main/Main';
import './style.css';
import Calendly from '../../components/Calendly';
/* import SlideShow from '../../components/SlideShow';
import Images from './images/entrance.jpg';
import Images2 from './images/IMG_3085.jpg';
import Images3 from './images/IMG_3087.jpg';
import Images4 from './images/IMG_3093.jpg';
import Images5 from './images/IMG_3095.jpg';
import Images6 from './images/IMG_3098.jpg'; */
export default function Home() {
    return (
      <div className="mt-5 pt-5">
      <section>
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-9 text-center">
                  <h2 className="text-center mt-0 about text-danger animate__animated animate__bounceInDown">We Are Open!</h2>
                  <div className="btn">
                    <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split animate__animated animate__rotateInDownLeft" data-toggle="dropdown" aria-expanded="false">
                      <span className="text">Book a Birthday Party!</span>
                    </button>
                    <div className="dropdown-menu mt-5 pt-5 bg-dark">
                      <button className="dropdown-item bg-dark mt-5 pt-5"><Calendly /></button>
                    </div>
                  </div>
                  <button className="btn btn-outline-warning animate__animated animate__rotateInDownRight">
                    <a href="https://app.cleverwaiver.com/render/templateByRefId/611703f585f3620f3de5c1c9" target="_blank" className="text-decoration-none" rel="noreferrer">Sign a Waiver</a>
                  </button>
              </div>
          </div>
      </div>
      </section>
      <Main className="align-content-sm-center" />
      {/* <SlideShow
      interval={3000}
      images={[
        `${Images}`,
        `${Images2}`,
        `${Images3}`,
        `${Images4}`,
        `${Images5}`,
        `${Images6}`
      ]}/> */}
      </div>
    )
}
