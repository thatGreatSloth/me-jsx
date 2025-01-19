import React, { useState } from 'react';
import BlogCard from './BlogCard';
import BlogModal from './BlogModal';
import blogsData from '../data/blogs';

const App = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBlog(null);
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <h1>My Blog</h1>
      <div className="blog-cards">
        {blogsData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} onClick={() => openModal(blog)} />
        ))}
      </div>
      {isModalOpen && (
        <BlogModal blog={selectedBlog} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;