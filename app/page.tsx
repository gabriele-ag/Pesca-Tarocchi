'use client';

import "./globals.css";
import { useTarot } from "./component/useTarot";


export default function Home() {

  const { tarots } = useTarot()

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
          <source src="/background.mp4" type="video/mp4"/>
        </video>
      <div className="container">
        <h1 className="title-home">Pesca Tarocchi</h1>
        <p className="description">Scopri le carte <br />Rivela il tuo futuro</p>
      </div>
    </section>
    </>
  );
}
