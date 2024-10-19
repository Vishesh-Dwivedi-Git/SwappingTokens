import React from 'react'

const DEX = () => {
  return (
    <div className='flex flex-row justify-evenly mb-10'>
      <div className='max-w-lg ml-5 md:ml-20 p-6 bg-gradient-to-r from-gray-800 via-slate-900 to-black rounded-xl shadow-2xl border border-gray-700 text-white hover:scale-105 transition-transform duration-300 ease-in-out'>
  <h1 className='text-2xl font-extrabold text-indigo-400 mb-4'>Decentralized Exchange (DEX)</h1>
  
  <p className='text-base mb-4'>
    <strong className='text-indigo-300'>Swapping:</strong> Exchanging one cryptocurrency for another.
  </p>

  <p className='text-lg font-semibold text-indigo-300 mb-2'>Key Points:</p>
  <ul className='list-disc list-inside space-y-2 mb-4'>
    <li>Direct trades between users.</li>
    <li>Can occur on DEXs or other platforms.</li>
    <li>Users maintain control of their funds.</li>
  </ul>

  <p className='text-lg font-semibold text-indigo-300 mb-2'>Key Features:</p>
  <ul className='list-disc list-inside space-y-2 mb-4'>
    <li>User-controlled funds and private keys.</li>
    <li>Utilizes liquidity pools for efficient swaps.</li>
    <li>Prices determined by Automated Market Makers (AMMs).</li>
  </ul>
</div>

<div className='flex items-center justify-center p-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black rounded-2xl shadow-xl'>
  <video 
    className='rounded-lg shadow-lg border-2 border-indigo-500 hover:scale-105 transition-transform duration-300 ease-in-out' 
    width="500" 
    height="500" 
    autoPlay 
    loop 
    muted
  >
    <source src="src/assets/The girl is working on her laptop.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

    </div>
  )
}

export default DEX
