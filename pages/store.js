import Head from "next/head"
import { useState } from "react"
import Image from 'next/image'
import Link from 'next/link';

import bag1 from "../img/dsadasdas.png"
import bag2 from "../img/icons11.png"
import bag3 from "../img/icons22.png"

const Store = () =>{

    return    ( <>
    <Head>
      <title>Store</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>

      <div className="container store">
                <div className="inner_container">
                <div className="inner_nav">
                            <span><Link href="/">Home</Link>  &gt; </span>
                            <span> </span>
                            <span><Link href="/store">Store</Link> </span>
                </div>
                <a href="https://mohamedsadiq.gumroad.com/l/iconsii" target="_blink">
                <div  className="blocks_aes">
                      <div className="">
                        <div className="img_aes">
                        <Image
                            src={bag3}
                            alt="Picture of the author"
                            objectFit='cover'
                            layout='fill'

                            placeholder="blur"
                            quality={100}
                            />
               
                        </div>
                      </div>
                     <div className="dec_aes store_des"> 
                        <h1>Icons II</h1>
                        <span>$4.00</span>
                        <p>Enhance your website with visually appealing icons, I&apos;ve created a unique set of icons for my website, and now the icons are available for purchase. Upgrade your web pages today with these sleek and modern icons.</p>
                        {/* <span>
                            <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.10675 7.13995C9.3289 7.3621 9.3215 7.71279 9.08751 7.91649L6.75277 9.95844C6.51879 10.1621 6.14788 10.1493 5.92573 9.92717C5.70358 9.70502 5.69077 9.33412 5.89447 9.10013L7.93641 6.7654C8.14011 6.53141 8.4908 6.52401 8.71295 6.74616L9.10675 7.13995Z" fill="white"/>
                            <path d="M6.91471 6.16017C6.69638 5.94183 6.76614 5.7629 7.08412 5.76253L9.52835 5.75962C9.83634 5.75925 10.0894 6.01234 10.0891 6.32034L10.0862 8.7745C10.0858 9.0825 9.90685 9.16225 9.68851 8.94391L6.90968 6.16508L6.91471 6.16017Z" fill="white"/>
                            <circle cx="8" cy="8" r="7.5" stroke="white"/>
                            </svg>
                        </span> */}
                          <a href="https://mohamedsadiq.gumroad.com/l/iconsii" target="_blink">
                        <button className="store_button">
                        
                            Get it
                        
                        </button>
                        </a>
                     </div>
                  </div>
                  </a>
                </div>
                
            </div>
        </main>
        </>
        )
}

export default Store