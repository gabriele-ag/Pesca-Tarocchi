'use client';

import "./globals.css";


export default function Home() {

  return (
    <>
    <section className="hero">
       <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="video-background"
      >
        <source src="/background-video.mp4" type="video/mp4" />
      </video>
      <div className="container">
        <h1 className="title-home">Pesca Tarocchi</h1>
        <p className="description">Scopri le carte <br />Rivela il tuo futuro</p>
      </div>
    </section>
    </>
  );
}
