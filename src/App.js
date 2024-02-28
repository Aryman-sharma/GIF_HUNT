import logo from './logo.svg';
import './App.css';
import React from 'react';
import Random from './Components/Random';
import Tag from './Components/Tag';

function App() {
  return (
    <div className='flex w-full h-full flex-col background relative items-center' >
    <h1 class='bg-yellow-50 rounded-lg absolute mt-[40px] text-center text-3xl px-10 py-2 w-11/12 font-bold moving-text'>RANDOM GIFS</h1>
      <div className='flex flex-row gap-[25px] w-full justify-evenly '>
      <Random/>
      <Tag/>
      </div>
      

    </div>
  );
}

export default App;
