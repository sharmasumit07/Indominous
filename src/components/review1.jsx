import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './review1.css';

const ReviewSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const reviews = [
        {
            name: "Siddharth Singhal",
            review: "Love your health app! It keeps me on track with meds and health tips. So handy!",
            rating: 5
        },
        {
            name: "Mohit Kumar",
            review: "Teaching made easy! Your education app engages students and simplifies my job.",
            rating: 5
        },
        {
            name: "Rakshit Sharma",
            review: "Make code easyy!.hdffshifjoij ewiofjklwo kejwhfejkwjkili",
            rating: 5
        },
        {
            name: "sumith Sharma",
            review: " It helps me manage appointments and patient info hassle-free.",
            rating: 5
        },
        {
            name: "vikrant Sharma",
            review: "Your doctor web app rocks! It helps me manage appointments and patient info hassle-free.",
            rating: 4
        },


        // Add more reviews as needed
    ];

    return (
        
        <div className="review-slider">
            <Slider {...settings}>
                {reviews.map((review, index) => (
                    <div key={index} className="review-card">
                        <div className="rating">
                            {Array(review.rating).fill().map((_, i) => (
                                <span key={i}>&#9733;</span>
                            ))}
                        </div>
                        <h3>{review.name}</h3>
                        <p>{review.review}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: "10px" }}
            onClick={onClick}
        />
    );
}

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
            onClick={onClick}
        />
    );
}

export default ReviewSlider;
