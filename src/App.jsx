import { useEffect, useState } from 'react'
import { Suspense } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css'
import "../src/Styles/Loader.css"
import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Headroom from 'react-headroom'
import KeyNotePage from './Pages/KeyNotePage';
import StagesPage from './Pages/StagesPage';
import Presales from './Pages/PresalePage';

// Loading spinner component
const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

    <main id="container">
      <div className="dots">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
      <div className="dots2">
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
      </div>
      <div className="circle" />
    </main>

  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


function App() {

  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 1000,
      once: false,
    });
  }, []);


  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(delay);
  }, [])


  return (


    <>
      <div className=' flex flex-col mx-auto   min-w-screen max-w-[1600px]' >

        <BrowserRouter>
          <Headroom>
            <Navbar />
          </Headroom>
          <ScrollToTop />


          <Routes>

            <Route path="*" element={
              <Suspense fallback={isLoading ? <Loader /> : null}>
                <Navigate to="/" />
              </Suspense>
            } />

            <Route path="/" element={
              <Suspense fallback={isLoading ? <Loader /> : null}>
                <HomePage />
              </Suspense>
            } />
            <Route path="/Keynote" element={
              <Suspense fallback={isLoading ? <Loader /> : null}>
                <KeyNotePage />
              </Suspense>
            } />
            <Route path="/Stages" element={
              <Suspense fallback={isLoading ? <Loader /> : null}>
                <StagesPage />
              </Suspense>
            } />

            <Route path="/presale" element={
              <Suspense fallback={isLoading ? <Loader /> : null}>
                <Presales />
              </Suspense>
            } />


            <Route path="/loader" element={
              <Suspense fallback={isLoading ? <Loader /> : null}>
                <Loader />
              </Suspense>
            } />


          </Routes>

          <Footer />

        </BrowserRouter>

      </div>


    </>
  )
}

export default App
