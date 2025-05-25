import React from 'react';
import Hero from './components/Hero';
import VideoPresentation from './components/VideoPresentation';
import ProductBenefits from './components/ProductBenefits';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 font-sans">
      <Hero />
      <VideoPresentation />
      <ProductBenefits />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;