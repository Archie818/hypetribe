import Footer from "../components/Footer";
import Head from "next/head";
import Header from "../components/Header";
import React, { useRef, useEffect, useState } from "react";

export default function Creater() {
  const [showWidget, setShowWidget] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      // Prepare the file to be sent in a FormData object
      const formData = new FormData();
      formData.append("file", file);

      // Use fetch to send the file to your API route
      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        console.log(data); // Log or handle the response from your API

        // Optionally, update the UI to indicate the file is uploaded
        // setSelectedImage(URL.createObjectURL(file));
      } catch (error) {
        console.error("Error uploading the file:", error);
      }
    }
  };

  const handleUploadButtonClick = () => {
    if (fileInputRef.current !== null) {
      fileInputRef.current.click();
    }
  };

  useEffect(() => {
    setShowWidget(true);
  }, []);
  return (
    <div className="bg-gradient-to-br from-red-600 to-purple-800 text-gray-200 min-h-screen">
      <Head>
        <title>Hypetribe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header showWidget={showWidget} />
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
            {selectedImage && (
              <div className="h-48 bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src={selectedImage}
                  alt="Preview"
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-full max-w-lg bg-gradient-to-b from-red-800 via-purple-700 to-red-600 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4">AI Editing Tools</h2>
            <div className="grid grid-cols-3 gap-4">
              <button className="bg-gradient-to-r from-red-700 to-purple-800 p-4 rounded-lg flex flex-col items-center justify-center hover:bg-gradient-to-r hover:from-red-600 hover:to-purple-700">
                <img
                  alt="Image Filter"
                  className="mb-2"
                  height="32"
                  src="assets/ai1.png"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span>Image Filter</span>
              </button>
              <button className="bg-gradient-to-r from-red-700 to-purple-800 p-4 rounded-lg flex flex-col items-center justify-center hover:bg-gradient-to-r hover:from-red-600 hover:to-purple-700">
                <img
                  alt="Text Recognition"
                  className="mb-2"
                  height="32"
                  src="assets/ai2.png"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span>Branded style</span>
              </button>
              <button className="bg-gradient-to-r from-red-700 to-purple-800 p-4 rounded-lg flex flex-col items-center justify-center hover:bg-gradient-to-r hover:from-red-600 hover:to-purple-700">
                <img
                  alt="Object Detection"
                  className="mb-2"
                  height="32"
                  src="assets/ai3.png"
                  style={{
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span>Meme creation</span>
              </button>
            </div>
            <div className="mt-8">
              <button className="bg-red-600 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                Invite with Lens frens
              </button>{" "}
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gradient-to-r from-red-800 to-purple-600 p-4 flex justify-end">
        <h1 className="text-2xl font-bold mt-300 ml-20 px-10">
          Verify you contribiution to the campaign
        </h1>
        <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
          Create NFT
        </button>
      </footer>
    </div>
  );
}
