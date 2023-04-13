import TweetAdd from "@/components/TweetAdd";
import TweetCard from "@/components/TweetCard";
import { tweetItems } from "@/util/data";

export default function Home() {
  return (
    <div className=" max-w-xl w-full lg:w-[600px] border-x-[1px] border-cyan-950 ">
      <div className="  sticky  backdrop-blur-md	z-[1] top-0 tracking-wide flex flex-col border-b border-cyan-950">
        <div className=" flex  items-start p-4 text-xl font-semibold cursor-pointer">
          Home
        </div>
        <div className=" flex ">
          <span className=" w-1/2 transition-all cursor-pointer py-4 grid place-items-center text-zinc-500 hover:bg-zinc-800 text-sm font-medium">
            For you
          </span>
          <span className=" w-1/2 transition-all cursor-pointer py-4 grid place-items-center text-zinc-500 hover:bg-zinc-800 text-sm font-medium">
            Following
          </span>
        </div>
      </div>
      <TweetAdd />
      {tweetItems.map((item, index) => (
        <TweetCard item={item} key={index} />
      ))}
    </div>
  );
}
