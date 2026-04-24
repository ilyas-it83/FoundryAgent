import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

const navClass = ({ isActive }: { isActive: boolean }) => 
  isActive ? 'font-bold text-blue-600' : 'text-gray-700';

const Home = () => <div className="p-8">Welcome to the Football Fan Website!</div>;
const Teams = () => <div className="p-8">Teams Page</div>;
const Matches = () => <div className="p-8">Matches Page</div>;
const News = () => <div className="p-8">News Page</div>;
const FanZone = () => <div className="p-8">Fan Zone (Polls, Community)</div>;
const Standings = () => <div className="p-8">Standings Page</div>;

const App = () => (
  <div className="min-h-screen flex flex-col">
    <header className="bg-white shadow mb-6">
      <nav className="container mx-auto py-4 flex space-x-6">
        <NavLink to="/" className={navClass} end>Home</NavLink>
        <NavLink to="/teams" className={navClass}>Teams</NavLink>
        <NavLink to="/matches" className={navClass}>Matches</NavLink>
        <NavLink to="/news" className={navClass}>News</NavLink>
        <NavLink to="/fanzone" className={navClass}>Fan Zone</NavLink>
        <NavLink to="/standings" className={navClass}>Standings</NavLink>
      </nav>
    </header>
    <main className="flex-grow container mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/news" element={<News />} />
        <Route path="/fanzone" element={<FanZone />} />
        <Route path="/standings" element={<Standings />} />
      </Routes>
    </main>
    <footer className="py-4 text-center text-gray-500">
      © 2024 Football Fan Website
    </footer>
  </div>
);

export default App;
