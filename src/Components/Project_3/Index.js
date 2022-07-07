import React from 'react';
import Review from './Review.js';
import './index.css';

const Index = () => {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default Index
