
import './App.css';
import React from 'react';
import WalletConnection from './components/WalletConnection';
import DEX from './components/DEX';
import Navbar from './components/Navbar';
import TokenSwapForm from './components/TokenSwapForm'
import Footer from './components/Footer';

function App() {

  return (
    <>
      <WalletConnection>
      <Navbar/>
      <DEX/>
      <TokenSwapForm/>
      <Footer/>
      </WalletConnection>
    </>
  )
}

export default App

