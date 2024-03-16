import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import CampaignCard from "../components/CampaignCard";
import Footer from "../components/Footer";
import { campaigns } from "../data/campaigns";

export default function Home() {
  return (
    <div className="bg-blue-400">
      <Head>
        <title>Hypetribe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
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
