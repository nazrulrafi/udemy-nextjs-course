import React from 'react';
import NewsList from "@/components/news-list";
import {getLatestNews} from "@/lib/news";

function LatestNewsPage(props) {
    const latestNews = getLatestNews();
    return (
        <>
            <h2>Latest page</h2>
            <NewsList news={latestNews} />
        </>
    );
}

export default LatestNewsPage;