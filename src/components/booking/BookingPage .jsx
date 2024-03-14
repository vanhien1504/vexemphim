import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookingPage = () => {
  const { movieId } = useParams(); 
  const [movieDetails, setMovieDetails] = useState({});
  const [showtimes, setShowtimes] = useState([]);
  const [selectedShowtime, setSelectedShowtime] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      // Giả sử bạn cũng có API để lấy thông tin chi tiết phim
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

  const handleShowtimeChange = (e) => {
    setSelectedShowtime(e.target.value);
  };

  const handleBookTicket = () => {
    console.log("Đặt vé cho suất chiếu:", selectedShowtime);
    // Thêm logic để đặt vé ở đây...
  };

  return (
    <div>
      <h2>Đặt Vé: {movieDetails.TenPhim}</h2>
      <div>Chọn Suất Chiếu:</div>
      <select value={selectedShowtime} onChange={handleShowtimeChange}>
        <option value="">Vui lòng chọn suất chiếu</option>
        {showtimes.map(showtime => (
          <option key={showtime.id_sc} value={showtime.id_sc}>
            {new Date(showtime.start_time).toLocaleString()} - Rạp {showtime.id_rap}
          </option>
        ))}
      </select>
      <button onClick={handleBookTicket} disabled={!selectedShowtime}>Mua Vé Ngay</button>
    </div>
  );
};

export default BookingPage;
