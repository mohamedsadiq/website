import Head from 'next/head'
import Script from 'next/script'
import Content from '../components/Content'
export default function Home() {
  return (
     <div className="class_body">
      <Head>
        <title>Home - Mohamed Sadiq</title>
        <meta name="description" content="A product designer who can code, focusing on Web 3, Open source products @DeveloperDAO, member of @Bulidspace and @Anti" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="HTML, CSS, JavaScript, product design, web3, nft" />
        <meta name="author" content="Mohamed Sadiq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mohamedsadiq.me" />
        <meta name="twitter:title" content="Mohamed Sadiq" />
        <meta name="twitter:description" content="A product designer" />
        <meta name="twitter:image" content="https://i.ibb.co/Cvc4f6R/Instagram-post-6.png" />
        
      </Head>
      <main>
        
       <Content />
      
      </main>
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
      </div>
  )
}
