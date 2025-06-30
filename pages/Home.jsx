import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="hero">
      <h2>Welcome to HomeStyler Pro</h2>
      <p>Your personal design and painting assistant</p>
      <Link className="btn" to="/paint">Start with Paint Tool</Link>
    </section>
  );
}

export default Home;
