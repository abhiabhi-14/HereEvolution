import React from 'react';
import './ImageSection.css'; // Assuming you have CSS styles defined in this file
import img1 from '../imgSec/img/MainPhoto.jpg'; // Import the image you want to use

function ImageSection() {
  const sectionStyle = {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${img1})`, // Use backticks for template literals
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  };



  return (
    <>
      <section style={sectionStyle}>
        <h2 className='imgHeading'> ~ Explore Your Local Treasures ~  </h2>
        <p >Discover the Flavors and Experiences of Your Community</p>
      </section>
    </>
  );
}

export default ImageSection;
