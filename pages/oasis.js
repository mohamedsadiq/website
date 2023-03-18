import Head from 'next/head'
import Link from 'next/link';
import { useState, useEffect } from "react"
import Image from 'next/image'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module

// import video1 from "../img/20190722_142740.mp4";
// import Videos from "../img/20190722_142740.mp4";
import unsplashIcon from "../img/unsplashicon.svg"
import represent from "../img/represent.png"
import sea_hands from "../img/mohamed-sadiq-EXhpMHDc-Sg-unsplash.jpg"

import book1 from "../img/../img/Rectangle 256.png"
import book2 from "../img/../img/Rectangle 257.png"
import book3 from "../img/../img/download.jpeg"
import thenetworkstate from "../img/network.png"
import flagraent from "../img/flagretn.png"
import lamar from "../img/lamar.gif"
import networkgif from  "../img/networkpodacst.gif"
import flagraentss from  "../img/ezgif.com-video-to-gif (1).gif"
import dribbn from "../img/dribble.gif"

// Icons
import obs from "../img/obsidian-software-seeklogo.com 3.svg"
import lin from "../img/linear-logos-id0tTqetsg.svg"
import arc from "../img/image 9.png"
import codevs from "../img/image 10.png"

import figma from "../img/dailyUse/figma.svg"
import vscode from "../img/dailyUse/vscode.svg"
import appleMuisc from "../img/dailyUse/appleMuisc.svg"
import obsidian from "../img/dailyUse/obsidian.svg"
import linear from "../img/dailyUse/linear.svg"
// import arc from "../img/dailyUse/arc.svg"
import spoitfy from "../img/dailyUse/spoitfy.svg"

