import React from 'react';
import Link from 'next/link';
function MainNav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container">
                <Link href="/" className="navbar-brand pb-0">
                    <img
                        src="/next.svg"
                        alt="Logo"
                        width="100"
                        className="d-inline-block align-top"
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link href="/blogs" className="nav-link">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default MainNav;