import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FeaturedMovies from '../components/FeaturedMovies';
import FeaturedTV from '../components/FeaturedTV';
import Content from '../components/Content';

function Home() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      minHeight: '100vh'
    }}>      
      <Header />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <Hero />
        <FeaturedMovies />
        <FeaturedTV />
        <Content />
      </main>
      <Footer />
    </div>
  )
}

export default Home
