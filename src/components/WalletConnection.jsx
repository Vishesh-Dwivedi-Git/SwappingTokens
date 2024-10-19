import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter, PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

const Wallet = ({ children }) => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Devnet;

    // Memoized RPC endpoint for the network
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    // Memoized wallets array
    const wallets = useMemo(
        () => [
            new UnsafeBurnerWalletAdapter(),
            new PhantomWalletAdapter()
        ],
        [network] // Dependencies for the memoized value
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect={true}>
                <WalletModalProvider>
                    {/* Buttons for wallet connection and disconnection */}
                    {/* Your app's components go here, nested within the context providers. */}
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default Wallet;
