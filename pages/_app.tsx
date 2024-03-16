import "@/styles/globals.css";
import { AppProps } from "next/app";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import "@rainbow-me/rainbowkit/styles.css";

const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: "Hypetribe",
  projectId: "09c4266c7cc4440c3c5600bbae9b9469",
  chains: [mainnet, polygon, optimism, arbitrum, base, zora],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
