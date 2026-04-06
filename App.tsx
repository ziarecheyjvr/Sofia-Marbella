import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Assessment from './components/Assessment';
import Checklist from './components/Checklist';
import Method from './components/Method';
import Services from './components/Services';
import Bio from './components/Bio';
import Shop from './components/Shop';
import Discounts from './components/Discounts';
import Footer from './components/Footer';
import LifestyleEvents from './components/LifestyleEvents';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComingSoon from './components/ComingSoon';
import Booking from './components/Booking';
import ScrollToTop from './components/ScrollToTop';
import Quiz from './components/Quiz';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';


const HomePage: React.FC = () => (
  <>
    <Hero />
    <Assessment />
    <Checklist />
    <Bio />
    <Method />
    <LifestyleEvents />
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
            <Route path="/programs" element={<Services />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/discounts" element={<Discounts />} />
            <Route path="/events-and-travels" element={<ComingSoon title="Events & Travels" subtitle={<>with <span className="whitespace-nowrap">Sofia.Marbella</span></>} />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
          </Routes>

        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;