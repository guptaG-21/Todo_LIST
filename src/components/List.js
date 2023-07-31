import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo } from "./todoStore/TodoSlice";



const List = ({todo,_id}) => {
  const [mark, setMark] = useState(false);
  const dispatch = useDispatch();


  return (
    <motion.li
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        y: { type: "spring", stiffness: 120 },
      }}
      onClick={() => setMark(!mark)}
      className={`${
        mark
          ? "border-l-orange-500 border-orange-500"
          : "border-l-green-500 border-green-500"
      } md:w-full font-serif font-medium text-base border-[1px] border-b-[6px] px-2 py-1 cursor-pointer flex items-center justify-between`}
    >
      {todo}
      <span className='hover:text-red-600 text-xl text-gray-400 cursor-pointer duration-300 '>
        <MdDeleteOutline onClick={()=>dispatch(deleteTodo(_id))} id={_id}  />
      </span>
    </motion.li>
  );
};

export default List;
