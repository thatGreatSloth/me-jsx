const Contact = () => {
  return (
    <div>
      <h1 className="text-white justify-center text-3xl flex mt-10">
        Find Me Here!
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
      <div id="instagram"></div>
      <div id="github"></div>
      <div id="linkedin"></div>
      <div id="email"></div>
    </div>
  );
};

export default Contact;
