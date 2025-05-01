import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa6";
import { FaStar, FaRegStar } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const rating = Math.round(news.rating.number);
  const totalStars = 5;

  let stars = [];
  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} size={17} className="text-orange-500" />);
    } else {
      stars.push(<FaRegStar key={i} size={17} className="text-orange-500" />);
    }
  }
  return (
    <div className="rounded-md border overflow-hidden mb-6 border-gray-200">
      {/* top  */}
      <div className="flex justify-between p-3 items-center bg-base-200 mb-6">
        <div className="flex gap-4 items-center">
          <img
            src={news.author.img}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="space-y-1">
            <h4 className="font-semibold text-[12px]">{news.author.name}</h4>
            <p className="text-[10px]">
              {format(new Date(news.author.published_date), "yyyy-MM-dd , p")}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <CiBookmark size={20} />
          <CiShare2 size={20} />
        </div>
      </div>

      <div className="px-4">
        <div className="border-b-2 pb-4 border-base-300 mb-4">
          <h2 className="font-bold text-lg mb-4">{news.title}</h2>

          <img
            src={news.thumbnail_url}
            alt=""
            className="w-full rounded-md mb-4"
          />

          <p className="text-[13px] text-accent line-clamp-4">{news.details}</p>
          <p className="hover:underline font-semibold text-orange-500 text-[13px] mt-2 cursor-pointer">
            Read More
          </p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2 items-center">
            {stars} {news.rating.number}
          </div>
          <div className="flex gap-2 items-center">
            <FaEye size={17} /> {news.total_view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
