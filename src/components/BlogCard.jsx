import blogs from "../blog/index.js";

const BlogCard = (props) => {
  const { handleOpenModal } = props;
  return (
    <div>
      <div>
        <h1 className="text-center text-white text-3xl ">
          The Sloth's Perspective of all things Life
        </h1>
        <div className="wave-container">
          <svg
            id="wave"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z" />
          </svg>
        </div>
      </div>
      <div className="container mx-auto py-10 px-4 ">
        <div className="flex flex-wrap justify-center gap-6 ">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="w-64 border border-black  rounded-lg p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-200 mt-10 mr-3 "
              onClick={() => {
                handleOpenModal(blog); // Open the modal with selected blog
                console.log(blog); // Log the blog object to the console
              }}
            >
              <h2 className="text-3xl font-semibold text-gray-800 mb-2 p-10">
                {blog.title}
              </h2>
              <p className="text-white text-2xl mt-2 p-10">{blog.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
