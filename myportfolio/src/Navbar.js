import React from 'react'




export default function Navbar() {
    return (
        <nav className='nav'>
            <a href='/home' className='site-title'>Title</a>
            <ul>
                <li ><a href='/home'>About Me</a></li>
                <li><a href='/projects'>Projects</a></li>
            </ul>
        </nav>
    )
}


