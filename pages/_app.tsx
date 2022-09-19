import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import React from "react";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import "../styles/globals.scss";

const { chains, provider, webSocketProvider } = configureChains(
  [
    {
      id: 588,
      /** Human-readable name */
      name: "Metis Stardust Testnet",
      /** Internal network name */
      network: "Metis Stardust Testnet",
      /** Currency used by chain */
      nativeCurrency: {
        name: "METIS",
        symbol: "METIS",
        decimals: 18,
      },
      /** Collection of RPC endpoints */
      rpcUrls: {
        default: "https://stardust.metis.io/?owner=588",
      },
      /** Collection of block explorers */
      blockExplorers: {
        default: {
          name: "Metis",
          url: "https://stardust.metis.io/?owner=588",
        },
      },
      /** Flag for test networks */
      testnet: true,
    },
    // chain.goerli,
  ],
  [
    alchemyProvider({
      // This is Alchemy's default API key.
      // You can get your own at https://dashboard.alchemyapi.io
      apiKey: "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Debita",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </SessionProvider>
  );
}

export default MyApp;
