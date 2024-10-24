import React, { useState } from 'react';
import { Connection, VersionedTransaction } from '@solana/web3.js'; 
import fetch from 'cross-fetch';

const cryptoData = [
  { name: 'Solana (SOL)', mintCode: 'So11111111111111111111111111111111111111112', decimals: 9 },
  { name: 'USDC', mintCode: 'EPjFWdd5AufqSSqeM2qgQAo43UDEbgA9AgibQK9Pfdnc', decimals: 6 },
  { name: 'Ethereum (ETH)', mintCode: '7vfCXTf3gLqEZ4as8Lmj573dBsG8h9pEAVpD9T4v5L7', decimals: 18 },
];

const TokenSwapForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPayCrypto, setSelectedPayCrypto] = useState('Select a cryptocurrency');
  const [selectedReceiveCrypto, setSelectedReceiveCrypto] = useState('Select a cryptocurrency');
  const [mintPay, setMintPay] = useState('');
  const [mintRec, setMintRec] = useState('');
  const [payDecimals, setPayDecimals] = useState(0);
  const [recDecimals, setRecDecimals] = useState(0);
  const [payAmount, setPayAmount] = useState('');
  const [receiveAmount, setReceiveAmount] = useState('');
  const slip = 50;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (crypto, type) => {
    if (type === 'pay') {
      setSelectedPayCrypto(crypto.name);
      setMintPay(crypto.mintCode);
      setPayDecimals(crypto.decimals);
    } else {
      setSelectedReceiveCrypto(crypto.name);
      setMintRec(crypto.mintCode);
      setRecDecimals(crypto.decimals);
    }
    setIsOpen(false);
  };

  const handlePayAmountChange = async (e) => {
    const amount = e.target.value;
    setPayAmount(amount);

    const payAmountInSmallestUnit = BigInt(Math.floor(amount * 10 ** payDecimals));

    if (mintPay && mintRec) {
      try {
        const quoteResponse = await fetch(
          `https://quote-api.jup.ag/v6/quote?inputMint=${mintPay}&outputMint=${mintRec}&amount=${payAmountInSmallestUnit}&slippageBps=${slip}`
        );

        const data = await quoteResponse.json();
        
        if (data && data.data && data.data[0]) {
          const outAmount = data.data[0].outAmount;
          setReceiveAmount((outAmount / 10 ** recDecimals).toFixed(6));
        } else {
          setReceiveAmount('0');
        }
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    }
  };

  const handleSwap = async () => {
    const connection = new Connection('https://api.mainnet-beta.solana.com'); // Adjust if necessary
    const wallet = window.solana; // Assuming Phantom Wallet or any Solana wallet is being used

    if (!wallet || !wallet.isConnected) {
      console.error('Wallet not connected');
      return;
    }

    try {
      const payAmountInSmallestUnit = BigInt(Math.floor(payAmount * 10 ** payDecimals));

      const quoteResponse = await fetch(
        `https://quote-api.jup.ag/v6/quote?inputMint=${mintPay}&outputMint=${mintRec}&amount=${payAmountInSmallestUnit}&slippageBps=${slip}`
      );
      const { data: quoteData } = await quoteResponse.json();
      const bestQuote = quoteData[0];

      const swapResponse = await fetch('https://quote-api.jup.ag/v6/swap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quoteResponse: bestQuote,
          userPublicKey: wallet.publicKey.toString(),
          wrapAndUnwrapSol: true,
        }),
      });

      const { swapTransaction } = await swapResponse.json();
      const swapTransactionBuf = Buffer.from(swapTransaction, 'base64');
      const transaction = VersionedTransaction.deserialize(swapTransactionBuf);

      const latestBlockhash = await connection.getLatestBlockhash();
      transaction.recentBlockhash = latestBlockhash.blockhash;

      const signedTx = await wallet.signTransaction(transaction); // Phantom Wallet signing
      const txid = await connection.sendRawTransaction(signedTx.serialize(), {
        skipPreflight: true,
        maxRetries: 3,
      });

      await connection.confirmTransaction(txid, 'confirmed');
      console.log(`Transaction successful: ${txid}`);
    } catch (error) {
      console.error('Error executing swap:', error);
    }
  };

  return (
    <div className="flex justify-center m-10">
      <div className="flex flex-col min-w-[800px] min-h-[500px] p-6 bg-gradient-to-r from-gray-800 via-slate-900 to-black rounded-xl shadow-2xl border border-gray-700 text-white">
        
        <div className="mb-6">
          <div className="text-sm mb-2">You Pay</div>
          <div className="relative mb-4">
            <input
              className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded-lg"
              type="text"
              value={selectedPayCrypto}
              onClick={toggleDropdown}
              placeholder="Select a cryptocurrency"
              readOnly
            />
            {isOpen && (
              <div className="absolute left-0 right-0 z-10 mt-1 bg-gray-700 border border-gray-600 rounded-lg shadow-lg">
                {cryptoData.map((crypto) => (
                  <div
                    key={crypto.mintCode}
                    className="p-2 text-white hover:bg-gray-600 cursor-pointer"
                    onClick={() => handleSelect(crypto, 'pay')}
                  >
                    {crypto.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          <input
            className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded-lg"
            type="number"
            value={payAmount}
            onChange={handlePayAmountChange}
            placeholder="Enter amount"
          />
        </div>

        <div className="flex justify-center mb-6">
          <button className="bg-purple-500 p-2 rounded-full">
            <span className="text-2xl">&#x21C5;</span>
          </button>
        </div>

        <div className="mb-6">
          <div className="text-sm mb-2">You Receive</div>
          <div className="relative mb-4">
            <input
              className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded-lg"
              type="text"
              value={selectedReceiveCrypto}
              onClick={toggleDropdown}
              placeholder="Select a cryptocurrency"
              readOnly
            />
            {isOpen && (
              <div className="absolute left-0 right-0 z-10 mt-1 bg-gray-700 border border-gray-600 rounded-lg shadow-lg">
                {cryptoData.map((crypto) => (
                  <div
                    key={crypto.mintCode}
                    className="p-2 text-white hover:bg-gray-600 cursor-pointer"
                    onClick={() => handleSelect(crypto, 'receive')}
                  >
                    {crypto.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          <input
            className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded-lg"
            type="text"
            value={receiveAmount}
            readOnly
            placeholder="Receive amount"
          />
        </div>

        <button
          className="w-full p-3 text-lg rounded-lg bg-purple-600 hover:bg-purple-700"
          onClick={handleSwap}
        >
          Swap
        </button>
      </div>
    </div>
  );
};

export default TokenSwapForm;
