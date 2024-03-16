import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import MainPage from "../components/MainPage";
import Footer from "../components/Footer";
import WorldIDWidget from "../components/WorldIDWidget";

export default function Home() {
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    setShowWidget(true);
  }, []);

  return (
    <div>
      <Head>
        <title>Hypetribe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {showWidget && <WorldIDWidget />}
      <MainPage />
      <Footer />
    </div>
  );
}
