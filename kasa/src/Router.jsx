import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Header from './components/header';
import Footer from './components/footer';
import Housing from './pages/housing';
import About from './pages/about';
import Error from './pages/error'
import Home from './pages/home';




function Router() {
  return (
    <React.StrictMode>
      /*API router*/
      <BrowserRouter className="" basename="">
        /*chercher logements*/
        <div className="App">
            <div className='content'>
              <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<Housing />} />
                    <Route path="/" element={<About />} />
                    <Route path="/" element={<Error />} />
                </Routes>
            </div>
            <Footer />
        </div>

      </BrowserRouter>

    
  </React.StrictMode>

  );
}

export default Router;
