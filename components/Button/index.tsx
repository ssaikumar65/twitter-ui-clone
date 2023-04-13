import { MenuProps } from "@/util/data";
const Button = ({ item }: { item: MenuProps }) => {
  return (
    <div className=" flex p-1 gap-3 justify-center sm:justify-end lg:justify-start rounded-full lg:hover:bg-zinc-800 cursor-pointer">
      <div className=" flex items-center justify-center sm:justify-end lg:justify-start p-1 ">
        <item.Icon
          className=" w-10 h-10 p-2 rounded-full hover:bg-zinc-800 cursor-pointer"
          size={20}
        />
      </div>
      <div className="hidden items-center lg:flex">
        <span className=" text-lg">{item.label}</span>
      </div>
    </div>
  );
};
export default Button;
