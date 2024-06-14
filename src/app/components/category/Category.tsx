import React from "react";

export default function Category({ children }: any) {
  return (
    <div className="bg-red-900 drop-shadow-lg w-14 h-14 flex justify-center items-center rounded-br-md md:rounded-br-2xl">
      {children}
    </div>
  );
}
