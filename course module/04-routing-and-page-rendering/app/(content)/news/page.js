import React from 'react';
import Link from "next/link";
import {DUMMY_NEWS} from "@/dummy-news";

function NewsPage(props) {
    return (
        <>
            <h1>News Page</h1>
            <ul className="news-list">
                {DUMMY_NEWS.map((item, i) => (
                    <li key={item.id}>
                        <Link href={`/news/${item.slug}`}>
                            <img src={`/images/news/${item.image}`} alt={item.title} />
                            <span>{item.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default NewsPage;