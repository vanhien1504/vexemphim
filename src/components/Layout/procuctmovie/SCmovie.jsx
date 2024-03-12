import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/nowplaymovie.css';
const SCmovie = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [movies, setMovies] = useState([
    // Dữ liệu phim giả định, thay đổi theo dữ liệu thực tế của bạn
    // Đảm bảo mỗi phim có một id duy nhất
  ]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleShowDetails = (movieId) => {
    setSelectedMovieId(movieId);
    setIsModalOpen(true);
  };

  const handlePrev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
  const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  const displayedMovies = isMobile ? movies.slice(currentIndex, currentIndex + 1) : movies.slice(currentIndex, currentIndex + 3); // 3 là số phim được hiển thị trên màn hình không phải mobile

  return (
    <div className="h-screen flex flex-col bg-gray-400">
      <div className="container mx-auto flex-grow">
        <h2 className="text-5xl font-bold mb-3 text-center text-white">Phim Sắp Chiếu</h2>
        <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop useKeyboardArrows>
          {displayedMovies.map((movie, index) => (
            <div className="bg-gray-300 rounded shadow p-4 m-4 flex flex-col items-center" key={index}>
              <img src={movie.image} alt="Movie Poster" className="movie-image rounded-t" />
              <div className="p-3 text-center">
                <h3 className="text-lg font-bold mb-2">{movie.name}</h3>
                <p className="text-gray-600">{movie.releaseDate}</p>
                <button className="bg-white text-black font-bold py-2 px-4 rounded mt-2" onClick={() => console.log('Trailer:', movie.name)}>Trailer</button>
                <button className="bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={() => handleShowDetails(movie.id)}>Details</button>
              </div>
            </div>
          ))}
        </Carousel>
        {movies.length > 1 && (
          <>
            <button onClick={handlePrev} className="absolute top-1/2 transform -translate-y-1/2 left-0 text-black-500 font-bold py-2 px-4 rounded transition duration-300 ">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button onClick={handleNext} className="absolute top-1/2 transform -translate-y-1/2 right-0 text-black-500 font-bold py-2 px-4 rounded transition duration-300 ">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SCmovie;
