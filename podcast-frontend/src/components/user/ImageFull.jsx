import React from "react";

const ImageFull = ({ show, onClose, image, type }) => {
  if (!show) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50"
      onClick={onClose}
    >
      <div className="m-5 flex justify-end fixed top-0 left-0">
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
      </div>

      <div className="flex justify-center items-center h-full">
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
      </div>
    </div>
  );
};

export default ImageFull;
