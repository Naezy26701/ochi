import { motion } from "framer-motion";
import React from "react";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.4" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker pb-3">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5}}
                    className="mr-1 rounded-md w-[9vw] h-[5.7vw] relative top-[6px]"
                  >
                    <img
                      className="w-full h-full overflow-hidden rounded-md"
                      src="src\assets\content-image01.jpg"
                      alt=""
                    />
                  </motion.div>
                )}

                <h1
                  className='uppercase leading-[6vw] tracking-tighter font-medium
                text-[7.5vw] font-["Founders Grotesk Condensed"]'
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="w-full border-t-[1px] border-zinc-700 mt-20 flex 
        justify-between items-center py-5 px-20"
      >
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}

        <div className="start flex items-center gap-2">
          <div
            className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase
           rounded-full"
          >
            start the project
          </div>

          <div className="w-8 h-8 flex items-center justify-center rounded-full border-[2px] border-zinc-500">
            ↗
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
