import React from "react";
import SideNav from "../partials/SideNav";

export default function Downloads() {
  return (
    <>
      <SideNav />
      <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#0f1014]">
        <p className='text-white font-roboto'>No downloads found.</p>
      </div>
    </>
  );
}
