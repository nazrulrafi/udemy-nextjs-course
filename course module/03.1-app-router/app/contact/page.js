import Head from 'next/head';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>
            <div className="mt-5">
                <h1 className="text-danger text-center">Contact Us</h1>
                <p className="text-center">Feel free to reach out to us anytime!</p>

                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h3>Our Office</h3>
                        <p><strong>Address:</strong> 1234 Street Name, City, Country</p>
                        <p><strong>Phone:</strong> +123 456 7890</p>
                        <p><strong>Email:</strong> contact@example.com</p>
                        <p><strong>Business Hours:</strong> Mon - Fri, 9AM - 5PM</p>
                    </div>
                    <div className="col-md-6">
                        <form className="p-4 border rounded shadow bg-light">
                            <div className="mb-3">
                                <label className="form-label">Your Name</label>
                                <input type="text" className="form-control" placeholder="Enter your name"/>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Your Email</label>
                                <input type="email" className="form-control" placeholder="Enter your email"/>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-100">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
