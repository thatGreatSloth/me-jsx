import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import BlogCard from "./components/BlogCard";
import Modal from "./modal/BlogModal";
import blogs from "./blog";



import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleOpenModal = () => {
    setSelectedBlog(blogs.id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <Hero />
      <main>
        <BlogCard handleOpenModal={handleOpenModal} />
      </main>
      <Contact />
   
        {isModalOpen && selectedBlog && (
          <Modal handleCloseModal={handleCloseModal}>  
          <div className="modal-content">
            <h2>{selectedBlog.title}</h2>
            <p>{selectedBlog.content}</p>
            <p><strong>Author:</strong> {selectedBlog.author}</p>
            <p><strong>Date:</strong> {selectedBlog.date}</p>
          </div>
            </Modal>
        )}
   
    </>
  );
}

export default App;
