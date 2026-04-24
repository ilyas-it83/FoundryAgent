import React from "react";
import { Link } from "react-router-dom";

const HeroBanner: React.FC = () => (
  <section className="relative overflow-hidden bg-green-900/80 h-[350px] md:h-[460px] flex items-center justify-center shadow-xl">
    {/* Football Image Overlay */}
    <img
      src="/hero-football.jpg"
      alt="Football action"
      className="absolute w-full h-full object-cover object-center opacity-60 mix-blend-overlay pointer-events-none"
    />
    {/* Overlay Gradient */}
    <div className="absolute inset-0 bg-gradient-to-tr from-green-900 via-green-700/50 to-transparent"></div>
    {/* Content */}
    <div className="relative z-10 flex flex-col items-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
        Welcome to FootballFan!
      </h1>
      <p className="text-lg md:text-2xl text-white/90 max-w-xl mb-8 font-medium drop-shadow">
        Your go-to hub for the latest football scores, news, and fan community.
      </p>
      <Link
        to="/scores"
        className="text-lg bg-white text-green-800 font-bold py-3 px-8 rounded-full shadow hover:bg-green-100 focus:ring-2 focus:ring-green-400 transition"
      >
        See Live Scores
      </Link>
    </div>
  </section>
);

export default HeroBanner;
