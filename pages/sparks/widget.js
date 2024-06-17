import { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import useSound from "use-sound";
import BackButton from "../../components/backButton";

export default function Widget() {

  return (
    <>
      <Head>
        <title>Scrolling </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <BackButton title={""} />
          <div className="inner_container inner_container_sparks">
            <h2>Widget.</h2>
           
            <p>It's a scroll, but with a twist. Instead of the typical scroll bar, I integrated circular indicators to signify the moving content, elevating the overall user experience.</p>
           
            <div className="exp">
            <div class="progress-tracker">
  <div class="progress-container">
    <span class="progress-complete"></span>
  </div>
  <div class="text-container">
    <span class="days-completed">18/28 days</span>
    <span class="activity">Doing morning exercise</span>
  </div>
</div>

               
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
