import { useEffect, useState } from 'react'
import axios from 'axios'

export const NowPlayingMovies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchNowPlayingMovies = async () => {
            try {
                const response = await axios.get(
                    `https://api.example.com/movies/now-playing`
                )
                setMovies(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchNowPlayingMovies()
    }, [])

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4" center>Phim đang chiếu</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {movies.map(movie => (
                    <div key={movie.id} className="bg-gray rounded shadow">
                        <img
                            className="w-full h-64 object-cover rounded-t"
                            src={movie.poster}
                            alt={movie.title}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
                            <p className="text-gray-600">{movie.release_date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default NowPlayingMovies;