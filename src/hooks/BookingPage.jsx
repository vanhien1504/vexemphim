import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MovieSelector from './MovieSelector';
import DatePicker from './DatePicker';
import CinemaSelector from './CinemaSelector';

const BookingPage = () => {
  const [selectedMovieId, setSelectedMovieId] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedCinemaId, setSelectedCinemaId] = useState('');
  const [selectedShowtimeId, setSelectedShowtimeId] = useState('');
  const navigate = useNavigate();

  const handleSelectMovie = (movieId) => {
    setSelectedMovieId(movieId);
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  const handleSelectShowtime = (cinemaId, showtimeId) => {
    setSelectedCinemaId(cinemaId);
    setSelectedShowtimeId(showtimeId);
  };

  const submitBooking = (movieId, date, cinemaId, showtimeId) => {
    axios.post('/api/bookings', {
      movieId: movieId,
      date: date,
      cinemaId: cinemaId,
      showtimeId: showtimeId
    })
    .then(response => {
      // After booking is successful, navigate to the seat selection page
      navigate('/seat-selection', { state: { bookingDetails: response.data } });
    })
    .catch(error => {
      console.error('Error submitting booking:', error);
    });
  };

  // Call submitBooking when the user has selected a showtime
  const handleProceedToSeats = () => {
    submitBooking(selectedMovieId, selectedDate, selectedCinemaId, selectedShowtimeId);
  };

  return (
    <div>
      <h1>Book Your Movie Ticket</h1>
      <MovieSelector onSelectMovie={handleSelectMovie} />
      <DatePicker onSelectDate={handleSelectDate} />
      {selectedMovieId && selectedDate && (
        <CinemaSelector 
          movieId={selectedMovieId} 
          selectedDate={selectedDate} 
          onSelectShowtime={handleSelectShowtime} 
        />
      )}
      {selectedShowtimeId && (
        <button onClick={handleProceedToSeats} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Proceed to Select Seats
        </button>
      )}
    </div>
  );
};

export default BookingPage;
