'use client';

import "./globals.css";

import { useTarot } from "./component/useTarot";


export default function Home() {

  const { tarots } = useTarot();

  return (
    <>
    {tarots.map((curTarot) => (
      <h1 key={curTarot.id} className="title">{curTarot.nome}</h1>
    ))}
    </>
  );
}
