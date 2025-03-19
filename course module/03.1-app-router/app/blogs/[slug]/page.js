// app/blogs/[slug]/page.jsx

"use client";  // Add this directive to make the component client-side

import { useRouter } from 'next/navigation';  // Import from next/navigation
import Head from 'next/head';
import Image from "next/image";
import { BlogData } from "@/BlogData";

export default function BlogPost({ params }) {
    const { slug } = params;

    // Find the post that matches the slug
    const post = BlogData.find((p) => p.slug === slug);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="text-center text-primary">{post.title}</h1>
                        <div className="card mb-4">
                            <Image
                                src={post.imageUrl}
                                alt={post.title}
                                width={1200}
                                height={675}
                                layout="responsive"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <p className="card-text">{post.content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>

            </div>
        </>
    );
}
