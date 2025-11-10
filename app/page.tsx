'use client';

import "./globals.css";

import { useTarot } from "./component/useTarot";

import { useState } from "react";


export default function Home() {

  const { tarots } = useTarot();
  


  return (
    <>
    <div>
      <h1>Home</h1>
      <div>

      </div>
    </div>
    </>
  );
}
