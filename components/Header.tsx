import React from "react";
import WorldIDWidget from "../components/WorldIDWidget";

interface HeaderProps {
  showWidget: boolean;
}

const Header: React.FC<HeaderProps> = ({ showWidget }) => {
  return (
    <header className="flex justify-between items-center py-4 text-white bg-opacity-90 bg-blue-500">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="/" className="text-xl font-bold">
            Hypetribe
          </a>
          <a href="/latest" className="hover:underline">
            Latest
          </a>
          <a href="/explore" className="hover:underline">
            Explore
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded">
            Connect Wallet
          </button>
          {showWidget && <WorldIDWidget />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
