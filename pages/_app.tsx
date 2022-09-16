import '../styles/globals.scss';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider, webSocketProvider } = configureChains(
  [
    {
      id: 1088,
      /** Human-readable name */
      name: "Metis",
      /** Internal network name */
      network: "Metis",
      /** Currency used by chain */
      nativeCurrency: {
        name: "METIS",
        symbol: "METIS",
        decimals: 18,
      },
      /** Collection of RPC endpoints */
      rpcUrls: {
        default: "https://andromeda.metis.io/?owner=1088",
      },
      /** Collection of block explorers */
      blockExplorers: {
        default: {
          name: "Metis",
          url: "https://andromeda.metis.io/?owner=1088"
        }
      },
      /** Flag for test networks */
      testnet: true
  }
  ],
  [
    alchemyProvider({
      // This is Alchemy's default API key.
      // You can get your own at https://dashboard.alchemyapi.io
      apiKey: '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC',
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Debita',
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
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
