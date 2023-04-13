import { menuItems } from "@/util/data";
import { BsTwitter, BsThreeDots } from "react-icons/bs";
import { BiMessageSquareAdd } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import Button from "../Button";

const LeftSidebar = () => {
  return (
    <div className=" sticky top-[0px] flex sm:w-2/12 md:w-3/12 justify-end">
      <div className=" flex flex-col w-full lg:w-[275px] items-center md:items-start justify-between px-2 py-3 h-screen overflow-hidden">
        <div className=" flex items-center justify-center sm:justify-end lg:justify-start p-1 w-full">
          <BsTwitter
            className=" w-12 h-12 p-2 rounded-full hover:bg-zinc-800 cursor-pointer"
            size={20}
          />
        </div>
        <div className=" flex flex-col gap-4 w-full">
          <div className=" flex flex-col gap-2">
            {menuItems.map((item, index) => (
              <Button key={index} item={item} />
            ))}
          </div>
          <div className="hidden lg:grid py-3 px-4 bg-sky-600 rounded-full hover:bg-sky-700 cursor-pointer text-lg font-semibold  place-items-center">
            Tweet
          </div>
          <div className="grid lg:hidden p-2 justify-center sm:justify-end lg:justify-start rounded-full place-items-center">
            <BiMessageSquareAdd
              className=" w-12 h-12 p-2 bg-sky-600 rounded-full hover:bg-sky-700 cursor-pointer"
              size={20}
            />
          </div>
        </div>
        <div className=" flex p-2 gap-3 rounded-full justify-center sm:justify-end lg:justify-start  w-full lg:hover:bg-zinc-800 cursor-pointer">
          <div className=" flex items-center p-1 ">
            <FaUser
              className=" w-10 h-10 p-2 rounded-full hover:bg-zinc-800 cursor-pointer"
              size={25}
            />
          </div>
          <div className="hidden lg:flex flex-col flex-auto ">
            <span className=" font-semibold">theLoneWolf</span>
            <span className=" text-zinc-600">@___theLoneWolf</span>
          </div>
          <div className=" w-12 h-12  rounded-full hidden lg:grid place-items-center">
            <BsThreeDots />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftSidebar;
