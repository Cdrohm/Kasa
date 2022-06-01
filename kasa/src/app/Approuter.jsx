import React from 'react';
import { BrowserRouter , Route, Routes} from "react-router-dom";

import Header from '../components/header';
import Footer from '../components/footer';
import Housing from '../pages/housing';
import About from '../pages/about';
import Error from '../pages/error'
import Home from '../pages/home';



      /*API router*/
        /*chercher logements*/


function AppRouter() {
  return (
    <React.StrictMode>
      <BrowserRouter className="container" basename="kasa">
        <div className="App">
            <div className="content">
              <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/housing/?" element={<Housing />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/" element={<Error />} />
                </Routes>
            </div>
            <Footer />
        </div>

      </BrowserRouter>

    
  </React.StrictMode>

  );
}

export default AppRouter;
