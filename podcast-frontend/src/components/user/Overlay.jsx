import React from "react";

const Overlay = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600"
        >
          &times;
        </button>
        <div className="text-center">
          <h2 className="text-2xl mb-4">Upload Image</h2>
          <form action="upload" method="post" encType="multipart/form-data">
            <input type="file" name="image" className="mb-4" />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
