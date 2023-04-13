"use client";
import { BsImage } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { GoSmiley } from "react-icons/go";
import { AiOutlineGif } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { useRef, useState } from "react";
import useAutosizeTextArea from "@/hooks/useAutoSizeTextArea";

const TweetAdd = () => {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, value);
  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;

    setValue(val);
  };

  return (
    <div className=" flex w-full bg-black border-b border-cyan-950">
      <div className=" flex p-4">
        <div className="w-12 h-12 rounded-full cursor-pointer hover:opacity-90 bg-zinc-600 grid place-items-center">
          <FaUser size={20} />
        </div>
      </div>
      <div className=" flex w-full py-2 pr-4 flex-col">
        <textarea
          onChange={handleChange}
          ref={textAreaRef}
          placeholder="What's happening?"
          className=" w-full h-8 resize-none bg-transparent text-lg text-white placeholder:text-zinc-600 outline-none"
        />
        <div className=" flex justify-between p-2 w-full">
          <div className="flex items-center text-sky-600 gap-6 text-lg">
            <BsImage className=" cursor-pointer" />
            <AiOutlineGif className=" cursor-pointer" />
            <GoSmiley className=" cursor-pointer" />
            <MdLocationOn className=" cursor-pointer" />
          </div>
          <div className="flex cursor-pointer hover:opacity-90 rounded-full px-4 py-1 bg-sky-600 text-lg">
            Tweet
          </div>
        </div>
      </div>
    </div>
  );
};
export default TweetAdd;
