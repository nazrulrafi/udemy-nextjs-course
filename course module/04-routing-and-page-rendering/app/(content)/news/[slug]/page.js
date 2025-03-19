import React from 'react';
import {DUMMY_NEWS} from "@/dummy-news";
import {notFound} from "next/navigation";
import Link from "next/link";

function NewsDetailsPage({params}) {
    const newsSlug= params.slug;
    const newsItem = DUMMY_NEWS.find(item => item.slug === newsSlug);
    if (!newsItem){
        notFound()
    }
    return (
        <article>
            <header>
                <Link href={`/news/${newsSlug}/image`}>
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
                </Link>

                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>
                {newsItem.content}
            </p>
        </article>
    );
}

export default NewsDetailsPage;