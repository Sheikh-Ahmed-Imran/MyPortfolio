'use client'
import Image from "next/image";
import Head from 'next/head'
import {Hero} from "./components/Hero";
import { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import {About} from "./components/About";
import {Skills} from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
export default function Home() {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    // This logic will run only on the client-side
    const windowWidth = Math.random() * 2; // Dynamically setting width
    setWidth(windowWidth);
  }, []);

  // Fallback rendering until the client-side value is available
  if (width === null) {
    return <div className="loading-spinner">Loading...</div>;
  }
  return (
    <>
    <Head>
    <title>Your Name | Portfolio</title>
  </Head>
  <Navbar />
  <Hero width={width}/>
  <About />
  <Skills />
  <Projects />
  <Contact />
  

</>
  );
}
