import React from 'react';
import './BlogModal.css';

const BlogModal = ({ isOpen, onClose, blog }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal-content">
        <h2>{blog.title}</h2>
        <h4>By {blog.author}</h4>
        <p>{blog.content}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default BlogModal;