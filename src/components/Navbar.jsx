import React from 'react';
import '../App.css'
// Smooth scrolling function
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
};

const Navbar = () => {
  return (
    <div className="min-w-full  bg-black flex flex-col items-center justify-center space-y-20 mb-5">
      {/* Navbar */}
      <div className='flex flex-row justify-center  mt-4'>
        <div className='flex flex-row space-x-8'>
          <a onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition cursor-pointer">Home</a>
          <a onClick={() => scrollToSection('swap')} className="hover:text-blue-400 transition cursor-pointer">Swap</a>
          <a onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition cursor-pointer">About</a>
          <a onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition cursor-pointer">Contact</a>
        </div>
      </div>

     {/* Sparkling dots in the background */}
  <div className='absolute inset-0 overflow-hidden'>
    {/* Creating more sparkle dots */}
    {[...Array(30)].map((_, i) => (
      <span
        key={i}
        className='sparkle-dot'
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 1}s`, /* Random delay for natural sparkle */
        }}
      ></span>
    ))}
  </div>
      {/* Heading */}
      <div className='flex flex-col justify-center items-center space-y-10'>
      <div class="content">
        <h1 class="title">the swapX u want 
          <div class="aurora">
           <div class="aurora__item"></div>
            <div class="aurora__item"></div>
      <div class="aurora__item"></div>
      <div class="aurora__item"></div>
    </div>
  </h1>
  </div>
  <div className='mb-[20px]'>
  <WalletMultiButton
    className='wallet-adapter-button '
  />
  </div>
  </div>
    </div>
  );
};

export default Navbar;
