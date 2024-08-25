import React from 'react';

function SketchfabEmbed() {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title="Taj Mahal- Agra,UP"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/d02e8cdef15946408be6613fc5d1f0ff/embed"
        style={{ width: '70%', height: '640px' , margin:'15%' }}
      ></iframe>
      <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
        <a
          href="https://sketchfab.com/3d-models/taj-mahal-agraup-d02e8cdef15946408be6613fc5d1f0ff?utm_medium=embed&utm_campaign=share-popup&utm_content=d02e8cdef15946408be6613fc5d1f0ff"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Taj Mahal- Agra,UP
        </a>{' '}
        {' '}
        <a
          href="https://sketchfab.com/sneh.?utm_medium=embed&utm_campaign=share-popup&utm_content=d02e8cdef15946408be6613fc5d1f0ff"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
        
        </a>{' '}
        {' '}
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=d02e8cdef15946408be6613fc5d1f0ff"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          
        </a>
      </p>
    </div>
  );
}

export default SketchfabEmbed;