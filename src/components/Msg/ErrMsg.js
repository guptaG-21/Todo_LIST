import React from "react";
import { ImSpinner9 } from "react-icons/im";
import {motion} from "framer-motion";
const ErrMsg = ({ errorMsg }) => {
  return (
    <motion.div 
    initial={{y:-20, opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{
        y:{type:"spring", stiffness:120}
    }}

     className='absolute tracking-wider left-[10%] top-2 border-b-red-600 border-b-[6px] md:top-4 md:left-[40%] text-lg bg-blue-100  px-4 py-2 text-red-500  '>
      <p className='flex gap-4 items-center'>
        <span className='text-xl animate-spin'>
          <ImSpinner9 />
        </span>
        {errorMsg}
      </p>
    </motion.div>
  );
};

export default ErrMsg;
