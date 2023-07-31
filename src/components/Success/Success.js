import React from "react";
import { ImSpinner9 } from "react-icons/im";
import { motion } from "framer-motion";
const Success = ({ successMsg }) => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        y: { type: "spring", stiffness: 120 },
      }}
      className='absolute tracking-wider border-b-green-600 border-b-[6px] left-[25%] bottom-3 md:bottom-[5%] md:left-[45%] text-lg bg-blue-100  px-4 py-2 text-green-500 '
    >
      <p className='flex gap-4 items-center'>
        <span className='text-xl animate-spin'>
          <ImSpinner9 />
        </span>
        {successMsg}
      </p>
    </motion.div>
  );
};

export default Success;
