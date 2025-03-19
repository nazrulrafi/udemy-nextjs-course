import React from 'react';
import Link from "next/link";
import Image from 'next/image';  // Use next/image for optimized images
import logoImg from "@/assets/logo.png"; // Assuming you have the logo image at this path
import classes from "./main-header.module.css";
import NavLink from "@/components/navLink";

function MainHeader(props) {
    return (
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>
                <Image src={logoImg} alt="Logo"  /> {/* Adjust width and height */}
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li><NavLink href="/meals">Browse Meals</NavLink></li>
                    <li><NavLink href="/community">Community</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainHeader;
