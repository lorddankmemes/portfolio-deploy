import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

function Loader() {
  const blue = useRef(null);
  const red = useRef(null);
  const yellow = useRef(null);
  const green = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [blue.current, yellow.current],
      0.5,
      { y: 18 },
      { y: -18, yoyo: true, repeat: -1 }
    );
    gsap.fromTo(
      [red.current, green.current],
      0.5,
      { y: -18 },
      { y: 18, repeat: -1, yoyo: true }
    );
  }, []);

  return (
    <div class="flex bg-black min-h-screen">
    <div class="container relative my-auto">
    <svg viewBox="0 0 150 33.2" width="180" height="180" class="loader">
      <circle ref={blue} cx="16.1" cy="16.6" r="16.1" fill="#527abd" />
      <circle ref={red} cx="55.2" cy="16.6" r="16.1" fill="#de4431" />
      <circle ref={yellow} cx="94.3" cy="16.6" r="16.1" fill="#f4b61a" />
      <circle ref={green} cx="133.4" cy="16.6" r="16.1" fill="#009e52" />
      <text x="35" y="80" font-family="Verdana" font-size="18" fill="white">Loading...</text>
    </svg>
    </div>
    </div>
  );
};

export default Loader