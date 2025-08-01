import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact() {
 return (
    <div style={{
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      minHeight: '100vh'
    }}>        
    <Header />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Contact Us</h1>
        <p>If you have any questions or feedback, feel free to reach out!</p>
      </main>
      <Footer />
    </div>
  )
}

export default Contact
