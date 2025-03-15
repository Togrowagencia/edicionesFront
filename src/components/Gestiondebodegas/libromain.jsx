/* eslint-disable no-unused-vars */
import React from 'react';

function Libromain() {
  return (
    <div className="w-[1024px] h-[260px] bg-cover relative flex items-center bg-[url('/images/fondolibromain.png')] bg-center mt-[20%]">
      <div className="w-[505px] h-[297px] flex mt-[-15%]">
        <img src="/images/libroflorida.png" alt="" className='libromain absolute ml-[210px]'/>
        <img src="/images/libroflorida.png" alt="" className='libromain2 ml-[240px] absolute'/>
        <img src="/images/libroflorida.png" alt="" className='libromain3 ml-[270px] absolute'/>
      </div>
       
    </div>
  )
}

export default Libromain;