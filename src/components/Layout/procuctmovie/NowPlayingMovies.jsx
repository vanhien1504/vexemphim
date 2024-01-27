import React, { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import { HiX } from 'react-icons/hi';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/nowplaymovie.css';

const NowPlayingMovies = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false); // Thêm biến isMobile

    const movies = [
        { name: 'Movie 2', releaseDate: 'Release Date 2', image: '/images/phim_chieu_rap_Viet_Nam_moi_nhat_co_gai_tu_qua_khu_.jpg' },
        { name: 'Movie 3', releaseDate: 'Release Date 3', image: '/images/phim-dracula-quy-du-thuc-tinh.jpg' },
        { name: 'Movie 4', releaseDate: 'Release Date 4', image: '/images/anhphim1.jpg' },
        { name: 'Movie 4', releaseDate: 'Release Date 4', image: '/images/anhphim1.jpg' },
        { name: 'Movie 4', releaseDate: 'Release Date 4', image: '/images/anhphim1.jpg' },
        { name: 'Movie 4', releaseDate: 'Release Date 4', image: '/images/anhphim1.jpg' },
        { name: 'Movie 4', releaseDate: 'Release Date 4', image: '/images/anhphim1.jpg' },
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

    const handleBookTicket = (movieName) => {
        console.log('Đặt vé xem phim cho phim:', movieName);
    };

    const handleShowOffcanvas = () => {
        setShowOffcanvas(true);
    };

    const handleCloseOffcanvas = () => {
        setShowOffcanvas(false);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    };

    const displayedMovies = isMobile ? movies.slice(currentIndex, currentIndex + 1) : movies.slice(currentIndex, currentIndex + 3);
    return (
        <div className="h-screen flex flex-col bg-gray-500">
            <div className="container mx-auto flex-grow">
                <h2 className="text-5xl font-bold mb-3 text-center">Phim đang chiếu</h2>
                <Carousel>
                    <div className="flex">
                        {displayedMovies.map((movie, index) => (
                            <div className="bg-gray rounded shadow p-20 mt-1" key={index}>
                                <img
                                    className="movie-image rounded-t"
                                    src={movie.image}
                                    alt="Movie Poster"
                                />
                                <div className="p-3">
                                    <h3 className="text-lg font-bold mb-2">{movie.name}</h3>
                                    <p className="text-gray-600">{movie.releaseDate}</p>
                                </div>
                                <button
                                    className="bg-gray-700 hover:bg-gray-700 text-white font-bold py-2 px-2 rounded mt-2"
                                    onClick={() => handleBookTicket(movie.name)}
                                    style={{ marginRight: '8px' }}
                                >
                                    Mua vé ngay
                                </button>
                                <button
                                    className="bg-white hover:bg-gray-700 text-black font-bold py-2 px-2 rounded mt-2"
                                    onClick={handleShowOffcanvas}
                                >
                                    Xem chi tiết
                                </button>
                            </div>
                        ))}
                    </div>
                </Carousel>

                {movies.length > 3 && (
                    <div className="flex justify-center mt-4">
                        <button
                            className=" bg-gray-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    </div>
                )}

               
            </div>
        </div>
    );
};

export default NowPlayingMovies;