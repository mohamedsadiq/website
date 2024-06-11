import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import useSound from "use-sound";
import BackButton from "../../components/BackButton";

export default function Family_transactions() {
 

    
  return (
    <>
      <Head>
        <title>Family Wallet Transactions</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
        <BackButton
              title={"DeveloperDao"}
            //   link={"https://www.daospot.xyz/"}
            />
          <div className="inner_container inner_container_sparks">
            <h2>Family Wallet Transactions</h2>
            <p> I really like how smooth the animations are in Family Wallet Transactions, so I tried making something similar using GSAP.</p>
            <div className="exp">
             
            </div>
            <div className="controll_button">
            {/* <button className="button_play" onClick={playAnimation}>Play</button>
            <button   className="button_pause" onClick={pauseAnimation}>Pause</button>
            <button  className="button_restart" onClick={restartAnimation}>Restart</button> */}
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
  );
}