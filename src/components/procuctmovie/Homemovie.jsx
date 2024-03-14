import React from 'react'
import NowPlayingMovies from './NowPlayingMovies'
import SCmovie from './SCmovie'

const Homemovie = () => {
    return (
        <div>
            <main>
                <NowPlayingMovies />
            </main>
            <main>
                <SCmovie />
            </main>
        </div>
    )
}

export default Homemovie