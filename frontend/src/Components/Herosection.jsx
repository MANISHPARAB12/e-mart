// import React from 'react'
import heroImg from '../assets/heroimg.png'
import '../App.css'
export const Herosection = () => {
  return (
    <section className='hero'>
        <div className='left-container'>
        <div className="h1-container">
            <h1>We bring the store</h1>
            <h1>to your door</h1>
        </div>

        <div className="p-container">
        <p>Get organic produce and sustainably sourced</p>
        <p>groceries delivery at up to 4% off grocery.</p>
        </div>

        <button className='shop-btn'>
            Shop Now
        </button>
        </div>

        <div className='right-container'>
            <img src={heroImg} alt=""  className='heroimg'/>
        </div>
    </section>
  )
}


// google h1 font lillita one