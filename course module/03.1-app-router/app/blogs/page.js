// pages/blog/index.js
import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";
import { BlogData } from "@/BlogData";

export default function Blog() {
    return (
        <>
            <Head>
                <title>Our Blog</title>
            </Head>
            <div className="container mt-5">
                <h1 className="text-center text-primary">Welcome to Our Blog</h1>
                <div className="row">
                    {BlogData.map((post) => (
                        <div key={post.id} className="col-md-4 mb-4">
                            <div className="card">
                                <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    width={1200}
                                    height={675}
                                    layout="responsive"
                                    className="card-img-top"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.description}</p>
                                    <Link href={`/blogs/${post.slug}`} className="btn btn-primary">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
