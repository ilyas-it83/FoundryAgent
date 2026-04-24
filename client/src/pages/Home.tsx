import React from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import LiveScoresTicker from "../components/LiveScoresTicker";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tl from-green-800 via-green-300 to-white">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <HeroBanner />
        <div className="my-8">
          <LiveScoresTicker />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
