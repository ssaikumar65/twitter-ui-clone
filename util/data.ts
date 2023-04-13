import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser, FaHashtag } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BsFillBookmarksFill, BsTwitter } from "react-icons/bs";
import { IconType } from "react-icons/lib/esm/iconBase";

export type MenuProps = {
  label: string;
  path: string;
  Icon: IconType;
};
export const menuItems: MenuProps[] = [
  {
    label: "Home",
    path: "/",
    Icon: BsHouseFill,
  },
  {
    label: "Explore",
    path: "/explore",
    Icon: FaHashtag,
  },
  {
    label: "Notifications",
    path: "/notifications",
    Icon: BsBellFill,
  },
  {
    label: "Messages",
    path: "/messages",
    Icon: MdOutlineMail,
  },
  {
    label: "Bookmarks",
    path: "/bookmarks",
    Icon: BsFillBookmarksFill,
  },
  {
    label: "Twitter Blue",
    path: "/blue",
    Icon: BsTwitter,
  },
  {
    label: "Profile",
    path: "/profile",
    Icon: FaUser,
  },
];

const convertNumber = (val: number) => {
  return Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(val);
};
export type TrendingProps = {
  loc: string;
  hashtag: string;
  tweetCount: string;
};
export const trendingItems: TrendingProps[] = [
  {
    loc: "Trending in India",
    hashtag: "#earthquake",
    tweetCount: convertNumber(9247),
  },
  {
    loc: "Sports . Trending",
    hashtag: "IPL",
    tweetCount: convertNumber(223445),
  },
  {
    loc: "Sports . Trending",
    hashtag: "Rohit",
    tweetCount: convertNumber(112223),
  },
  {
    loc: "Entertainment . Trending",
    hashtag: "Jawan",
    tweetCount: convertNumber(11234),
  },
];

export type FollowProps = {
  image: string;
  name: string;
  username: string;
};
export const followItems: FollowProps[] = [
  {
    image: "",
    name: "Ram Charan",
    username: "@AlwaysRamCharan",
  },
  {
    image: "",
    name: "Rahul Gandhi",
    username: "@RahulGandhi",
  },
];
export type TweetProps = {
  name: string;
  username: string;
  profileImage: string;
  image?: string;
  content: string;
  likes: string;
  comments: string;
  views: string;
  time: string;
};
export const tweetItems: TweetProps[] = [
  {
    name: "User 1",
    username: "user1",
    profileImage: "",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    likes: convertNumber(144234),
    comments: convertNumber(1234),
    views: convertNumber(211234),
    time: new Date().toLocaleDateString(),
  },
  {
    name: "User 2",
    username: "user2",
    profileImage: "",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    likes: convertNumber(164234),
    comments: convertNumber(7234),
    views: convertNumber(251234),
    time: new Date().toLocaleDateString(),
  },
  {
    name: "User 3",
    username: "user3",
    profileImage: "",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    likes: convertNumber(184234),
    comments: convertNumber(3234),
    views: convertNumber(231234),
    time: new Date().toLocaleDateString(),
  },
  {
    name: "User 4",
    username: "user4",
    profileImage: "",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    likes: convertNumber(154234),
    comments: convertNumber(2234),
    views: convertNumber(281234),
    time: new Date().toLocaleDateString(),
  },
];
