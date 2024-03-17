
import React, { useState, useEffect } from 'react';
import '../css/nowplaymovie.css'
import ChiTietModal from '../../store/ChiTietModal'
import { useNavigate } from 'react-router-dom';

const NowPlayingMovies = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

    // Hàm này được gọi khi người dùng nhấn "Mua vé ngay"
    const handleNavigateToBooking = (movieId) => {
        navigate(`/booking/${movieId}`); // Điều hướng đến trang BookingPage và truyền movieId qua URL
    };
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('http://localhost:4000/movie/phimdangchieu');
                const data = await response.json();
                setMovies(data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
        fetchMovies();
    }, []);


    const handleShowDetails = async (movieId) => {
        try {
            const response = await fetch(`http://localhost:4000/movie/phim/${movieId}`);
            const data = await response.json();
            setSelectedMovie(data);
            setModalShow(true);
        } catch (error) {
            console.error('Error fetching movie details:', error);
        }
    };
    const scroll = (direction) => {
        const container = document.querySelector('.movies-container');
        const scrollAmount = 300; // Thay đổi tùy vào nhu cầu
        if (direction === 'left') {
            container.scrollLeft -= scrollAmount;
        } else {
            container.scrollLeft += scrollAmount;
        }
    };
    
   

    return (
        <div className="now-playing-movies">
            <h2 className="text-5xl font-bold mb-3 text-center text-white">Phim Đang Chiếu</h2>
            <button className="prev-btn" onClick={() => scroll('left')}>&lt;</button>
            <div className="movies-container">
                {movies.map(movie => (
                    <div className="movie-item" key={movie.id_phim}>
                        <img src={movie.Poster} alt={movie.TenPhim} />
                        <div className="movie-details">
                            <h3>{movie.TenPhim}</h3>
                            <div className="movie-actions">
                            <button onClick={() => handleNavigateToBooking(movie.id_phim)}>Mua vé ngay</button>

                                <button onClick={() => handleShowDetails(movie.id_phim)}>Xem chi tiết</button>
                            </div>
                        </div>
                    </div>
                ))}
                <button className="next-btn" onClick={() => scroll('right')}>&gt;</button>
            </div>
            {selectedMovie && (
                <ChiTietModal show={modalShow} onClose={() => setModalShow(false)}>
                    <h2>{selectedMovie.TenPhim}</h2>
                    <p>{selectedMovie.MoTaPhim}</p>
                    <img src={selectedMovie.Poster} alt={`Poster của phim ${selectedMovie.TenPhim}`} className="movie-poster" />
                    <div>
                        <p>Thể loại: {selectedMovie.TheLoaiPhim}</p>
                        <p>Ngày phát hành: {new Date(selectedMovie.NgayKhoiChieu).toLocaleDateString()}</p>
                        <p>Thời lượng: {selectedMovie.ThoiLuongPhim}</p>
                        <p>Định dạng: {selectedMovie.DinhDangPhim}</p>
                        <p>Ngôn ngữ: {selectedMovie.NgonNgu}</p>
                        <p>Diễn viên: {selectedMovie.dienvien}</p>
                        <a
                            href={selectedMovie.TrailerPhim}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="trailer-btn"
                        >
                            Xem Trailer
                        </a>
                    </div>
                </ChiTietModal>
            )}
        </div>
    );
};

export default NowPlayingMovies;
