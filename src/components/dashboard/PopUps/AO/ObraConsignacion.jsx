/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';

const ObraPropia = () => {
  const [remision, setRemision] = useState('');
  const [retefuente, setRetefuente] = useState('');

  return (
    <div className='w-full h-[10%] flex items-center gap-2 justify-start px-4 -mt-[70px]'>

<div className="relative w-[316px] ml-[5px]">
        <input
          id="remision"
          className="p-2 peer w-full bg-white border border-[#000] rounded-[10px] h4 transition duration-300 ease focus:outline-none focus:border-green-600 h-[43px] pl-10"
          type="text"
          value={remision}
          onChange={(e) => setRemision(e.target.value)}
          placeholder=" "
        />
        <label
          htmlFor="remision"
          className={`absolute negro h4 cursor-text bg-white px-1 transition-all transform origin-left ${
            remision
              ? "-top-2 left-3 text-xs text-green-600 scale-75"
              : "top-3 left-10 text-sm text-slate-400"
          } peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-green-600 peer-focus:scale-75`}
        >
          Nº Remisión
        </label>
        <img
          src="/public/svg/popup-ao/numero.svg"
          alt=""
          className={`absolute bg-white left-3 top-1/2 -translate-y-1/2 transition-all transform ${
            remision ? "left-[calc(100%-28px)]" : "left-3"
          } peer-focus:left-[calc(100%-28px)]`}
        />
      </div>

      {/* Input Retefuente */}
      <div className="relative w-[316px] ml-[5px]">
        <input
          id="retefuente"
          className="p-2 peer w-full bg-white border border-[#000] rounded-[10px] h4 transition duration-300 ease focus:outline-none focus:border-green-600 h-[43px] pl-10"
          type="text"
          value={retefuente}
          onChange={(e) => setRetefuente(e.target.value)}
          placeholder=" "
        />
        <label
          htmlFor="retefuente"
          className={`absolute negro h4 cursor-text bg-white px-1 transition-all transform origin-left ${
            retefuente
              ? "-top-2 left-3 text-xs text-green-600 scale-75"
              : "top-3 left-10 text-sm text-slate-400"
          } peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-green-600 peer-focus:scale-75`}
        >
          Retefuente
        </label>
        <img
          src="/public/svg/popup-ao/retefuente.svg"
          alt=""
          className={`absolute bg-white left-3 top-1/2 -translate-y-1/2 transition-all transform ${
            retefuente ? "left-[calc(100%-28px)]" : "left-3"
          } peer-focus:left-[calc(100%-28px)]`}
        />
      </div>
    </div>
  );
};
export default ObraPropia;