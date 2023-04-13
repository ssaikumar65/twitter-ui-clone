import { TrendingProps } from "@/util/data";
import { BsThreeDots } from "react-icons/bs";

export const TrendingItem = ({ item }: { item: TrendingProps }) => {
  return (
    <div className=" flex flex-col py-3 px-4 relative  text-xs text-zinc-500 hover:bg-zinc-800 cursor-pointer">
      <span className=" ">{item.loc}</span>
      <span className=" text-base text-white font-semibold">
        {item.hashtag}
      </span>
      <span className=" ">{item.tweetCount} Views</span>
      <div className=" absolute top-2 right-2 hover:text-sky-600 w-8 h-8 rounded-full grid place-items-center hover:bg-sky-900">
        <BsThreeDots size={20} />
      </div>
    </div>
  );
};
