import React from "react";
import Link from "next/link";

interface SimpleButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void; // Adjust the type if you need to pass event details to the onClick handler
  href?: string;
}
const Button: React.FC<SimpleButtonProps> = ({
  children,
  className = "",
  onClick,
  href,
}) => {
  const ButtonContent = (
    <button
      className={`inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );

  if (href) {
    return <Link href={href}>{ButtonContent}</Link>;
  }

  return ButtonContent;
};

export function Campaign() {
  return (
    <div className="grid md:grid-cols-2 gap-10 mt-36 ml-36 ">
      <div className="flex flex-col gap-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Make it Shine Campaign</h1>
          <p className="text-sm font-medium text-gray-500">
            Created by @ShiomiBrand
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Task</h2>
            <div className="text-sm">
              <p>
                Shiomi Beauty is on the hunt for passionate content creators to
                join our latest campaign, designed to showcase the
                transformative power of our skincare line. We&apos;re inviting
                you to dive deep into the essence of beauty and wellness,
                crafting authentic and engaging stories that resonate with
                audiences on Instagram and TikTok.
              </p>

              <p>
                Your mission, should you choose to accept it, involves creating
                a series of captivating posts and videos that highlight your
                personal skincare journey using Shiomi Beauty&apos;s products.
                We&apos;re looking for creators who can:
              </p>

              <ul>
                <li>
                  <strong>Unbox and Review:</strong> Start with an unboxing
                  video of our skincare package, sharing your first impressions
                  and the unique benefits of each product.
                </li>
                <li>
                  <strong>Daily Routine:</strong> Integrate our products into
                  your daily skincare routine, demonstrating application
                  techniques and sharing tips for achieving the best results.
                </li>
                <li>
                  <strong>Before and After:</strong> Document your skincare
                  journey over 4 weeks, showcasing the transformative effects of
                  our products with before-and-after visuals.
                </li>
                <li>
                  <strong>Engage and Inspire:</strong> Encourage your followers
                  to join the conversation by sharing their own experiences,
                  tips, and questions about skincare and wellness.
                </li>
              </ul>

              <p>
                Each piece of content should be tagged with #ShiomiGlow,
                inviting your audience to explore and engage with our
                brand&apos;s vision of accessible, effective skincare. In return
                for your creativity and passion, selected creators will receive
                an exclusive Shiomi Beauty care package, competitive
                compensation, and the chance to be featured on our official
                social media channels.
              </p>

              <p>
                Are you ready to illuminate the world with your glow? Apply now
                to become a Shiomi Beauty ambassador and help us inspire beauty
                and confidence in everyone.
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Treasury</h2>
            <p className="text-sm">$5000 for campaign</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Platform</h2>
            <p className="text-sm">Instagram, TikTok</p>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-4">
          <Button>Join Data Union</Button>
          <Link href="/createNFT" passHref>
            <Button>Join Creators Studio</Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="border border-gray-200 rounded-lg">
          <img
            alt="Image"
            className="rounded-t-lg"
            height={300}
            src="assets/1.png"
            style={{
              objectFit: "cover",
            }}
            width={500}
          />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-sm">
              <span className="font-medium">Style:</span>
              Casual, Fun, Trendy{"\n"}
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-sm">
              <span className="font-medium">Hashtags:</span>
              #SummerFashion #FashionFun #TrendyVibes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
