import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const XuatChieuSom = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const response = await axios.get('/api/upcoming-movies');
        setMovies(response.data);
      } catch (error) {
        console.error('Failed to fetch upcoming movies:', error);
      }
    };

    fetchUpcomingMovies();
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center my-8">Phim Chiếu Sớm</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full" src={movie.posterUrl} alt={movie.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{movie.title}</div>
              <p className="text-gray-700 text-base">{movie.overview}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="btn btn-primary mr-2">Mua Vé Ngay</button>
              <button className="btn btn-secondary">Xem Chi Tiết</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default XuatChieuSom;
