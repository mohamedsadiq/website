import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Script from 'next/script'
import useSound from 'use-sound';
// images
import developerDao from "../img/dev1.png"
import developerDaoFm from "../img/developerdaofm.png"
import nftweb3 from "../img/nftweb3.png"
import web3cons from "../img/loginweb3.png"
import watchcrypto from "../img/watchcrypto.png"
import applewatch from "../img/applewatch.png"
import westworldwatch from "../img/westworldwatch.png"
import weatherapp from "../img/weatherapp.png"
import vscode from "../img/vscode.png"
import cryptocon from "../img/cdcs.png"
import libyatells from "../img/libyatells.png"
import trustWallet from "../img/trustwallet.jpg"
import lastwebsite from "../img/lastwebsite.jpg"
import ovo from "../img/ovo.png"
import folim from "../img/folim.png"
import gm from "../img/gm.png"
import gmd from "../img/ddcd.jpg"
import daos from "../img/daos.png"

import nasir from "../img/bitcoin.png"
import car from "../img/car.png"
import csc from "../img/fdsvedf.png"
import delta from "../img/delta.png"
import drakec from "../img/Instagram post - 4.png"

export default function Projects() {
 // Sound hook
 const [play] = useSound("/sound.mp3");

  return (
    <>
      <Head>
        <title>Projects | Mohamed Sadiq</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
     
       <div className="container">
        <div className="inner_container">
          <h1>Projects</h1>
          <p>Projects I built using React, Figma, Solidity + Smart Contracts, Next.js</p>
         
         
          <div className="grid">
         
                {/* <Link key={"dao"} href="" passHref>
                <div className="blocks" onClick={play}>
                  <div className='ovo developerdao_vid'>
                    <video loop autoPlay muted >
                    <source src="/u5RViMdepqRfkMte.mp4" type="video/mp4"/>
                  </video>
                </div>

                <div className="overlay"> 
                  <h2></h2>
                  <p></p>
                  <span></span>
                </div>
                </div>
                </Link> */}
            {data.map(item => {
              return (
                <a key={item.name} href={item.link} target={item.target} passHref>
                <div className="blocks" onClick={play}>
                  <Image
                    src={item.img}
                    alt="Picture of the author"
                    objectFit='cover'
                    layout='fill'
                    objectPosition="center"
                    quality={100}
                    placeholder="blur"
                />

                <div className="overlay"> 
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <span>{item.tags}</span>
                </div>
                </div>
                </a>
               )
            })}
             <a href="https://www.behance.net/gallery/108322809/OVO-Website-Redesign" passHref target="_blink">
                <div className="blocks" onClick={play}>
                  <div className='ovo'>
                  <Image
                    src={"/ovovideo-3b3229df04b9ef2c3d47a36c13a5369c_Trim.gif"}
                    alt="Picture of the author"
                    objectFit='cover'
                    layout='fill'
                    objectPosition="center"
                    quality={100}
                    
                />
                </div>

                <div className="overlay"> 
                  <h2>OVO Website Redesign</h2>
                  <p>The “October’s Very Own” clothing..</p>
                  <span>e-commerce</span>
                </div>
                </div>
                </a>
          </div>

          <h2>Playground</h2>
          
          <div className="grid">
            {playground.map(item => {
              return (
                <a key={item.name}  href={item.link} passHref target={item.target}>
                <div className="blocks" onClick={play}>
                  <Image
                    src={item.img}
                    alt="Picture of the author"
                    objectFit='cover'
                    layout='fill'
                    objectPosition="center"
                     placeholder="blur"
                    quality={100}
                />

                <div className="overlay"> 
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <span>{item.tags}</span>
                </div>
                </div>
                </a>
               )
            })}
          </div>
        </div>
       </div>
       <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-H699TZ29QW"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
 
         gtag('config', 'G-H699TZ29QW');
        `}
      </Script>
      </main>

      </>
  )
}


const data = [
  {
    name:"DAOs Spot",
    img:daos,
    description:"Project for DAOs", 
    tags:"Product Design, Web3",
    target:"_blink",
    link:"https://www.figma.com/proto/W2MGe36aUKYzaE3EaWQIm5/Developer-DAO-website-2022?page-id=0%3A1&node-id=2%3A396&viewport=0%2C48%2C0.13&scaling=contain"
},
  {
    name:"DeveloperDAO Website",
    img:developerDao,
    description:"The main website of DeveloperDAO", 
    tags:"Product Design, Web3",
    target:"_blink",
    link:"https://www.figma.com/proto/W2MGe36aUKYzaE3EaWQIm5/Developer-DAO-website-2022?page-id=0%3A1&node-id=2%3A396&viewport=0%2C48%2C0.13&scaling=contain"
},
  {
      name:"DeveloperDAO FM",
      img:developerDaoFm,
      description:"A place where you listin to muisc ...", 
      tags:"Product Design, JS, Web3",
      target:"_blink",
      link:"http://developerdaofm.com/"
  },
  {
    name:"Apple Watch Sport FACE",
    img:applewatch,
    description:"Minimalist apple watch face",
    target:"_blink",
    tags:"Apple Watch, Product Design",
    link:"https://www.behance.net/gallery/130411669/Simple-Watch-Face-3"
},
  ,
  {
      name:"Web 3 Lover Boy",
      img:nftweb3,
      description:"CWB is a project inspired by Dever..",  
      tags:"Product Design, Solidity, Web3",
      target:"_blink",
      link:"https://www.behance.net/gallery/134169935/Certified-Web3-Boy-NFTs"
  },
  
  {
    name:"GM",
    img:gm,
    description:"Wave portal",
    tags:"Concepts",
    target:"_blink",
    link:"https://waveportal-starter-project.mohamedsadiq.repl.co"
  },
  {
    name:"Crypto App",
    img:watchcrypto,
    description:"A concepts for crypto App..",
    target:"_blink",
    tags:"Concepts, Web3",
    link:"https://www.behance.net/gallery/126685831/Crypto-Watch-App"
  },
  {
      name:"Web 3 Concepts",
      img:web3cons,
      description:"Attempts to create a new perspective",
      target:"_blink",
      tags:"Concepts, Web3",
      link:"https://www.behance.net/gallery/142532281/Web3-Concepts"
  },


  {
    name:"One-Yellow 2",
    img:vscode,
    description:"Theme for Atom Editor",
    target:"_blink",
    tags:"CSS, Js, Atom",
    link:"https://twitter.com/sadiq_moo/status/1297206769580679168"
    }, 
    
    {
      name:"Concepts inspired by Drake ",
      img:drakec,
      description:"Concepts Chicago Freestyle",
      target:"_blink",
      tags:"Drake, songs",
      link:"https://www.behance.net/gallery/142533193/Concepts-inspired-by-Drake?"
      }, 
      
    
]


const playground = [

{
  name:"Weather app",
  img:weatherapp,
  description:"a concept for weather app",
  tags:"Apple Watch",
  link:"https://www.behance.net/gallery/142532877/Weather-app",
  target:"_blink"
},

{
  name:"Trust Wallet App",
  img:trustWallet,
  description:"a concept for Trust Wallet",
  tags:"Concepts",
  target:"_blink",
  link:"https://www.behance.net/gallery/130411983/Redesigning-the-Trust-Wallet-App"
  },
  {
    name:"Aston Martin - Dark Mode",
    img:car,
    description:"UI",
    tags:"Concepts",
    target:"_blink",
    link:"https://dribbble.com/shots/16177318-Aston-Martin-Dark-Mode"
    },
    {
      target:"_blink",
      name:"Minimalist designe",
      img:csc,
      description:"UI",
      tags:"Concepts",
      link:"https://www.instagram.com/p/CSLDGdTDy-u/"
      },
      {
        name:"Crypto App",
        img:cryptocon,
        description:"description",
        tags:"Concepts",
        link:"https://dribbble.com/shots/16455889-Crypto-app"
        },
     
        
        {
          name:"West World Watch Face",
          img:westworldwatch,
          description:"Watch Face inspired by West World",
          tags:"Apple Watch",
          target:"_blink",
          link:"https://dribbble.com/shots/11275865-Westword-apple-watch-customization-2"
      },

]