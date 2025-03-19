import React from 'react';
import Link from "next/link";

function NewsList({news}) {
    return (
        <ul className="news-list">
            {news.map(newsItem => (
                <li key={newsItem.id}>
                    <Link href={`/revision/04-routing-and-page-rendering/app/(content)/news/${newsItem.slug}`}>
                        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                        <span>{newsItem.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default NewsList;