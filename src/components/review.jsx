import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Make sure this is the correct path for Swiper styles
import { Navigation, Pagination } from 'swiper/modules';

const ReviewsSection = () => {
  return (
    <section>
      <div className="review-main-container">
        <div className="review-first">
          <div className="review-main-text">
            <h3>REVIEWS</h3>
            <h5>Our Precious <br /> Customers' Reviews</h5>
            <p>
              Our customers speaking about the value they uncovered with <br />
              Indominus Labs...
            </p>
          </div>
          <div className="review-btn">
            <button className="schedule-btn review-btn-one">Read More Reviews</button>
            <a href="../components/demo.html">
              <button className="learn-more-btn review-btn-two">Request Demo</button>
            </a>
          </div>
        </div>
        <div className="review-second">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="slide-container"
          >
            <SwiperSlide className="swiper-slide">
              <div className="review-card">
                <div className="image-content">
                  <span className="overlay"></span>
                  <div className="review-stars">
                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">Siddharth Singhal</h2>
                  <p className="description">
                    Love your health app! It keeps me on track with meds and health tips. So handy!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="review-card">
                <div className="image-content">
                  <span className="overlay"></span>
                  <div className="review-stars">
                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">Mohit Kumar</h2>
                  <p className="description">
                    Teaching made easy! Your education app engages students and simplifies my job.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="review-card">
                <div className="image-content">
                  <span className="overlay"></span>
                  <div className="review-stars">
                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">Rakshit Sharma</h2>
                  <p className="description">
                    Your doctor web app rocks! It helps me manage appointments and patient info hassle-free.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="review-card">
                <div className="image-content">
                  <span className="overlay"></span>
                  <div className="review-stars">
                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">Radhika Singh</h2>
                  <p className="description">
                    Your health app is a lifesaver! It reminds me of important health tasks and provides valuable insights for a healthier lifestyle.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="review-card">
                <div className="image-content">
                  <span className="overlay"></span>
                  <div className="review-stars">
                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">Ishan Thakur</h2>
                  <p className="description">
                    The education app is a game-changer! It's user-friendly and enhances learning for students of all ages.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
