import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SeatSelector = () => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching seats from the API
  useEffect(() => {
    axios.get('/api/seats') // Thay thế '/api/seats' bằng API endpoint thực tế của bạn
      .then(response => {
        setSeats(response.data); // Giả sử rằng response.data là một mảng của ghế
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching seats:', error);
        setLoading(false);
      });
  }, []);

  const toggleSeatSelection = (seatId) => {
    setSelectedSeats(prevSelectedSeats =>
      prevSelectedSeats.includes(seatId)
        ? prevSelectedSeats.filter(id => id !== seatId)
        : [...prevSelectedSeats, seatId]
    );
  };

  const confirmSeats = () => {
    // Xác nhận ghế đã chọn
    axios.post('/api/confirm-seats', { selectedSeats })
      .then(response => {
        // Xử lý kết quả sau khi xác nhận
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error confirming seats:', error);
      });
  };

  // Tạm thời hiển thị loading nếu dữ liệu đang được tải
  if (loading) return <div>Loading seats...</div>;

  return (
    <div className="seat-selector">
      <div className="seats-layout">
        {seats.map((seat) => (
          <button
            key={seat.id}
            className={`seat ${selectedSeats.includes(seat.id) ? 'selected' : ''}`}
            onClick={() => toggleSeatSelection(seat.id)}
            disabled={!seat.available}
          >
            {seat.label}
          </button>
        ))}
      </div>
      <div className="confirm-seats">
        <button onClick={confirmSeats}>Confirm Seats</button>
      </div>
    </div>
  );
};

export default SeatSelector;
