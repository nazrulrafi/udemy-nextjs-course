'use client'
import React from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";
import classes from "./navLink.module.css";

function NavLink({href, children}) {
    const path = usePathname()
    return (
       <Link
           href={href}
            className={path.startsWith(href)?`${classes.active} ${classes.link}` : classes.link}
       >
           {children}
       </Link>
    );
}

export default NavLink;