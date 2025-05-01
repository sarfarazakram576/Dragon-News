import React, { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router";
import NewsCard from "../../components/newsCard/NewsCard";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);
  const { id } = useParams();
  const newsData = useLoaderData();

  useEffect(() => {
    if (id === "0") {
      setCategoryNews(newsData);
    } else if (id === "1") {
      const filteredNews1 = newsData.filter(
        (news) => news.others.is_today_pick === true
      );
      setCategoryNews(filteredNews1);
    } else {
      const filteredNews = newsData.filter(
        (news) => news.category_id === parseInt(id)
      );
      setCategoryNews(filteredNews);
    }
  }, [id, newsData]);

  return (
    <div>
      <h2 className="mb-4 font-bold">Dragon News Home</h2>

      {categoryNews.length === 0 ? (
        <div className="mt-20">
          <h2 className="font-semibold text-2xl text-center">There is no News Found in this category</h2>
        </div>
      ) : (
        <div>
          {categoryNews.map((news) => (
            <NewsCard key={news.id} news={news}></NewsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryNews;
