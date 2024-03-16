import Footer from "../components/Footer";
import Head from "next/head";
import Header from "../components/Header";
import React, { useEffect, useState } from "react";

export default function Creater() {
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    setShowWidget(true);
  }, []);
  return (
    <div className="bg-blue-400">
      <Head>
        <title>Hypetribe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header showWidget={showWidget} />
      <div className="flex flex-col md:flex-row bg-purple-600 text-white p-4">
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md text-gray-700 m-2">
          <h2 className="text-lg font-bold mb-4">File Upload</h2>
          <button className="bg-gray-300 text-gray-700 rounded px-4 py-2 hover:bg-gray-400 transition-colors">
            Upload File
          </button>
        </div>
        <div className="flex flex-col items-center p-4 bg-red-600 rounded-lg shadow-md m-2">
          <h2 className="text-lg font-bold mb-4">AI Editing Tools</h2>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-purple-500 rounded-lg p-4 shadow-inner flex items-center justify-center">
              <span>Image Filter</span>
            </div>
            <div className="bg-purple-500 rounded-lg p-4 shadow-inner flex items-center justify-center">
              <span>Text Recognition</span>
            </div>
            <div className="bg-purple-500 rounded-lg p-4 shadow-inner flex items-center justify-center">
              <span>Object Detection</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
