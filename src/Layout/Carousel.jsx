import React from 'react';
import './css/carouse.css'
const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="image-with-button">
            <img src="/images/anhphim1.jpg" className="d-block w-100" alt="..." />
            <div className="button-overlay">
              <button className="btn btn-secondary">Trailer</button>
              <button className="btn btn-secondary">Mua vé ngay</button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="image-with-button">
            <img src="/images/anhphim2.jpg" className="d-block w-100" alt="..." />
            <div className="button-overlay">
              <button className="btn btn-secondary">Trailer</button>
              <button className="btn btn-secondary">Mua vé ngay</button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="image-with-button">
            <img src="/images/anhphim3.jpg" className="d-block w-100" alt="..." />
            <div className="button-overlay">
              <button className="btn btn-secondary">Trailer</button>
              <button className="btn btn-secondary">Mua vé ngay</button>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;