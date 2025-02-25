import Head from 'next/head';
import Link from 'next/link';

export default function About() {
    return (
        <>
            <Head>
                <title>About Us</title>
            </Head>
            <div className=" mt-5">
                <h1 className="text-primary text-center">About Us</h1>
                <p className="lead text-center">
                    We are an awesome team building amazing Next.js apps with Bootstrap!
                </p>
                <div className="row align-items-center mt-5">
                    <div className="col-md-6">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <p>
                            Amet beatae expedita, fugit nulla optio possimus provident qui quos reiciendis rem repellat sit. Perferendis, quam voluptatem! Consectetur ducimus fugit ipsa nemo quos sint sunt unde?
                            Ad alias aperiam consectetur, cumque deserunt dicta dolorum eligendi molestias numquam odio officia quidem, ratione tenetur totam vero.
                        </p>
                    </div>
                    <div className="col-md-6 text-center">
                        <img
                            src="https://images.unsplash.com/photo-1738936339590-ea1fc8bd9732"
                            alt="About Us"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
