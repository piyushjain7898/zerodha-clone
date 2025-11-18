import React from 'react'
import { Link } from 'react-router-dom';  
function Hero() {
    return (
        <div className='container p-5 mb-5'>
          <div className='row text-center'>
            <img src="media/homeHero.png" alt="Hero image" className='mb-5' />
            <h1 className='mt-5'>Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
             <Link to="/signup" className=' mb-5 fs-5 p-3 btn btn-primary ' style={{width:"20%", margin:"0  auto"}}>Sign up for free</Link> 
          </div>
        </div>
      );
}

export default Hero;