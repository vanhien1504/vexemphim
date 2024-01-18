import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Layout/Header';
import Carousel from './Layout/Carousel';
import { Footer } from './Layout/footer';
import NowPlayingMovies from './Layout/procuctmovie/NowPlayingMovies';
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <nav>
          <Carousel />
          <section>
            <NowPlayingMovies />
          </section>
        </nav>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;