import React from "react";

function About() {
  return (
    <div
      className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl
    text-black"
    >
      <h1 className='font-["Neue_Montreal"] text-[4vw] leading-1 tracking-tight'>
        Ochi is a strategic partener for fast-growing tech business that need to
        raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="flex justify-between items-center w-full border-t-[1px] pt-10 mt-20 border-[#879a43]">
        <div className="w-1/2 ">
          <h1 className="text-7xl ">Out approach:</h1>
          <button className="flex uppercase gap-10 items-center px-8 py-6 bg-zinc-900 mt-10 text-white rounded-full">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] ">
            <img className="w-full h-full rounded-3xl overflow-hidden" 
            src="src\assets\Homepage-Photo.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
