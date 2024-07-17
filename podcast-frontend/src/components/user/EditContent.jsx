import React, { useState } from "react";

const EditContent = ({ show, onClose, image, type }) => {
  if (!show) return null;

  const [formData, setFormData] = useState({
    name: "",
  });

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex justify-center"
      onClick={onClose}
    >
      <div
        className="w-[50%] bg-black rounded-lg m-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="m-5 flex justify-between">
          <svg
            className="h-10 w-10 text-white bg-black hover:bg-gray-500 rounded-full hover:bg-opacity-25 p-1 cursor-pointer"
            viewBox="-6 -6 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            preserveAspectRatio="xMinYMin"
            onClick={onClose}
          >
            <path d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z" />
          </svg>
          <p
            className="border-1 border-color-white border rounded-full p-1 pb-1 pl-4 pr-4 text-white font-semibold hover:bg-gray-500 hover:bg-opacity-25 cursor-pointer"
            //onClick={() => {
            //  toggleProfileEdit();
            //}}
          >
            Save
          </p>
        </div>

        <div className="m-5">
          
          <div className="relative mb-15">
            <div className="relative h-32 md:h-60 bg-gray-800 rounded-lg flex">
              <div className="relative w-full h-full">
                <img
                  src={`https://pbs.twimg.com/profile_banners/1596428723150258177/1711056055/1500x500`}
                  alt={`cover image`}
                  className="w-full h-full rounded-lg cursor-pointer"
                />

                <div className="z-0 absolute top-[40%] left-[40%] flex">
                  <svg
                    className="h-10 w-10 m-2 text-white bg-gray-600 hover:bg-gray-500 rounded-full hover:bg-opacity-25 p-1 cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19,6.5H17.72l-.32-1a3,3,0,0,0-2.84-2H9.44A3,3,0,0,0,6.6,5.55l-.32,1H5a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-8A3,3,0,0,0,19,6.5Zm1,11a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1H7a1,1,0,0,0,1-.68l.54-1.64a1,1,0,0,1,.95-.68h5.12a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,17,8.5h2a1,1,0,0,1,1,1Zm-8-9a4,4,0,1,0,4,4A4,4,0,0,0,12,8.5Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14.5Z" />
                  </svg>
                  <svg
                    className="h-10 w-10 m-2 text-white bg-gray-600 hover:bg-gray-500 rounded-full hover:bg-opacity-25 p-1 cursor-pointer"
                    viewBox="-6 -6 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    preserveAspectRatio="xMinYMin"
                  >
                    <path d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[-2rem] left-5 w-24 h-24 lg:w-28 lg:h-28 bg-[#000] rounded-full p-1">
              <div className="relative">
                <img
                  src={`https://pbs.twimg.com/profile_images/1596428809934635008/dmkOOF8z_400x400.png`}
                  alt={"Profile"}
                  className="w-full h-full rounded-full object-cover cursor-pointer"
                />
                <svg
                  className="h-10 w-10 m-2 text-white bg-gray-500 bg-opacity-50 hover:bg-gray-500 rounded-full hover:bg-opacity-75 p-1 cursor-pointer absolute top-[28%] left-[22%]"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19,6.5H17.72l-.32-1a3,3,0,0,0-2.84-2H9.44A3,3,0,0,0,6.6,5.55l-.32,1H5a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-8A3,3,0,0,0,19,6.5Zm1,11a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1H7a1,1,0,0,0,1-.68l.54-1.64a1,1,0,0,1,.95-.68h5.12a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,17,8.5h2a1,1,0,0,1,1,1Zm-8-9a4,4,0,1,0,4,4A4,4,0,0,0,12,8.5Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14.5Z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="relative h-11 w-full min-w-[200px] my-10">
            <input
              placeholder="Enter name"
              value={formData.name}
              onChange={(e) => {
                setFormData({
                  name: e.target.value,
                });
              }}
              class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            />
            <label className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Enter name
            </label>
          </div>

          <div className="relative h-11 w-full min-w-[200px] my-10">
            <input
              placeholder="Enter description"
              //value={formData.name}
              //onChange={(e)=>{
              //  setFormData({
              //    name: e.target.value
              //  })
              //}}
              class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            />
            <label className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Enter description
            </label>
          </div>

          <div className="relative h-11 w-full min-w-[200px] my-10">
            <input
              placeholder="Enter channel name"
              //value={formData.name}
              //onChange={(e)=>{
              //  setFormData({
              //    name: e.target.value
              //  })
              //}}
              class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
            />
            <label className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Enter channel name
            </label>
          </div>
        </div>
      </div>

      {/*<div className="flex justify-center items-center h-full">
        {type === "profileImage" && (
          <img
            src={`${image}`}
            alt={`profile image`}
            className="w-50 h-50 rounded-full object-cover"
            onClick={(e) => e.stopPropagation()}
          />
        )}

        {type === "coverImage" && (
          <img
            src={`${image}`}
            alt={`cover image`}
            className="w-full h-auto rounded-lg object-cover"
            onClick={(e) => e.stopPropagation()}
          />
        )}
      </div>*/}
    </div>
  );
};

export default EditContent;
