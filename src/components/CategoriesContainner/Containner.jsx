import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import List from "../List";

const Containner = () => {
  const todoItem = useSelector((state) => state.todos.todoList);

  const [personalTodo, setPersonalTodo] = useState([]);
  const [businessTodo, setBusinessTodo] = useState([]);
  const [otherTodo, setOtherTodo] = useState([]);

  console.log(todoItem);
  //setting the state of buttons
  const [personal, setPersonal] = useState(false);
  const [business, setBusiness] = useState(false);
  const [other, setOther] = useState(false);

  useEffect(() => {
    const personalTodoData = todoItem.filter(
      (item) => item.category === "personal"
    );
    setPersonalTodo(personalTodoData);

    const businesslTodoData = todoItem.filter(
      (item) => item.category === "business"
    );
    setBusinessTodo(businesslTodoData);

    const othersTodoData = todoItem.filter(
      (item) => item.category === "others"
    );
    setOtherTodo(othersTodoData);
  }, [todoItem]);

  return (
    <div className='bg-blue-100 flex items-center justify-start p-5 h-[180px] md:w-[700px] w-[300px] rounded-lg gap-5 md:gap-4 '>
      <div className='md:w-1/6 w-1/3 h-full flex flex-col justify-center items-center'>
        <button
          onClick={() =>
            setPersonal(true) & setBusiness(false) & setOther(false)
          }
          className='w-[100px] border-[2px] py-1 border-green-400 flex justify-center items-center hover:text-green-500 cursor-pointer text-sm md:text-lg mb-2 rounded-lg'
        >
          Personal
        </button>
        <button
          onClick={() =>
            setPersonal(false) & setBusiness(true) & setOther(false)
          }
          className='w-[100px] border-[2px] py-1 border-green-400 flex justify-center items-center  hover:text-green-500 cursor-pointer text-sm md:text-lg mb-2 rounded-lg'
        >
          Business
        </button>
        <button
          onClick={() =>
            setPersonal(false) & setBusiness(false) & setOther(true)
          }
          className='w-[100px] border-[2px] py-1 border-green-400 flex justify-center items-center  hover:text-green-500 cursor-pointer text-sm md:text-lg mb-2 rounded-lg'
        >
          Others
        </button>
      </div>
      {/* all the todos category */}
      <div className='w-4/5 h-full overflow-y-scroll scrollbar-hide'>
        <p
          className={`${
            personal || business || other
              ? "hidden"
              : "md:text-lg text-sm font-semibold text-green-500 tracking-wider text-center"
          }`}
        >
          Select category to see todo
        </p>
        {personal && (
          <ul className=''>
            {personalTodo.length > 0 ? (
              <div className='flex flex-col gap-2'>
                {personalTodo.map((item) => (
                  <List todo={item.todo} _id={item._id} />
                ))}
              </div>
            ) : (
              <motion.li
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className=' font-semibold w-full h-full text-sm md:text-lg text-red-500 text-center  '
              >
                Personal list is Empty,add?
              </motion.li>
            )}
          </ul>
        )}

        {business && (
          <ul className='gap-2 p-2 '>
            {businessTodo.length > 0 ? (
              <div className='flex flex-col gap-2'>
                {businessTodo.map((item) => (
                  <List todo={item.todo} _id={item._id} />
                ))}
              </div>
            ) : (
              <motion.li
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='text-center font-semibold w-full h-full text-sm md:text-lg text-red-500'
              >
                Business list is Empty,add?
              </motion.li>
            )}
          </ul>
        )}

        {other && (
          <ul className='gap-2 p-2 '>
            {otherTodo.length > 0 ? (
              <div className='flex flex-col gap-2'>
                {otherTodo.map((item) => (
                  <List todo={item.todo} _id={item._id} />
                ))}
              </div>
            ) : (
              <motion.li
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='text-center font-semibold w-full h-full text-sm md:text-lg text-red-500'
              >
                Others list is Empty,add?
              </motion.li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Containner;
