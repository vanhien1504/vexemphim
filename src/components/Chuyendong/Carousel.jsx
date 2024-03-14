import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import '../css/carouse.css';
const Carousel = () => {
  const [hovered, setHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const handlePlayVideo = () => {
    setShowVideo(true);
  };


  return (
    <div
      id="carouselExample"
      className="carousel slide"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="image-with-button">
            <img src="/images/anhphim1.jpg" className="d-block w-100" alt="..." />
            {hovered && (
              <div className="button-overlay">
                  {showVideo && (
                    <div className="video-modal">
                      <div className="video-container">
                        <iframe  src="https://www.youtube.com/embed/pTlqIQUkYQI?si=EcSuMIEfhG1MeBAA" ></iframe>
                        <button className="close-video" onClick={() => setShowVideo(false)}>Close</button>
                      </div>
                      
                    </div>
                  )}<button className="play-button" onClick={handlePlayVideo}>
                    <FontAwesomeIcon icon={faPlay} />
                  </button>


              </div>
            )}
          </div>
        </div>
        <div className="carousel-item">
          <div className="image-with-button">
            <img src="/images/anhphim2.jpg" className="d-block w-100" alt="..." />
            {hovered && (
              <div className="button-overlay">
                   {showVideo && (
                    <div className="video-modal">
                      <div className="video-container">
                      <iframe  src="https://www.youtube.com/embed/8jraVtX821Q" ></iframe>                   
                           <button className="close-video" onClick={() => setShowVideo(false)}>close</button>
                      </div>
                    </div>
                  )}<button className="play-button" onClick={handlePlayVideo}>
                    <FontAwesomeIcon icon={faPlay} />
                  </button>
              </div>
            )}
          </div>
        </div>
        <div className="carousel-item">
          <div className="image-with-button">
            <img src="/images/anhphim3.jpg" className="d-block w-100" alt="..." />
            {hovered && (
              <div className="button-overlay">
                   {showVideo && (
                    <div className="video-modal">
                      <div className="video-container">
                      <iframe src="https://www.youtube.com/embed/32RAq6JzY-w" ></iframe>  
                                            <button className="close-video" onClick={() => setShowVideo(false)}>Close</button>
                      </div>
                    </div>
                  )}<button className="play-button" onClick={handlePlayVideo}>
                    <FontAwesomeIcon icon={faPlay} />
                  </button>
              </div>
            )}
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