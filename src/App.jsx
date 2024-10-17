
import './App.css';
import React from 'react';
import WalletConnection from './components/WalletConnection';
import SwapForm from './components/SwapForm';


function App() {

  return (
    <>
      <h1>vishesh Dwivedi @ Google</h1>
      <WalletConnection>
      <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6 text-center">Token Swap Application</h1>
                <div className="flex justify-center mb-4">
                </div>
                <SwapForm/>
            </div>
      </WalletConnection>
    </>
  )
}

export default App

