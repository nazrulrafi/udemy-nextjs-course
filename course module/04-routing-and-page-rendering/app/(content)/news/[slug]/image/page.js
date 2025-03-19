import React from 'react';
import {DUMMY_NEWS} from "@/dummy-news";
import {notFound} from "next/navigation";

function ImagePage({params}) {
    const newsImgSlug = params.slug;
    const newsItem = DUMMY_NEWS.find((newsItem)=>newsItem.slug === newsImgSlug);

    if (!newsItem) {
        notFound()
    }
    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt=""/>
        </div>
    );
}

export default ImagePage;