import { followItems, trendingItems } from "@/util/data";
import { MdSearch } from "react-icons/md";
import { FollowItem } from "../FollowItem";
import { TrendingItem } from "../TrendingItem";

const RightSidebar = () => {
  return (
    <div className=" hidden lg:flex sticky top-[-250px] flex-col items-start gap-6 p-3 w-[375px] h-full">
      <div className="p-1 sticky top-0 w-full z-10 shadow-sm shadow-black overflow-hidden bg-black">
        <div className=" flex items-center p-2 gap-2 bg-zinc-800 rounded-full hover:bg-zinc-800 cursor-pointer">
          <MdSearch
            className="p-1 rounded-full overflow-hidden hover:bg-zinc-700"
            size={30}
          />
          <input
            className=" bg-transparent flex-auto outline-none"
            placeholder="Search Twitter"
          />
        </div>
      </div>
      <div className=" flex flex-col w-full bg-zinc-900 rounded-lg overflow-hidden">
        <span className=" text-xl font-bold py-3 px-4 hover:bg-zinc-800 cursor-pointer ">
          What is happening
        </span>
        <div className=" flex flex-col gap-2">
          {trendingItems.map((item, index) => (
            <TrendingItem key={index} item={item} />
          ))}
        </div>
        <span className=" text-sky-500 py-3 px-4 hover:bg-zinc-800 cursor-pointer ">
          Show More
        </span>
      </div>
      <div className=" flex flex-col w-full bg-zinc-900 rounded-lg overflow-hidden">
        <span className=" text-xl font-bold py-3 px-4 hover:bg-zinc-800 cursor-pointer ">
          Who to follow
        </span>
        <div className=" flex flex-col gap-2">
          {followItems.map((item, index) => (
            <FollowItem key={index} item={item} />
          ))}
        </div>
        <span className=" text-sky-500 py-3 px-4 hover:bg-zinc-800 cursor-pointer ">
          Show More
        </span>
      </div>
      <div className=" flex gap-2 flex-wrap w-full text-xs text-zinc-500 py-4 px-3">
        <span className=" hover:underline cursor-pointer">
          Terms of Service
        </span>
        <span className=" hover:underline cursor-pointer">Privacy Policy</span>
        <span className=" hover:underline cursor-pointer">Cookie Policy</span>
        <span className=" hover:underline cursor-pointer">Accessibility</span>
        <span className=" hover:underline cursor-pointer">Ads Info</span>
        <span className=" hover:underline cursor-pointer">More ...</span>
        <span className=" hover:underline cursor-pointer">© 2023 SSK</span>
      </div>
    </div>
  );
};

export default RightSidebar;
