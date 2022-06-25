import { useState } from "react";
import { useSpring, a } from "@react-spring/web";

export default function Example() {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div className="flex flex-col items-center py-16">
      <a.div
        className="flex items-center justify-center h-60 w-60 bg-orange-500 absolute rounded-2xl shadow-lg"
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      >
        Yes
      </a.div>

      <a.div
        className="flex items-center justify-center h-60 w-60 bg-yellow-500 relative rounded-2xl shadow-lg"
        style={{
          opacity,
          transform,
          rotateY: "180deg",
        }}
      >
        No
      </a.div>

      <button
        onClick={() => {
          set((state) => !state);
        }}
        className="backface-visibility-hidden mt-8 flex transform items-center rounded-full bg-black bg-opacity-20 px-3 py-2 text-sm font-medium text-white transition hover:scale-105 hover:bg-opacity-30 focus:outline-none active:bg-opacity-40"
      >
        <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 opacity-70">
          <path
            d="M14.9497 14.9498C12.2161 17.6835 7.78392 17.6835 5.05025 14.9498C2.31658 12.2162 2.31658 7.784 5.05025 5.05033C7.78392 2.31666 12.2161 2.31666 14.9497 5.05033C15.5333 5.63385 15.9922 6.29475 16.3266 7M16.9497 2L17 7H16.3266M12 7L16.3266 7"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>

        <span className="ml-3">Flip</span>
      </button>
    </div>
  );
}
