import { FollowProps } from "@/util/data";
import { FaUser } from "react-icons/fa";

export const FollowItem = ({ item }: { item: FollowProps }) => {
  return (
    <div className=" flex items-center py-3 px-4 gap-3 hover:bg-zinc-800 cursor-pointer">
      <div className=" w-10 h-10 grid place-items-center rounded-full">
        <FaUser size={25} />
      </div>
      <div className=" text-sm flex flex-col flex-auto">
        <span className=" text-white font-semibold">{item.name}</span>
        <span className=" text-zinc-500 font-normal">{item.username}</span>
      </div>
      <div className="rounded-full px-5 py-2 grid place-items-center bg-white text-sm text-black font-bold">
        Follow
      </div>
    </div>
  );
};
