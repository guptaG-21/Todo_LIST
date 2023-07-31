import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import ErrMsg from "./Msg/ErrMsg";
import { options } from "./json";
import { GrDown } from "react-icons/gr";
import { motion } from "framer-motion";
import List from "./List";
import { addTodo, deleteAllTodos } from "./todoStore/TodoSlice";
import Success from "./Success/Success";
import Footer from "./Footer";

const PageLoad = () => {
  const dispatch = useDispatch();
  const todoItem = useSelector((state) => state.todos.todoList);
  const [todoValue, setTodoValue] = useState("");
  const [errorMsg, setErrorMsg] = useState();
  const [showErr, setShowErr] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showRemove, setShowRemove] = useState(false);
  const [showSuccess, setShowSuccess] = useState("");
  const [category, setCategory] = useState("");

  //main button functioning
  //all the errors and added todo will happen here
  const handleClick = (e) => {
    if (todoValue === "") {
      setErrorMsg("Please enter your todo first");
      setShowErr(true);
      setSuccess(false);
      // console.log(error);
      console.log(errorMsg);
    } else if (category === "") {
      setErrorMsg("Select category first");
      setShowErr(true);
      setSuccess(false);
    } else if (category === "category") {
      setErrorMsg("Select a valid category");
      setShowErr(true);
      setSuccess(false);
    } else {
      dispatch(
        addTodo({
          _id: Math.random() * 10,
          todo: todoValue,
          category: category,
        })
      );
      setTodoValue("");
      setSuccess(true);
      setShowErr(false);
      setShowSuccess("Todo has added");
    }
  };
  //for setting time to goout the popups
  useEffect(() => {
    const timer = setTimeout(() => {
      showErr && setShowErr(false);
      success && setSuccess(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [showErr, success]);


  return (
    <main className='flex flex-col gap-6 md:w-[700px] w-[300px] bg-cyan-200 p-4 rounded-lg '>
      <div className='flex gap-4 md:gap-8 justify-center mt-5'>
        {showErr && <ErrMsg errorMsg={errorMsg} />}
        <input
          onChange={(e) => setTodoValue(e.target.value)}
          value={todoValue}
          className='md:w-[20rem] w-[10rem] p-[10px] rounded-lg active:border-orange-200 border-[2px] hover:border-orange-200 outline-none focus-visible:border-orange-400 '
          type='text'
          name=''
          id=''
          placeholder='Enter your todo..'
        />
        {/* category options */}
        <div className=''>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className='rounded-lg  p-[10px] w-[110px] outline-none border-[2px] hover:border-orange-200 focus-visible:border-orange-400 '
          >
            {options.map((item) => (
              <option key={item.id}>{item.title}</option>
            ))}
          </select>
        </div>
      </div>
      {/* add todo button  */}
      <div className='flex justify-center'>
        <button
          onClick={handleClick}
          className='text-black bg-blue-400 p-2  rounded-lg hover:opacity-80'
        >
          Add todos
        </button>
        {success && <Success successMsg={showSuccess} />}
      </div>
      <div className='flex flex-col gap-3  items-center'>
        <ul className='grid w-[250px] h-full md:w-[600px] grid-cols-1 gap-4 border border-gray-600 shadow-todoShadow mt-4 p-4'>
          {todoItem.length > 0 ? (
            <>
              {" "}
              {todoItem.map((item) => (
                <List key={item._id} todo={item.todo} _id={item._id} />
              ))}
            </>
          ) : (
            <p className='text-[13px] md:text-lg text-center font-sans font-semibold tracking-widest text-yellow-500 '>
              TODO is empty? Add TODO first!
            </p>
          )}
        </ul>
        {todoItem.length > 0 && (
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setShowRemove(true)}
            className=' w-[130px] p-2 rounded-lg border-[4px] border-orange-500 hover:border-red-500 text-orange-500 hover:text-red-500'
          >
            Remove All
          </motion.button>
        )}

        {/* Removing all the todos functionality  */}
        {showRemove && (
          <div className='w-full h-screen fixed backdrop-blur-[2px] top-0 left-0 bg-opacity-60 flex justify-center items-center '>
            <div className='w-[320px] h-[8rem] border-gray-600 border-[2px] rounded-lg'>
              <p className='text-red-500 p-4 font-semibold text-center'>
                Are You sure you want to delete all the todos?
              </p>
              <div className='flex gap-4 justify-center items-center'>
                <button
                  onClick={() =>
                    dispatch(deleteAllTodos()) & setShowRemove(false)
                  }
                  className='w-[50px] rounded-lg  p-1 border-red-500 border-[2px] hover:bg-red-500 hover:text-white hover:border-[0px]'
                >
                  Yes
                </button>
                <button
                  onClick={() => setShowRemove(false)}
                  className='w-[50px] rounded-lg  border-green-500 border-[2px] p-1 hover:bg-green-500 hover:text-white hover:border-[0px] '
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default PageLoad;
