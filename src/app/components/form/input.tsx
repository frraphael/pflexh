import React from "react";

interface btnProps {
  id?: string
  title?: string
  type: string
  value?:string
  onChange?:any
}

export default function Input(props : btnProps) {
  return (
    <>
      {props.type == "textarea" ? (
        <textarea
          className="p-2 rounded-lg w-full lg:p-4 md:rounded-xl md:w-[45vw] text-black"
          id={props.id}
          name={props.id}
          placeholder={props.title}
          onChange={props.onChange}
          rows={3}
          required
        ></textarea>
      ) : props.type == "submit" ? (
        <button
          className="
            w-full
            p-2
            text-center
            cursor-pointer 
            uppercase 
            flex 
            justify-center
            rounded-xl 
            border-2 border-white 
            font-black
            hover:bg-white 
            hover:text-red-700 
            md:w-[45vw] 
            lg:p-4 
          "
          type={props.type}
        >{props.title}</button>
      ) : (
        <input
          className="p-2 rounded-lg w-full lg:p-4 md:rounded-xl md:w-[45vw] text-black"
          type={props.id}
          id={props.id}
          name={props.id}
          placeholder={props.title}
          onChange={props.onChange}
          required
        />
      )}
    </>
  );
}
