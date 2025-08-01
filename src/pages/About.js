import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      minHeight: '100vh'
    }}>        
    <Header />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>About Us page</h1>
        <p>Here you can find information about the application, its features, and the team behind it.</p>
      </main>
      <Footer />
    </div>
  )
}

export default About
