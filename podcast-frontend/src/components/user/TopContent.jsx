import React from "react";

const TopContent = ({ user, toggleProfileImage, toggleCoverImage }) => {
  return (
    /*m-2 md:m-10 md:mt-2 md:mb-1 w-full md:w-11/12*/
    <div
      className="relative h-64 md:h-80 bg-gray-800 rounded-lg flex ml-50 mr-10"
      style={{ marginLeft: "150px" }}
    >
      <div className="relative w-full h-full">
        <img
          src={`${user.coverimage}`}
          alt={`cover image`}
          className="w-full h-full rounded-lg object-cover"
          onClick={() => {
            toggleCoverImage();
          }}
        />
        {user.coverimage === "N/A" && (
          <div className="z-0">
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
              Upload Cover Image
            </p>
            {/*<div className="absolute bottom-0 right-0">
              <svg
                fill="#000000"
                width="30px"
                height="30px"
                className="cursor-pointer"
                viewBox="0 0 24 24"
                id="edit-user"
                data-name="Line Color"
                xmlns="http://www.w3.org/2000/svg"
                class="icon line-color"
                style={{
                  margin: "15px",
                }}
                onClick={() => {
                  openOverlay();
                }}
              >
                <path
                  id="secondary"
                  d="M20.71,16.09,15.8,21H13V18.2l4.91-4.91a1,1,0,0,1,1.4,0l1.4,1.4A1,1,0,0,1,20.71,16.09Z"
                  style={{
                    fill: "none",
                    stroke: "rgb(44, 169, 188)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  }}
                ></path>
                <circle
                  id="primary"
                  cx="11"
                  cy="7"
                  r="4"
                  style={{
                    fill: "none",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  }}
                ></circle>
                <path
                  id="primary-2"
                  data-name="primary"
                  d="M11,15H8a5,5,0,0,0-5,5,1,1,0,0,0,1,1H9"
                  style={{
                    fill: "none",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  }}
                ></path>
              </svg>
            </div>*/}
          </div>
        )}
      </div>

      <div className="absolute bottom-[-4rem] left-5 w-24 h-24 lg:w-32 lg:h-32 bg-[#0f1014] rounded-full p-1">
        <img
          src={`${user.profileimage}`}
          alt={user.profileimage}
          className="w-full h-full rounded-full object-cover"
          onClick={() => {
            toggleProfileImage();
          }}
        />
        {/*{user.profileimage === "N/A" && (
          <div className="absolute bottom-2 left-10">
            <svg
              fill="#000000"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19,6.5H17.72l-.32-1a3,3,0,0,0-2.84-2H9.44A3,3,0,0,0,6.6,5.55l-.32,1H5a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-8A3,3,0,0,0,19,6.5Zm1,11a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1H7a1,1,0,0,0,1-.68l.54-1.64a1,1,0,0,1,.95-.68h5.12a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,17,8.5h2a1,1,0,0,1,1,1Zm-8-9a4,4,0,1,0,4,4A4,4,0,0,0,12,8.5Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14.5Z" />
            </svg>
          </div>
        )}*/}
      </div>
    </div>
  );
};

export default TopContent;
