import Footer from "../components/Footer";
import Head from "next/head";
import Header from "../components/Header";
import React, { useRef, useEffect, useState } from "react";

import * as dotenv from "dotenv";
dotenv.config();
import lighthouse from "@lighthouse-web3/sdk";

export default function DataUnion() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleUploadButtonClick = () => {
    if (fileInputRef.current !== null) {
      uploadFile(fileInputRef.current.click(););
    }
  };

  // This function now accepts a 'filePath' argument
  const uploadFile = async (filePath) => {
    const apiKey = process.env.LIGHTHOUSE_API_KEY;
    // Ensure you've securely stored your API key in the .env file

    try {
      const response = await lighthouse.upload(filePath, apiKey);
      console.log(response);
      console.log(
        "Visit at: https://gateway.lighthouse.storage/ipfs/" +
          response.data.Hash
      );
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-800 text-gray-200 min-h-screen">
      <Head>
        <title>Hypetribe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-8 grid grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-lg bg-gray-200 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4 text-purple-900">
              File Upload
            </h2>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }} // Hide the input since you're using a custom button
              onChange={handleImageChange}
              accept="image/*" // Optionally ensure only images can be selected
            />
            <div className="flex justify-center items-center h-48 bg-gray-300 rounded-lg mb-4">
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleUploadButtonClick}
              >
                Upload File
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gradient-to-r from-blue-800 to-purple-600 p-4 flex justify-end">
        <h1 className="text-2xl font-bold mt-300 ml-20 px-10">
          Submit to data union and get rewarded{" "}
        </h1>
        <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
          Submit your Data
        </button>
      </footer>
    </div>
  );
}
