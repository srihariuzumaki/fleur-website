import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SharingSection from './components/SharingSection';
import Testimonials from './components/Testimonials';
import WorkGrid from './components/WorkGrid';
import TeamSection from './components/TeamSection';
import ProductsSection from './components/ProductsSection';
import ClientsSection from './components/ClientsSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <SharingSection />
        <Testimonials />
        <WorkGrid />
        <TeamSection />
        <ProductsSection />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
