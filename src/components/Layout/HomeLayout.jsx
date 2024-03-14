import React from 'react';
import Carousel from '../Chuyendong/Carousel';
import NowPlayingMovies from '../procuctmovie/NowPlayingMovies';
import SCmovie from '../procuctmovie/SCmovie';
import Sukien from '../sukien/sukien';
import '../css/home.css'; // Đảm bảo đã import CSS

const HomeLayout = () => {
    return (
        <div className="container mx-auto">
            <div className="content">
                <Carousel />
                <section className="my-4">
                    <NowPlayingMovies/>

                </section>
                <section>
                    <SCmovie />
                </section>
                <section>
                    <Sukien />
                </section>
            </div>
        </div>
    );
};

export default HomeLayout;
