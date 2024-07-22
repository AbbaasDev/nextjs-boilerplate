import React from 'react';

const NotFound = () => {
  return (
    <div className="max-w-screen-lg py-10 lg:py-20 mx-auto w-full flex flex-col lg:flex-row items-center">
      <div className="flex justify-center items-center text-center flex-col mt-10 lg:mt-0 px-20">
        <h1 className="font-Gotham text-brand-black w-full md:w-[550px] pb-[32px]">404</h1>
        <p className="text-3xl">Page Not Found</p>
      </div>
    </div>
  );
};

export default NotFound;
