import Image from "next/image";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function ProductsCard({ img, title, desc, rating, price }) {
  const generateRating = (rating) => {
    switch (rating) {
      case 1:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
        break;
      case 2:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
        break;
      case 3:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
        break;
      case 4:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
        break;
      case 5:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );
        break;

      default:
        break;
    }
  };
  return (
    <div className='px-4 border border-gray-200 rounded-xl max-w-[400px]'>
      <div className='w-full h-auto'>
        <Image src={img} width={200} height={300} alt={title} />
      </div>
      <div className='space-y-2 py-2'>
        <h2 className='text-accent font-medium uppercase'>{title}</h2>
        <p className='text-gray-500 max-w-[150px]'>{desc}</p>
        <div>{generateRating(rating)}</div>
        <div className='font-bold flex gap-4'>
          ${price}
          <del className='text-gray-500 font-normal'>
            ${parseInt(price) + 50}
          </del>
          .00
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
