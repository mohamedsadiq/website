import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Script from 'next/script'
import useSound from 'use-sound';
// images
import me from "../img/me.jpg"
import setup from "../img/setup.png"
import pic from "../img/Group 2.png"

export default function About() {
  // Sound hook
  const [play] = useSound("/sound.mp3");

  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <div className="container">
          <div className="inner_container about_me">
            
            
         <div className='about_me_img'>
         <div className='personal_photo'>
              <Image  src={me} alt="Photo of me" quality={100}/>
            </div>
         </div>
            <h1>A product designer crafting software solutions for the web.</h1>
            <p> Hey there! I'm Mohamed Sadiq, but you can call me Mo. I'm a passionate product designer who thrives on creating delightful digital experiences. From my early days as a front-end engineer, I discovered my true passion lies in design. Now, I bring ideas to life through intuitive interfaces and captivating experiences.</p>
           
            {/* <p>Since 2017, I have been working as a product designer with expertise in designing and building digital products, including websites, mobile apps, and internet software. My focus is on creating user-centered designs that solve business problems while providing a seamless user experience. Additionally, I&rsquo;m passionate about the possibilities presented by the emerging field of Web3 and how it can provide more autonomy and security to users.</p> */}
            <a
                className="links aboutmelink"
                href="/cv.pdf"
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer"
            >
              {/* <span></span> */}
              My Resume</a>
           <h1 className="mt1">How can I help?</h1>
            
          {/* <h3 className='mt1'>Product Design</h3> */}
          <ul className=''>
            <li><strong> Product Design: </strong> As a Product designer, I strive to create interactive experiences that aim to exceed expectations. From wireframes to high-fidelity mockups, I work on user-friendly designs that aim to leave a lasting impact and drive engagement.</li>
            <li><strong> Interaction Design: </strong> I aim to deliver captivating experiences that go beyond what's expected. With seamless interactions, I focus on blending aesthetics and functionality to create exceptional engagement.</li>
          </ul>
        
          {/* <p> <strong>Product Design:</strong> I excel in crafting interactive experiences that seamlessly guide users through digital products. From wireframes and prototypes to high-fidelity mockups, I use industry-standard tools to convey design concepts effectively.</p> */}
          <h1 className="mt1">Tools I use?</h1>
          <ul className=''>
            <li><strong> Design Tools I Use: </strong>I utilize a diverse set of industry-standard design tools, including Figma, Adobe Illustrator, Adobe Photoshop, Adobe After Effects, and more, to bring my creative ideas to life.</li>
            <li><strong> Coding Tools I Use: </strong>For coding, I rely on an array of powerful tools, including VS Code, Vanilla JavaScript, React.js, Web3.js, Ether.js, Next.js, and Framer Motion. Leveraging this versatile toolkit, I can implement designs effectively.</li>
          </ul>
          <div className='img_about'>
            <Image src={setup} alt="setup" quality={100}/>
            <p className='toolsSetup'> This is my setup - <span>See more of the tools that I'm using from <Link href={"/taste/stack"}>here</Link></span></p>
          </div>
          <h1 className="mt1" style={{margin: "0px"}}>Awards and Recognitions:</h1>
            
        
            <ul>
              <li><strong><a href=' https://www.producthunt.com/products/developer-dao-fm'>Top Product on Product Hunt</a></strong>: <a href='https://www.developerdaofm.com/' target='blink'>'DeveloperDAO FM'</a> is a project I initiated as an Early Contributor at DeveloperDao, combines coding and music. I designed and coded the entire website, providing a unique coding experience. It also increased brand awareness for DeveloperDAO. Check it out here</li>
              <li><a href='https://www.producthunt.com/products/daos-spot'><strong>4th product of the week in the web3 category</strong></a> As an enthusiastic member of the DAO community, I initiated <a href='https://www.daosspot.xyz/' target='blink'>'DAOs Spot'</a> to offer a comprehensive hub for exploring the world of Decentralized Autonomous Organizations (DAOs). I curated and developed the entire platform to provide users with an immersive experience into the realm of decentralized governance.</li>
            </ul>

            {/* <div>
              <h1 className="mt1" style={{margin: "0px"}}>Cerifications:</h1>
                <ul>
                  <a href='https://www.freecodecamp.org/certification/fcc334b10e9-d685-4930-933e-b630b269e07d/javascript-algorithms-and-data-structures'>
                    <li>JavaScript Algorithms and Data Structures</li>
                  </a>
                  <a href='https://www.freecodecamp.org/certification/fcc334b10e9-d685-4930-933e-b630b269e07d/front-end-libraries'>
                    <li>Front End Libraries</li>
                  </a>
                  <a href='https://certificates.uxcel.com/8S9QXG2AG8D5'>
                    <li>UX Design Foundations</li>
                  </a>
                  <a href='https://certificates.uxcel.com/WRM9V4P4LYTP'>
                    <li>Design Terminology</li>
                  </a>
                </ul>
            </div> */}

            <h1 className="mt1">In my free time</h1>
            <div className='img_about freetime'>
            <Image src={pic} alt="setup" quality={100}/>
            
            <p className='toolsSetup'> Some of the photos I've taken - <span> You can see more of them from <Link href={"/taste/photo"}>here</Link></span></p>
          </div>
          <p className='freetimep'> In my free time, you can often find me at the gym. When I'm not there, I indulge in my passion for video games, finding inspiration and enjoyment in their immersive worlds. But beyond that, nothing compares to the tranquil beauty of the sunset by the sea, where I find peace and solace, connecting with nature's breathtaking wonders.</p>
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


