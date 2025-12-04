import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';

function Home() {
  return (
    <div>
      <Hero />
      <h1>Welcome to Pet Services</h1>
      <Card>
        <p>This is a card component.</p>
      </Card>
    </div>
  );
}

export default Home;