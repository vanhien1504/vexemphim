import React from 'react'
import Carousel from './Chuyendong/Carousel'
import NowPlayingMovies from './procuctmovie/NowPlayingMovies'
import SCmovie from './procuctmovie/SCmovie'
import Sukien from '../sukien/sukien'

const HomeLayout = () => {
    return (
        <div className=' bg-gray-500'>
            

            <Carousel />
            <div className='content' >
                <section style={{ marginTop: '1px' }}>
                    <NowPlayingMovies />
                </section>
                <main style={{margin:'70px'}}>
                    <SCmovie />
                </main >
                <section style={{padding:'50px'}}>
                    <Sukien/>
                </section>

            </div>
            
        </div>
    )
}

export default HomeLayout