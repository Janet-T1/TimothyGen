import React from 'react';
import Link from 'next/link';
// import Home from '../page'
// import AboutUs from '../aboutus/page'
// import Events from '../events/page'

const Footer = () => {

        return (
            <div className=' bottom-0 absolute '>
                {/* parent container for the footer */}
                <div className='w-screen py-5 bg-teritary flex flex-col '>
                    {/* div parent for icons and page lists */}
                    
                    <ul className='flex text-primary justify-center gap-3'>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>TikTok</li>
                        <li>Youtube</li>
                    </ul>
                    <ul className='flex justify-center gap-3 mt-2 text-primary mb-4'>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='../aboutus'>Events</Link></li>
                        <li><Link href='../events'>About Us</Link></li>
                    </ul>
                    {/* div for copyright */}
                    <div className='bg-primary text-secondary p-1 w-screen text-center sm:text-sm text-xs fixed bottom-0'>
                        <p>&copy; Timothy Generation, All rights reserved. </p>
                    </div>
                </div>
            </div>
        );
    
}

export default Footer;
