import React from "react";

export default function Music() {
  return (
    <>
      <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center">

        <div class="max-w-xl bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&h=250&q=80"
              class="object-cover"
            />
            <div class="absolute p-4 inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-gray-900 backdrop backdrop-blur-5 text-white">
              <h3 class="font-bold">Super Artist</h3>
              <span class="opacity-70">Albumtitle</span>
            </div>
          </div>
          <div>
            <div class="relative h-1 bg-gray-200">
              <div class="absolute h-full w-1/2 bg-green-500 flex items-center justify-end">
                <div class="rounded-full w-3 h-3 bg-white shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
