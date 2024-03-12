const CinemaSelector = ({ movieId, selectedDate, onSelectShowtime }) => {
    const [cinemas, setCinemas] = useState([]);
  
    useEffect(() => {
      if (movieId && selectedDate) {
        axios.get(`/api/cinemas?movieId=${movieId}&date=${selectedDate}`)
          .then(response => {
            setCinemas(response.data);
          })
          .catch(error => console.error('Error fetching cinemas:', error));
      }
    }, [movieId, selectedDate]);
  
    return (
      <div>
        {cinemas.map(cinema => (
          <div key={cinema.id}>
            <h3>{cinema.name}</h3>
            <div>
              {cinema.showtimes.map(showtime => (
                <button key={showtime.id} onClick={() => onSelectShowtime(cinema.id, showtime.id)} className="p-2">
                  {showtime.time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  