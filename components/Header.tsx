import React, { useState, useEffect } from "react";
import WorldIDWidget from "../components/WorldIDWidget";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    setShowWidget(true);
  }, []);

  return (
    <header className="flex justify-between items-center py-4 text-white bg-opacity-90 bg-blue-500">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xl font-bold">
            Hypetribe
          </Link>
          <Link href="/creater" className="hover:underline">
            Create
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <ConnectButton />
          {showWidget && <WorldIDWidget />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
