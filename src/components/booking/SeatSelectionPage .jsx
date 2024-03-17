import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/SeatSelectionPage.css';

const SeatSelectionPage = () => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/seat/seats')
      .then(response => setSeats(response.data))
      .catch(error => console.error("Could not fetch seats:", error));
  }, []);

  const handleSeatSelection = (seat) => {
    if (seat.DaDat) {
      alert('Ghế này đã được đặt.');
      return;
    }
    setSelectedSeats(prevSelectedSeats => {
      // Check if the seat is already selected
      if (prevSelectedSeats.find(selectedSeat => selectedSeat.id_ghe === seat.id_ghe)) {
        return prevSelectedSeats.filter(selectedSeat => selectedSeat.id_ghe !== seat.id_ghe);
      } else {
        return [...prevSelectedSeats, seat];
      }
    });
  };

  const getTotalPrice = () => {
    return selectedSeats.reduce((total, seat) => total + seat.gia_ghe, 0);
  };

  const renderSeatsByRow = () => {
    const seatRows = seats.reduce((acc, seat) => {
      acc[seat.HangGhe] = acc[seat.HangGhe] || [];
      acc[seat.HangGhe].push(seat);
      return acc;
    }, {});

    return Object.entries(seatRows).map(([row, seats]) => (
      <div key={row} className="seat-row">
        <div className="seat-row-label">{`Hàng ${row}`}</div>
        <div className="seat-row-seats">
          {seats.map((seat) => (
            <div
              key={seat.id_ghe}
              className={`seat ${seat.DaDat ? 'booked' : selectedSeats.find(selectedSeat => selectedSeat.id_ghe === seat.id_ghe) ? 'selected' : 'available'}`}
              onClick={() => handleSeatSelection(seat)}
            >
              {seat.SoGhe}
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="seat-booking-container">
      <div className="seats-container">
        <h1>Đặt Ghế</h1>
        {renderSeatsByRow()}
      </div>
      <div className="sidebar">
        <h3>Danh sách ghế bạn chọn</h3>
        <ul className="seat-list">
          {selectedSeats.map(seat => (
            <li key={seat.id_ghe} className="seat-list-item">
              <span>{seat.SoGhe}</span>
              <span>{`${seat.Gia.toLocaleString()} VND`}</span>
              <span className="remove-seat" onClick={() => handleSeatSelection(seat)}>X</span>
            </li>
          ))}
        </ul>
        <div className="total">
          <span>Tổng tiền thanh toán</span>
          <span>{`${getTotalPrice().toLocaleString()} VND`}</span>
        </div>
        <button className="pay-button">Thanh toán</button>
      </div>
    </div>
  );
};

export default SeatSelectionPage;
