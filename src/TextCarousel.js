import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS

function TextCarousel() {
    return (
        <>
            <style>
                {`
          .custom-carousel {
            height: 300px; /* Adjust the height as needed */
          }

          .carousel-text {
            text-align: center;
            padding: 20px; /* Adjust the padding as needed */
          }
        `}
            </style>
            <Carousel fade controls={false} pause={false} interval={3000} className="custom-carousel">
                <Carousel.Item>
                    <p className="carousel-text">Signup now to own your membership.</p>
                </Carousel.Item>
                <Carousel.Item>
                    <p className="carousel-text">Hound Vault is an online companion to store your files.</p>
                </Carousel.Item>
                <Carousel.Item>
                    <p className="carousel-text">Secure your important Docs/Files.</p>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default TextCarousel;
