import Image from 'next/image';
import {BiRupee} from 'react-icons/bi'
import {BsStar} from 'react-icons/bs'
import { AiOutlineHeart} from 'react-icons/ai'

const Card = ({ desc, location, img,  price, star, title, total }) => {
  return (
   <div className='flex flex-col   cursor-pointer  md:flex-row items-center justify-between my-4 shadow-lg lg-[350px] lg:w-[880px] max-w-6xl  mx-auto'>
    <div className='relative w-64  md:w-96 h-48'>
        <Image objectFit='cover' className='rounded-2xl ease-in-out delay-150  hover:-translate-y-1 hover:scale-105' fill src={img} />
    </div>
    <div className='w-[420px] '>
        <div className='flex justify-around items-center'>
        <h1>{desc}</h1>
<AiOutlineHeart />
        </div>
        <h1>{title}</h1>
        <p>{star}</p>
        <p className='text-right'>{price}/night</p>
        <p>{total}</p>
    </div>
   </div>
  );
};

export default Card;