import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import RightAside from "../../components/RightAside/RightAside";
import NewsDetailsCard from "../../components/newsDetailsCard/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetailsPage = () => {
  const newsData = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const foundedData = newsData.find((news) => news.id === id);
    setNews(foundedData);
    window.scrollTo({
        top: 150,
        left: 0,
        behavior: "smooth"
      });
  }, [id, newsData]);

  return (
    <div className="md:container mx-auto">
      <div>
        <Header></Header>
      </div>
      <div className="grid grid-cols-12 gap-8 mt-16">
        <div className="col-span-9">
          <h2 className="font-bold mb-4">Dragon News</h2>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </div>
        <div className="col-span-3">
          <RightAside></RightAside>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
