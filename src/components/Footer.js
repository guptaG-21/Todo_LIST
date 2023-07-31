import React from "react";
import {
  FiFacebook,
  FiYoutube,
  FiPhoneCall,
  FiInstagram,
  FiGithub,
  FiCamera,
} from "react-icons/fi";
const Footer = () => {
  return (
    < >
      <div className="flex flex-col gap-6 justify-center mt-4">
        <p className='text-gray-500  text-sm text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae illo
          asperiores mollitia temporibus voluptatem, nam magni labore? Ut quidem
          iusto sit quos, hic, sunt necessitatibus, optio minima harum
          architecto odit!
        </p>
        <div className='flex justify-center gap-4 md:gap-12 cursor-pointer text-2xl '>
          <div className='hover:text-orange-400'>
            <FiFacebook />
          </div>
          <div className='hover:text-orange-400'>
            <FiYoutube />
          </div>
          <div className='hover:text-orange-400'>
            <FiPhoneCall />
          </div>
          <div className='hover:text-orange-400'>
            <FiInstagram />
          </div>
          <div className='hover:text-orange-400'>
            <FiGithub />
          </div>
          <div className='hover:text-orange-400'>
            <FiCamera />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
