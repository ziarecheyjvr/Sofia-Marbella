import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Assessment from './components/Assessment';
import Checklist from './components/Checklist';
import Method from './components/Method';
import Services from './components/Services';
import Bio from './components/Bio';
import Shop from './components/Shop';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComingSoon from './components/ComingSoon';
import Booking from './components/Booking';
import ScrollToTop from './components/ScrollToTop';
import Quiz from './components/Quiz';


const HomePage: React.FC = () => (
  <>
    <Hero />
    <Assessment />
    <Checklist />
    <Bio />
    <Method />
    <Services />
    <Shop />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-charcoal-950 min-h-screen text-gray-100 font-sans selection:bg-gold-500 selection:text-black">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop-with-me" element={<ComingSoon title="Shop With Me" subtitle="Curated tools for a refined life" />} />
            <Route path="/events-and-travels" element={<ComingSoon title="Events & Travels" subtitle="with Sofia Marbella" />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>

        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;