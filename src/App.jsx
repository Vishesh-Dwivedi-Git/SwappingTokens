
import './App.css';
import React from 'react';
import WalletConnection from './components/WalletConnection';
import DEX from './components/DEX';
import Navbar from './components/Navbar';
import TokenSwapForm from './components/TokenSwapForm'

function App() {

  return (
    <>
      <WalletConnection>
      <Navbar/>
      <DEX/>
      <TokenSwapForm/>
      </WalletConnection>
    </>
  )
}

export default App

