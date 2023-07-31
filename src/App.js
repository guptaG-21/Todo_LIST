import React from "react";
import PageLoad from "./components/PageLoad";
import Containner from "./components/CategoriesContainner/Containner";
function App() {
  return (
    <div className='flex flex-col items-center'>
      <div className="top-5 relative">
        <Containner />
      </div>
      <div className='flex md:mt-[5%] mt-[20%] justify-center '>
        <PageLoad />
      </div>
    </div>
  );
}

export default App;