import React from 'react';
const Taste = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <>
            <Head>
                <title>Oasis</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <div className="inner_container inner_teste ">
                    <div className="flex-container flex-container-level1">
                        <div className="item1">
                            <div className="unsplash">
                                <div ref={sliderRef} className="keen-slider container">
                                    <div className="unsplash_img keen-slider__slide unsplash_img1">
                                        <video muted={true} autoPlay={true} loop src={"/20190722_144602_1.mp4"} style={{ width: "100%", height: "100%" }} />

                                    </div>
                                    <div className="unsplash_img keen-slider__slide unsplash_img2"></div>
                                    <div className="unsplash_img keen-slider__slide unsplash_img3">
                                        <Image
                                            src={sea_hands}
                                            alt="Picture of the author"
                                            objectFit='cover'
                                            layout='fill'
                                            objectPosition="center"
                                            quality={100}
                                            placeholder="blur"
                                        />
                                    </div>
                                    <div className="unsplash_img keen-slider__slide unsplash_img4"></div>
                                    <div className="unsplash_img keen-slider__slide unsplash_img5"></div>
                                    <div className="unsplash_img keen-slider__slide unsplash_img6"></div>

                                    <a href="https://unsplash.com/@mohamed_sadiq" target="_blink">
                                        <div className="unsplash_icon">
                                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title /><path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z" /></svg>
                                        </div>
                                    </a>

                                </div>
                                <Link href="/taste/photo">
                                    <div className="arrow_taste">

                                        <svg width="20" height="19" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.2212 8.36184C14.8828 9.02338 14.8607 10.0677 14.1639 10.6743L7.21132 16.755C6.51453 17.3616 5.41001 17.3234 4.74846 16.6619C4.08692 16.0004 4.04877 14.8958 4.65536 14.199L10.7361 7.24645C11.3427 6.54966 12.387 6.52761 13.0485 7.18915L14.2212 8.36184Z" fill="black" />
                                            <path d="M7.68967 5.44415C7.03948 4.79396 7.24723 4.26113 8.19415 4.26L15.4728 4.25135C16.39 4.25026 17.1437 5.00394 17.1426 5.92112L17.1339 13.2294C17.1328 14.1465 16.5999 14.384 15.9497 13.7338L7.67467 5.45878L7.68967 5.44415Z" fill="black" />
                                        </svg>

                                    </div>
                                </Link>
                                {loaded && instanceRef.current && (
                                    <div className="dots_slide">
                                        {[
                                            ...Array(instanceRef.current.track.details.slides.length).keys(),
                                        ].map((idx) => {
                                            return (
                                                <button
                                                    key={idx}
                                                    onClick={() => {
                                                        instanceRef.current?.moveToIdx(idx)
                                                    }}
                                                    className={"dot_slide" + (currentSlide === idx ? " active" : "")}
                                                ></button>
                                            )
                                        })}
                                    </div>
                                )}

                                {loaded && instanceRef.current && (
                                    <>
                                        <Arrow
                                            left
                                            onClick={(e) =>
                                                e.stopPropagation() || instanceRef.current?.prev()
                                            }
                                            disabled={currentSlide === 0}
                                        />

                                        <Arrow
                                            onClick={(e) =>
                                                e.stopPropagation() || instanceRef.current?.next()
                                            }
                                            disabled={
                                                currentSlide ===
                                                instanceRef.current.track.details.slides.length - 1
                                            }
                                        />
                                    </>
                                )}
                            </div>

                        </div>
                        <div className="item2">
                            <div className="goods item_elements">
                                <Image
                                   className="represent"
                                    src={represent}
                                    alt="Picture of the author"
                                    objectFit='cover'
                                    layout='fill'
                                    objectPosition="center"
                                    quality={100}
                                    placeholder="blur"
                                />
                                 <Image
                                    src={lamar}
                                    className="lamar"
                                    alt="Picture of the author"
                                    objectFit='cover'
                                    layout='fill'
                                   
                                    quality={100}
                                    
                                />
                                
                                <div className="goods_inner">
                                    <h2>Aesthetic</h2>
                                </div>
                                <Link href="/taste/aesthetic" >
                                    <div className="arrow_taste">

                                        <svg width="20" height="19" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.2212 8.36184C14.8828 9.02338 14.8607 10.0677 14.1639 10.6743L7.21132 16.755C6.51453 17.3616 5.41001 17.3234 4.74846 16.6619C4.08692 16.0004 4.04877 14.8958 4.65536 14.199L10.7361 7.24645C11.3427 6.54966 12.387 6.52761 13.0485 7.18915L14.2212 8.36184Z" fill="black" />
                                            <path d="M7.68967 5.44415C7.03948 4.79396 7.24723 4.26113 8.19415 4.26L15.4728 4.25135C16.39 4.25026 17.1437 5.00394 17.1426 5.92112L17.1339 13.2294C17.1328 14.1465 16.5999 14.384 15.9497 13.7338L7.67467 5.45878L7.68967 5.44415Z" fill="black" />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                            <div className="stacksspp item_elements">
                                <h2>Stack</h2>
                                <p>Apps I'm using.</p>
                                {/* <div className='stack_gridint'></div> */}
                                <div className="icon_container_stacks">
                                    <div className='icon_level1'>
                                        <div className="icon_stack">

                                        <Image
                                    src={appleMuisc}
                                    className="lamar"
                                    alt="Picture of the author"
                                    objectFit='cover'
                                    layout='fill'
                                   
                                    quality={100}
                                    
                                />
                                        </div>
                                        <div className="icon_stack">
                                            <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2931 2931" fill='#1dd15e' width="33" height="33"><path className="st0" d="M1465.5 0C656.1 0 0 656.1 0 1465.5S656.1 2931 1465.5 2931 2931 2274.9 2931 1465.5C2931 656.2 2274.9.1 1465.5 0zm672.1 2113.6c-26.3 43.2-82.6 56.7-125.6 30.4-344.1-210.3-777.3-257.8-1287.4-141.3-49.2 11.3-98.2-19.5-109.4-68.7-11.3-49.2 19.4-98.2 68.7-109.4C1242.1 1697.1 1721 1752 2107.3 1988c43 26.5 56.7 82.6 30.3 125.6zm179.3-398.9c-33.1 53.8-103.5 70.6-157.2 37.6-393.8-242.1-994.4-312.2-1460.3-170.8-60.4 18.3-124.2-15.8-142.6-76.1-18.2-60.4 15.9-124.1 76.2-142.5 532.2-161.5 1193.9-83.3 1646.2 194.7 53.8 33.1 70.8 103.4 37.7 157.1zm15.4-415.6c-472.4-280.5-1251.6-306.3-1702.6-169.5-72.4 22-149-18.9-170.9-91.3-21.9-72.4 18.9-149 91.4-171 517.7-157.1 1378.2-126.8 1922 196 65.1 38.7 86.5 122.8 47.9 187.8-38.5 65.2-122.8 86.7-187.8 48z" /></svg>
                                        </div>
                                        <div className="icon_stack">
                                            <svg width="21" height="31" viewBox="0 0 21 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1264_3665)">
                                                    <path d="M10.3359 15.5008C10.3359 12.6764 12.6256 10.3867 15.45 10.3867C18.2744 10.3867 20.5641 12.6764 20.5641 15.5008C20.5641 18.3252 18.2744 20.6149 15.45 20.6149C12.6256 20.6149 10.3359 18.3252 10.3359 15.5008Z" fill="#1ABCFE" />
                                                    <path d="M0.105469 25.7273C0.105469 22.903 2.39511 20.6133 5.21953 20.6133H10.3336V25.7273C10.3336 28.5518 8.04398 30.8414 5.21953 30.8414C2.39511 30.8414 0.105469 28.5518 0.105469 25.7273Z" fill="#0ACF83" />
                                                    <path d="M10.3359 0.158203V10.3863H15.45C18.2744 10.3863 20.5641 8.09668 20.5641 5.27227C20.5641 2.44785 18.2744 0.158203 15.45 0.158203H10.3359Z" fill="#FF7262" />
                                                    <path d="M0.105469 5.27227C0.105469 8.09669 2.39511 10.3863 5.21953 10.3863H10.3336V0.158203H5.21953C2.39511 0.158203 0.105469 2.44785 0.105469 5.27227Z" fill="#F24E1E" />
                                                    <path d="M0.105469 15.5008C0.105469 18.3252 2.39511 20.6149 5.21953 20.6149H10.3336V10.3867H5.21953C2.39511 10.3867 0.105469 12.6764 0.105469 15.5008Z" fill="#A259FF" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1264_3665">
                                                        <rect width="20.6667" height="31" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="icon_stack">
                                            <Image
                                                src={obs}
                                                alt="Picture of the author"
                                                quality={100}
                                            />
                                        </div>
                                        <div className="icon_stack"></div>
                                    </div>
                                    <div className='icon_level2'>
                                        <div className="icon_stack"></div>
                                        <div className="icon_stack">
                                                <Image
                                                className="lin"
                                                    src={lin}
                                                    alt="Picture of the author"
                                                    quality={100}
                                                />
                                        </div>
                                        <div className="icon_stack">
                                        <svg height="30" viewBox="-11.9 -2 1003.9 995.6" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m12.1 353.9s-24-17.3 4.8-40.4l67.1-60s19.2-20.2 39.5-2.6l619.2 468.8v224.8s-.3 35.3-45.6 31.4z" fill="#2489ca"/><path d="m171.7 498.8-159.6 145.1s-16.4 12.2 0 34l74.1 67.4s17.6 18.9 43.6-2.6l169.2-128.3z" fill="#1070b3"/><path d="m451.9 500 292.7-223.5-1.9-223.6s-12.5-48.8-54.2-23.4l-389.5 354.5z" fill="#0877b9"/><path d="m697.1 976.2c17 17.4 37.6 11.7 37.6 11.7l228.1-112.4c29.2-19.9 25.1-44.6 25.1-44.6v-671.2c0-29.5-30.2-39.7-30.2-39.7l-197.7-95.3c-43.2-26.7-71.5 4.8-71.5 4.8s36.4-26.2 54.2 23.4v887.5c0 6.1-1.3 12.1-3.9 17.5-5.2 10.5-16.5 20.3-43.6 16.2z" fill="#3c99d4"/></svg>
                                        </div>
                                        <div className="icon_stack">
                                            <svg width="60" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 560 400"><path fill="#1a007f" d="m232.494 270.824 25.452-53.529c-19.44-4.127-39-16.146-50.062-30.77l-26.615 55.932c14.79 12.54 32.547 22.397 51.225 28.367"/><path fill="#4e000a" d="M338.711 184.922c-12.786 15.666-30.542 27.285-49.54 31.812l25.371 53.369c18.518-6.25 35.833-16.347 50.784-29.289z"/><path fill="#1a007f" d="m181.27 242.457-13.308 27.966c-6.774 14.224-1.683 31.733 12.265 39.145 14.79 7.853 32.988 1.723 40.122-13.222l12.145-25.522a151.817 151.817 0 0 1-51.225-28.367"/><path fill="#ff9396" d="M391.54 123.86a29.34 29.34 0 0 0-5.736-.568c-13.88 0-25.937 9.884-28.655 23.487-2.806 14.023-9.379 27.085-18.438 38.183l26.575 55.932c24.53-21.275 42.647-50.243 49.14-82.656 3.167-15.866-7.094-31.252-22.886-34.377"/><path fill="#002dc8" d="M289.17 216.734c-5.692 1.363-11.503 2.084-17.315 2.084-4.53 0-9.22-.521-13.909-1.523-19.44-4.127-39-16.146-50.062-30.77-2.766-3.647-5.01-7.453-6.574-11.34-6.052-14.944-23.087-22.156-38.037-16.146-14.951 6.05-22.166 23.078-16.154 38.023 6.855 16.988 18.96 32.574 34.15 45.395a151.705 151.705 0 0 0 51.185 28.367c12.866 4.127 26.214 6.41 39.36 6.41 14.59 0 28.98-2.524 42.688-7.131z"/><path fill="#ff536a" d="m379.315 270.303-14.03-29.489-26.574-55.892-.04.04s0-.04.04-.04l-38.639-81.254C295.24 93.51 284.95 87.008 273.698 87c-11.263 0-21.524 6.49-26.373 16.668l-39.401 82.856c11.063 14.625 30.623 26.644 50.062 30.771l12.746-26.764c1.203-2.524 4.81-2.524 6.013 0l12.465 26.203h.08-.08l25.372 53.369 12.466 26.203c4.83 10.177 15.143 16.687 26.414 16.667 2.605 0 5.21-.36 7.776-1.081 17.596-4.848 25.933-25.082 18.077-41.59"/><path fill="#1a007f" d="m232.494 270.824 25.452-53.529c-19.44-4.127-39-16.146-50.062-30.77l-26.615 55.932c14.79 12.54 32.547 22.397 51.225 28.367"/><path fill="#4e000a" d="M338.711 184.922c-12.786 15.666-30.542 27.285-49.54 31.812l25.371 53.369c18.518-6.25 35.833-16.347 50.784-29.289z"/><path fill="#1a007f" d="m181.27 242.457-13.308 27.966c-6.774 14.224-1.683 31.733 12.265 39.145 14.79 7.853 32.988 1.723 40.122-13.222l12.145-25.522a151.817 151.817 0 0 1-51.225-28.367"/><path fill="#ff9396" d="M391.54 123.86a29.34 29.34 0 0 0-5.736-.568c-13.88 0-25.937 9.884-28.655 23.487-2.806 14.023-9.379 27.085-18.438 38.183l26.575 55.932c24.53-21.275 42.647-50.243 49.14-82.656 3.167-15.866-7.094-31.252-22.886-34.377"/><path fill="#002dc8" d="M289.17 216.734c-5.692 1.363-11.503 2.084-17.315 2.084-4.53 0-9.22-.521-13.909-1.523-19.44-4.127-39-16.146-50.062-30.77-2.766-3.647-5.01-7.453-6.574-11.34-6.052-14.944-23.087-22.156-38.037-16.146-14.951 6.05-22.166 23.078-16.154 38.023 6.855 16.988 18.96 32.574 34.15 45.395a151.705 151.705 0 0 0 51.185 28.367c12.866 4.127 26.214 6.41 39.36 6.41 14.59 0 28.98-2.524 42.688-7.131z"/><path fill="#ff536a" d="m379.315 270.303-14.03-29.489-26.574-55.892-.04.04s0-.04.04-.04l-38.639-81.254C295.24 93.51 284.95 87.008 273.698 87c-11.263 0-21.524 6.49-26.373 16.668l-39.401 82.856c11.063 14.625 30.623 26.644 50.062 30.771l12.746-26.764c1.203-2.524 4.81-2.524 6.013 0l12.465 26.203h.08-.08l25.372 53.369 12.466 26.203c4.83 10.177 15.143 16.687 26.414 16.667 2.605 0 5.21-.36 7.776-1.081 17.596-4.848 25.933-25.082 18.077-41.59"/></svg>
                                        </div>
                                        <div className="icon_stack"></div>
                                    </div>
                                </div>
                                <Link href="/taste/stack" >
                                    <div className="arrow_taste">

                                        <svg width="20" height="19" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.2212 8.36184C14.8828 9.02338 14.8607 10.0677 14.1639 10.6743L7.21132 16.755C6.51453 17.3616 5.41001 17.3234 4.74846 16.6619C4.08692 16.0004 4.04877 14.8958 4.65536 14.199L10.7361 7.24645C11.3427 6.54966 12.387 6.52761 13.0485 7.18915L14.2212 8.36184Z" fill="black" />
                                            <path d="M7.68967 5.44415C7.03948 4.79396 7.24723 4.26113 8.19415 4.26L15.4728 4.25135C16.39 4.25026 17.1437 5.00394 17.1426 5.92112L17.1339 13.2294C17.1328 14.1465 16.5999 14.384 15.9497 13.7338L7.67467 5.45878L7.68967 5.44415Z" fill="black" />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="books_goods">

                        <div className="books_goods_item books_rec_text">
                            <h2>Books.</h2>
                            <p>Books I loved reading.</p>
                        </div>
                        <div className="books_goods_item books_rec_img ">
                            <div className="book_container_taste books_rec_img1">
                                <Image
                                    className="book_cover"
                                    src={book1}
                                    alt="Picture of the author"
                                    objectFit='cover'
                                    layout='fill'
                                    objectPosition="center"
                                    quality={100}
                                    placeholder="blur"
                                />

                                 
                                <div className="qoute">
                                    <span>"What important truth do very few people agree with you on?"</span>
                                    <a href ="mailto:mohamed.sadiq@outlook.sa" >Email me your answer ;)</a>
                                </div>
                            </div>
                            <div className="book_container_taste">
                                <Image
                                    src={book2}
                                    alt="Picture of the author"
                                    objectFit='cover'
                                    layout='fill'
                                    objectPosition="center"
                                    quality={100}
                                    placeholder="blur"
                                />
                            </div>
                            <div className="book_container_taste">
                                <Image
                                    src={book3}
                                    alt="Picture of the author"
                                    objectFit='cover'
                                    layout='fill'
                                    objectPosition="center"
                                    quality={100}
                                    placeholder="blur"
                                />
                            </div>

                        </div>
                        
                        <Link href="/taste/books" >
                            <div className="arrow_taste">
                                <svg width="20" height="19" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.2212 8.36184C14.8828 9.02338 14.8607 10.0677 14.1639 10.6743L7.21132 16.755C6.51453 17.3616 5.41001 17.3234 4.74846 16.6619C4.08692 16.0004 4.04877 14.8958 4.65536 14.199L10.7361 7.24645C11.3427 6.54966 12.387 6.52761 13.0485 7.18915L14.2212 8.36184Z" fill="black" />
                                    <path d="M7.68967 5.44415C7.03948 4.79396 7.24723 4.26113 8.19415 4.26L15.4728 4.25135C16.39 4.25026 17.1437 5.00394 17.1426 5.92112L17.1339 13.2294C17.1328 14.1465 16.5999 14.384 15.9497 13.7338L7.67467 5.45878L7.68967 5.44415Z" fill="black" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                    <div className="flex-container flex-container-level2">
                        <div className="item3">
                            <h2>Podcast</h2>
                            <p>Books I loved reading.</p>
                            <div className="podcasts_taste">
                                <div className="thenetworkstate hover_img_podcast">
                                    <Image
                                     className="network_static_img"
                                        src={thenetworkstate}
                                        alt="Picture of the author"
                                        objectFit='cover'
                                        layout='fill'
                                        objectPosition="center"
                                        quality={100}
                                        placeholder="blur"
                                    />
                                     <Image
                                        src={networkgif}
                                        className="network_gif_img"
                                        alt="Picture of the author"
                                        objectFit='cover'
                                        layout='fill'      
                                        quality={100}              
                                    />
                                
                                </div>
                               
                                <div className="flagraent hover_img_podcast">
                                    <Image
                                        src={flagraent}
                                        className="network_static_img"
                                        alt="Picture of the author"
                                        objectFit='cover'
                                        layout='fill'
                                        objectPosition="center"
                                        quality={100}
                                        placeholder="blur"
                                    />
                                     <Image
                                        src={flagraentss}
                                        className="network_gif_img"
                                        alt="Picture of the author"
                                        objectFit='cover'
                                        layout='fill'  
                                        objectPosition="right"
                                        quality={100}              
                                    />
                                </div>
                            </div>
                            <Link href="/taste/podcast" >
                                <div className="arrow_taste">

                                    <svg width="20" height="19" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.2212 8.36184C14.8828 9.02338 14.8607 10.0677 14.1639 10.6743L7.21132 16.755C6.51453 17.3616 5.41001 17.3234 4.74846 16.6619C4.08692 16.0004 4.04877 14.8958 4.65536 14.199L10.7361 7.24645C11.3427 6.54966 12.387 6.52761 13.0485 7.18915L14.2212 8.36184Z" fill="black" />
                                        <path d="M7.68967 5.44415C7.03948 4.79396 7.24723 4.26113 8.19415 4.26L15.4728 4.25135C16.39 4.25026 17.1437 5.00394 17.1426 5.92112L17.1339 13.2294C17.1328 14.1465 16.5999 14.384 15.9497 13.7338L7.67467 5.45878L7.68967 5.44415Z" fill="black" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <div className="item4">
                            <h2>Twitter</h2>
                            <p>Books I loved reading.</p>
                            <div className="twitterIcons">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="90" height="120"><path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" /></svg>

                            </div>
                            <a href='https://twitter.com/sadiq_moo' target="_blink">
                                <div className="arrow_taste">

                                    <svg width="20" height="19" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.2212 8.36184C14.8828 9.02338 14.8607 10.0677 14.1639 10.6743L7.21132 16.755C6.51453 17.3616 5.41001 17.3234 4.74846 16.6619C4.08692 16.0004 4.04877 14.8958 4.65536 14.199L10.7361 7.24645C11.3427 6.54966 12.387 6.52761 13.0485 7.18915L14.2212 8.36184Z" fill="black" />
                                        <path d="M7.68967 5.44415C7.03948 4.79396 7.24723 4.26113 8.19415 4.26L15.4728 4.25135C16.39 4.25026 17.1437 5.00394 17.1426 5.92112L17.1339 13.2294C17.1328 14.1465 16.5999 14.384 15.9497 13.7338L7.67467 5.45878L7.68967 5.44415Z" fill="black" />
                                    </svg>
                                </div>
                            </a>
                            
                        </div>

                    </div>
                    <div className="flex-container flex-container-level2">
                        <div className="item3">
                            <h2>Dribbble</h2>
                            <p>Follow me on Dribbble</p>
                            <div className="podcasts_taste dribbble">
                                <svg width="100" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#000" fill-opacity="0" /><circle cx="50" cy="50" r="48" fill="#EA4C89" /><path fill-rule="evenodd" clip-rule="evenodd" d="M50 0C22.397 0 0 22.397 0 50C0 77.603 22.397 100 50 100C77.5488 100 100 77.603 100 50C100 22.397 77.5488 0 50 0ZM83.026 23.0477C88.9913 30.3145 92.5705 39.5879 92.679 49.6204C91.269 49.3492 77.1692 46.4751 62.961 48.2646C62.6356 47.5597 62.3644 46.8004 62.0391 46.0412C61.1714 43.9805 60.1952 41.8655 59.2191 39.859C74.9458 33.4599 82.1041 24.2408 83.026 23.0477ZM50 7.37527C60.846 7.37527 70.7701 11.4425 78.308 18.1128C77.5488 19.1974 71.0954 27.82 55.9111 33.5141C48.9154 20.6616 41.1605 10.141 39.9675 8.5141C43.167 7.75488 46.5293 7.37527 50 7.37527ZM31.833 11.3883C32.9718 12.9067 40.564 23.4816 47.6681 36.0629C27.7115 41.3774 10.0868 41.269 8.18872 41.269C10.9544 28.0369 19.9024 17.0282 31.833 11.3883ZM7.26681 50.0542C7.26681 49.6204 7.26681 49.1866 7.26681 48.7527C9.11063 48.8069 29.8265 49.0781 51.1388 42.679C52.3861 45.0651 53.5249 47.5054 54.6095 49.9458C54.0672 50.1085 53.4707 50.2712 52.9284 50.4338C30.9111 57.538 19.1974 76.9523 18.2213 78.5792C11.4425 71.0412 7.26681 61.0087 7.26681 50.0542ZM50 92.7332C40.1302 92.7332 31.0195 89.3709 23.8069 83.731C24.5662 82.1584 33.243 65.4555 57.321 57.0499C57.4295 56.9957 57.4837 56.9957 57.5922 56.9414C63.6117 72.5054 66.0521 85.5748 66.7028 89.3167C61.551 91.5401 55.9111 92.7332 50 92.7332ZM73.807 85.4122C73.3731 82.8091 71.0955 70.3362 65.5098 54.9892C78.9046 52.8742 90.6182 56.3449 92.0824 56.833C90.2386 68.7093 83.4056 78.9588 73.807 85.4122Z" fill="#C32361" /></svg>
                            </div>
                            <a href="https://dribbble.com/Mohamed-Sadiq" target="_blink" >
                                <div className="arrow_taste">

                                    <svg width="20" height="19" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.2212 8.36184C14.8828 9.02338 14.8607 10.0677 14.1639 10.6743L7.21132 16.755C6.51453 17.3616 5.41001 17.3234 4.74846 16.6619C4.08692 16.0004 4.04877 14.8958 4.65536 14.199L10.7361 7.24645C11.3427 6.54966 12.387 6.52761 13.0485 7.18915L14.2212 8.36184Z" fill="black" />
                                        <path d="M7.68967 5.44415C7.03948 4.79396 7.24723 4.26113 8.19415 4.26L15.4728 4.25135C16.39 4.25026 17.1437 5.00394 17.1426 5.92112L17.1339 13.2294C17.1328 14.1465 16.5999 14.384 15.9497 13.7338L7.67467 5.45878L7.68967 5.44415Z" fill="black" />
                                    </svg>
                                </div>
                            </a>
                            <Image
                                        src={dribbn}
                                        className="dribbn"
                                        alt="Picture of the author"
                                        objectFit='cover'
                                        layout='fill'  
                                      
                                        quality={100}              
                                    />
                        </div>
                        <div className="item4">
                            <h2>Substack</h2>
                            <p>Books I loved reading.</p>
                            <div className="twitterIcons substack">
                                <svg width="100" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 448 511.471"><path fill="#FF681A" d="M0 0h448v62.804H0V0zm0 229.083h448v282.388L223.954 385.808 0 511.471V229.083zm0-114.542h448v62.804H0v-62.804z" /></svg>                          </div>
                            <a href='https://twitter.com/sadiq_moo' target="_blink">
                                <a href='https://substack.com/profile/13973284-mohamed-sadiq' target="_blink">
                                    <div className="arrow_taste">

                                        <svg width="20" height="19" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.2212 8.36184C14.8828 9.02338 14.8607 10.0677 14.1639 10.6743L7.21132 16.755C6.51453 17.3616 5.41001 17.3234 4.74846 16.6619C4.08692 16.0004 4.04877 14.8958 4.65536 14.199L10.7361 7.24645C11.3427 6.54966 12.387 6.52761 13.0485 7.18915L14.2212 8.36184Z" fill="black" />
                                            <path d="M7.68967 5.44415C7.03948 4.79396 7.24723 4.26113 8.19415 4.26L15.4728 4.25135C16.39 4.25026 17.1437 5.00394 17.1426 5.92112L17.1339 13.2294C17.1328 14.1465 16.5999 14.384 15.9497 13.7338L7.67467 5.45878L7.68967 5.44415Z" fill="black" />
                                        </svg>
                                    </div>
                                </a>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Taste

function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrowww ${props.left ? "arrow--left" : "arrow--right"
                } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}