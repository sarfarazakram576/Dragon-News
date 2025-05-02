import React from 'react';
import { GoArrowLeft } from "react-icons/go";
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    return (
        <div className='p-6 space-y-6 border rounded-md border-base-300'>
            <img src={news.thumbnail_url} alt="" className='w-full rounded-md' />
            <h2 className='font-bold text-xl'>{news.title}</h2>
            <p><small>{news.details}</small></p>
           <Link to={`/category/${news.category_id}`}> <button className='btn btn-secondary mt-10 flex gap-2 items-center'><GoArrowLeft size={18} /> All news in this category</button></Link>
        </div>
    );
};

export default NewsDetailsCard;