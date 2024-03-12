import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Sukien = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // Thêm biến isMobile

  const sukien = [
    { releaseDate: 'HAPPY DAY THỨ 2 GIÁ RẺ – CHỈ TỪ 60K/ VÉ', image: '/images/Rectangle-20.png' },
    { releaseDate: 'Quét mã QR – Thẳng tiến vào Rạp', image: '/images/Rectangle-21.png' },
    { releaseDate: 'Dịch vụ sự kiện – is ready for service', image: '/images/Rectangle-22.png' },
    { releaseDate: 'Happy day thứ 2 giá rẻ – Chỉ từ 60k/ vé', image: '/images/Rectangle-23.png' },
    { releaseDate: 'Happy day thứ 2 giá rẻ – Chỉ từ 60k/ vé', image: '/images/Rectangle-23.png' },
  ];
  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sukien.length) % sukien.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sukien.length);
  };

  const displayedsukien = isMobile ? sukien.slice(currentIndex, currentIndex + 1) : sukien.slice(currentIndex, currentIndex + 4);

  return (
    <div className="h-screen flex flex-col bg-gray-400">
      <div className="container mx-auto flex-grow">
        <h2 className="text-5xl font-bold mb-3 text-center text-white">Sự Kiện</h2>
        <Carousel>
          <div className="flex flex-col md:flex-row relative overflow-hidden">
            {displayedsukien.map((movie, index) => (
              <div className="bg-gray rounded shadow p-4 md:p-10 mx-2 mb-4 md:mb-0" key={index}>
                <img className="movie-image rounded-t" src={movie.image} alt="Movie Poster" />
                <div className="p-3">
                  <img></img>
                  <p className="text-white">{movie.releaseDate}</p>
                </div>
              </div>
            ))}
            {sukien.length > 1 && (
              <>
                <button
                  className="absolute top-1/2 transform -translate-y-1/2 left-0 text-white font-bold py-2 px-4 rounded transition duration-300 "
                  onClick={handlePrev}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  className="absolute top-1/2 transform -translate-y-1/2 right-0 text-white font-bold py-2 px-4 rounded transition duration-300 "
                  onClick={handleNext}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </>
            )}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Sukien;
