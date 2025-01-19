import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import BlogCard from "./components/BlogCard";
import Modal from "./modal/BlogModal";
import blogs from "./blog";

import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <BlogCard />
      <Contact />

     
    </>
  );
}

export default App;
