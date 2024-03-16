// pages/index.js

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import CampaignCard from "../components/CampaignCard";
import Footer from "../components/Footer";
import WorldIDWidget from "../components/WorldIDWidget";
// import { campaigns } from "../data/campaigns";
import { campaigns } from "../data/campaigns";

export default function Home() {
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
      <main className="pt-8 pb-16 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {campaigns.map((campaign) => (
            <CampaignCard
              key={campaign.id}
              title={campaign.title}
              description={campaign.description}
              image={campaign.image}
              link={campaign.link}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
