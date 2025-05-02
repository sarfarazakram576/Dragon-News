import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = ({ newsData }) => {
  const filterdData = newsData.filter((news) => news.others.is_today_pick);
  return (
    <div className="mt-8 bg-base-200 py-3 px-4 flex gap-6 items-center">
      <p className="bg-secondary px-4 py-2 text-white">Latest</p>

      <Marquee delay={1} speed={60} pauseOnHover={true}>
        <div className="flex gap-6">
          {filterdData.map((news) => (
            <p key={news.id} className="font-bold">
              {news.title}
            </p>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default LatestNews;
