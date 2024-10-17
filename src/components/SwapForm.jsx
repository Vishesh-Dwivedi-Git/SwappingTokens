import React, { useState } from 'react';

const TokenSwapForm = () => {
    const [fromToken, setFromToken] = useState('');
    const [toToken, setToToken] = useState('');
    const [amount, setAmount] = useState('');
    const [slippage,setSlippage]=useState('');

    const handleSwap = (e) => {
        e.preventDefault();
        // Implement the swap logic here
        console.log(`Swapping ${amount} of ${fromToken} to ${toToken}`);
    };

    return (
        <form onSubmit={handleSwap} className="flex flex-col space-y-4">
            <div>
                <label htmlFor="fromToken" className="block text-sm font-medium text-gray-700">Input Mint</label>
                <input
                    type="text"
                    id="fromToken"
                    value={fromToken}
                    onChange={(e) => setFromToken(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    placeholder="Enter token to swap from"
                    required
                />
            </div>
            <div>
                <label htmlFor="toToken" className="block text-sm font-medium text-gray-700">OutPut Mint</label>
                <input
                    type="text"
                    id="toToken"
                    value={toToken}
                    onChange={(e) => setToToken(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    placeholder="Enter token to swap to"
                    required
                />
            </div>
            <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount:</label>
                <input
                    type="Decimal"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    placeholder="Enter amount to swap"
                    required
                />
            </div>
            <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Slippage</label>
                <input
                    type="Decimal"
                    id="amount"
                    value={slippage}
                    onChange={(e) => setSlippage(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    placeholder="Enter amount to swap"
                    required
                />
            </div>
            <button
                type="submit"
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
                Swap Tokens
            </button>
        </form>
    );
};

export default TokenSwapForm;
