"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {

  const imageRef = useRef();
 
  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled")
      } else {
        imageElement.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          Your AI Powered <br /> Heart Disease Prediction
        </h1>
        <p className="text-xl text-gray-600 my-8 max-w-3xl mx-auto">
          AI-driven platform designed to assess your heart health by predicting
          potential risks of heart disease. Our smart system analyzes medical
          data to deliver accurate, real-time predictions, helping you stay
          informed and in control.
        </p>
        <div className="flex justify-center">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Dashboard
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.png"
              className="rounded-lg shadow-2xl border mx-auto"
              width={1280}
              height={720}
              priority
              alt="Dashboard Preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
