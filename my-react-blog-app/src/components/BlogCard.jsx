import React from 'react';
import './BlogCard.css';

const BlogCard = ({ blog, onClick }) => {
  return (
    <div className="blog-card" onClick={onClick}>
      <h3>{blog.title}</h3>
      <p>{blog.excerpt}</p>
      <span>By {blog.author}</span>
    </div>
  );
};

export default BlogCard;