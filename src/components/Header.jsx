import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    // Reset initial state (ensures it works on refresh)
    gsap.set(".nav-item", { opacity: 0, y: -50 });

    // Animate nav items falling down from the top and landing in place
    gsap.to(".nav-item", {
      opacity: 1, // Make them visible
      y: 0, // Move to their normal position (final position)
      duration: 1, // Duration of 1 second
      stagger: 0.1, // Stagger the animation for each nav item
    });
  }, []); // Empty dependency array ensures this effect runs only once on page load
  
  return (
    <>
      <header className="w-full p-5">
        <div>
          <nav>
            <ul className="flex gap-10 justify-center mt-5">
              <li className="nav-item">Home</li>
              <li className="nav-item">My Stories</li>
              <li className="nav-item">Catch Me Here</li>
            </ul>
          </nav>
          <div className="wave-container">
    <svg id="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z" />
    </svg>
  </div>
        </div>
      </header>
    </>
  );
};

export default Header;
