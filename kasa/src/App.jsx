import React from 'react';

import Header from './components/header';
import Footer from './components/footer';
import Housing from './pages/housing';
import About from './pages/about';
import Error from './pages/error'
import Home from './pages/home';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <React.StrictMode>
      /*API router*/
      <BrowserRouter className="" basename="">
        //chercher logements
        <div className="App">
            <div className='content'>
              <Header />
                <Routes>
                    <Routes path="/" element={<Home />} />
                    <Routes path="/" element={<Housing />} />
                    <Routes path="/" element={<About />} />
                    <Routes path="/" element={<Error />} />
                </Routes>
            </div>
            <Footer />
        </div>

      </BrowserRouter>

    <App />
  </React.StrictMode>

  );
}

export default App;
