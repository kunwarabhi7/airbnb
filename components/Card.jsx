import Image from "next/image";
import { BiRupee } from "react-icons/bi";
import { AiOutlineHeart, AiTwotoneStar } from "react-icons/ai";

const Card = ({ desc, locaton, img, price, star, title, total }) => {
  return (
    <div className="flex flex-col   cursor-pointer  md:flex-row items-center justify-between my-4 shadow-lg lg-[350px] lg:w-[880px] max-w-6xl  mx-auto">
      <div className="relative w-64  md:w-96 h-48">
        <Image
          objectFit="cover"
          className="rounded-2xl ease-in-out delay-150  hover:-translate-y-1 hover:scale-105"
          fill
          src={img}
        />
      </div>
      <div className="w-[420px]">
        <div className="flex justify-around items-center my-2">
          <h1 >{desc}</h1>
          <AiOutlineHeart />
        </div>
        <p className="text-red-600 font-serif text-center">{locaton}</p>
        <h1 className="text-xl font-semibold text-cyan-500">{title}</h1>
        <div className="flex items-center justify-end mr-2 font-semibold">
          <p className="flex items-center">
            {price}
            <BiRupee size={20} />
            /night
          </p>
        </div>

        <p className="flex items-center justify-end mr-2 text-gray-400">
          {total}
          <BiRupee />
        </p>
        <p className=" font-bold flex items-center p-2 justify-start ">
          {star}
          <AiTwotoneStar className="text-yellow-500" size={25}/>
        </p>
      </div>
    </div>
  );
};

export default Card;
