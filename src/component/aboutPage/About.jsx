import React from 'react'
import Card from '../card/Card'
import img1 from './aboutPagePhoto.jpg'
import "./AboutIndex.css"

function About() {
  return (
    <div>
      <img src={img1} className='aboutPageImg'></img>
      <div className='textSection'>
        <div className='text'>
          <h1 className='textheading'>About Us.</h1>
          About Us:

At Nearby Now, we're dedicated to making local exploration effortless and enriching. Our team is passionate about leveraging technology to provide you with real-time updates, personalized recommendations, and immersive experiences. With our platform, you can uncover hidden gems, support local businesses, and create unforgettable memories—all with the tap of a button. Join us as we embark on a journey to transform the way you discover and connect with your neighborhood. Welcome to a world of endless possibilities with Nearby Now.
        </div>
      </div>
    </div>
  )
}

export default About
