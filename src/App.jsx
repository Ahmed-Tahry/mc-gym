import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Advantages from "./components/advantages";
import Membership from "./components/membership";
import AboutUs from "./components/AboutUs";
import Trainer from "./components/trainer";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="w-[full] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Advantages />
      <Membership />
      <AboutUs />
      <Trainer />
      <Footer />
    </div>
  );
}
