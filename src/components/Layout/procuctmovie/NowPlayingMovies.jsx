
import React, { useState, useEffect } from 'react';
import '../css/nowplaymovie.css'
import ChiTietModal
 from '../../../store/ChiTietModal';
const NowPlayingMovies = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('http://localhost:4000/movie/');
                const data = await response.json();
                setMovies(data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
        fetchMovies();
    }, []);

    const handleShowDetails = (movie) => {
        setSelectedMovie(movie);
        setModalShow(true);
    };

    return (
        <div className="now-playing-movies">
            <h2 className="section-title">Phim Đang Chiếu</h2>
            <div className="movies-container">
                {movies.map(movie => (
                    <div className="movie-item" key={movie.id_phim}>
                        <img src={movie.Poster} alt={movie.TenPhim} />
                        <div className="movie-details">
                            <h3>{movie.TenPhim}</h3>
                            <p>{movie.MoTaPhim}</p>
                            <div className="movie-actions">
                                <button onClick={() => alert('Mua vé ngay cho: ' + movie.TenPhim)}>Mua vé ngay</button>

                                <button onClick={() => handleShowDetails(movie)}>Xem chi tiết</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {selectedMovie && (
                <ChiTietModal show={modalShow} onClose={() => setModalShow(false)}>
                    <h2>{selectedMovie.TenPhim}</h2>
                    <p>{selectedMovie.MoTaPhim}</p>
                    {/* Other movie details here */}
                </ChiTietModal>
            )}
        </div>
    );
};

export default NowPlayingMovies;
