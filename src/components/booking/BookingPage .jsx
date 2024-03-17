
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate  } from 'react-router-dom';
import '../css/booking.css';

const BookingPage = () => {
  const navigate = useNavigate ();
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [showtimes, setShowtimes] = useState([]);
  const [selectedShowtime, setSelectedShowtime] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await axios.get(`http://localhost:4000/movie/phim/${movieId}`);
      setMovieDetails(response.data);
    };

    const fetchShowtimes = async () => {
      const response = await axios.get(`http://localhost:4000/movie/phim/${movieId}/showtimes`);
      setShowtimes(response.data);
    };

    fetchMovieDetails();
    fetchShowtimes();
  }, [movieId]);

  return (
    <div className="booking-container">
      <h1>{movieDetails.title}</h1>
      <div className="calendar-container">
      </div>
      <div className="showtime-container">
        <h2>Chọn Suất Chiếu:</h2>
        <img src={movieDetails.Poster} alt="Movie Poster" className="movie-image" style={{width:'40%'}}/>
        <h2 className="movie-title">{movieDetails.TenPhim}</h2>
        {showtimes.map((showtime) => {
          const startTime = new Date(showtime.start_time);
          return (
            <div
              key={showtime.id_sc}
              className={`showtime-item ${selectedShowtime === showtime.id_sc ? 'active' : ''}`}
              onClick={() => setSelectedShowtime(showtime.id_sc)}
            >
              <div className="showtime-details">
              <button
                  className="showtime-button"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent event from bubbling to the parent div
                    navigate(`/chon-ghe/${showtime.id_sc}`);
                  }}
                >
                  Giờ chiếu: {startTime.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                </button>
                <span>Ngày chiếu: {startTime.toLocaleDateString('vi-VN')}</span>

                <span>Tên rạp: {showtime.TenRap}</span>
                <span>Địa chỉ: {showtime.DiaChi}</span>
              </div>
            </div>
          );
        })}
        
      </div>
    </div>
  );
};

export default BookingPage;
