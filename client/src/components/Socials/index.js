import React from 'react'

function Socials() {
    return (
        <div className="mb-0">
            <ul className="d-flex justify-content-center form-inline mt-3 mb-1 animate__animated animate__bounce social-icons">
                <a href="https://www.instagram.com/golfandbounce/" target="_blank" rel="noreferrer" className="mr-3">
                    <i className="fab fa-instagram grow fa-2x text-primary"></i>
                </a>
                <a href="https://www.facebook.com/GolfAndBounce" target="_blank" rel="noreferrer">
                    <li className="fab fa-facebook grow fa-2x text-primary"></li>
                </a>
                <a href="mailto:golfandbounce@gmail.com" target="_blank" rel="noreferrer">
                    <i className="fas fa-envelope-open-text grow fa-2x text-primary"></i>
                </a>
            </ul>
        </div>
    )
}

export default Socials;
