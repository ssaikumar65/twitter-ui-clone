import { TweetProps } from "@/util/data";
import { BsFillHeartFill, BsThreeDots } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdComment, MdIosShare } from "react-icons/md";
import { ImStatsBars } from "react-icons/im";

const TweetCard = ({ item }: { item: TweetProps }) => {
  return (
    <div className=" flex w-full bg-black border-b border-cyan-950">
      <div className=" flex p-4">
        <div className="w-12 h-12 rounded-full cursor-pointer hover:opacity-90 bg-red-600 grid place-items-center">
          <FaUser size={20} />
        </div>
      </div>
      <div className=" flex w-full py-2 pr-4 flex-col">
        <div className=" flex relative items-center gap-2 py-2 w-full">
          <span className=" font-semibold">{item.name}</span>
          <span className=" text-zinc-500 text-sm font-normal">
            @{item.username}
          </span>
          <span className=" text-zinc-500 text-sm font-normal">
            {item.time}
          </span>
          <div className=" absolute top-1 cursor-pointer right-2 hover:text-sky-600 w-8 h-8 rounded-full grid place-items-center hover:bg-sky-900">
            <BsThreeDots size={20} />
          </div>
        </div>
        <span className=" flex w-full py-2 ">{item.content}</span>
        <div className=" flex justify-evenly py-2 w-full">
          <div className="flex items-center cursor-pointer hover:opacity-95 text-zinc-500 gap-2 text-sm">
            <MdComment />
            <span>{item.comments}</span>
          </div>
          <div className="flex items-center cursor-pointer hover:opacity-95 text-zinc-500 gap-2 text-sm">
            <BsFillHeartFill />
            <span>{item.likes}</span>
          </div>
          <div className="flex items-center cursor-pointer hover:opacity-95 text-zinc-500 gap-2 text-sm">
            <ImStatsBars />
            <span>{item.views}</span>
          </div>
          <div className="flex items-center cursor-pointer hover:opacity-95 text-zinc-500 gap-2 text-sm">
            <MdIosShare />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TweetCard;
