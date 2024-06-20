import { useState } from "react";
import Head from "next/head";
import Script from "next/script";
import BackButton from "../../components/backButton";
import { motion } from "framer-motion";

export default function FamilyTransactions() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [buttonColor, setButtonColor] = useState("#f4f4f5");
  const [rotation, setRotation] = useState(0);
  const [titles] = useState(["Watch", "Mac", "iPad", "iPhone"]);
  const [opacityValues, setOpacityValues] = useState([1, 1, 1, 1]);
  const [opacityIcon, setOpacityIcon] = useState(1);
  const texts = [
    "iPad",
    "Watch",
    "Mac",
    "iPhone"
  ];
  
  const handleClick = () => {
    setIsAnimating(true);
    // setRotation((prevRotation) => prevRotation + 90);
    setButtonColor("#fff");
    setOpacityIcon(0.1);

    // Update the opacity values

    setTimeout(() => setIsAnimating(false), 200);
    setTimeout(() => setButtonColor("#f4f4f5"), 250);
    setTimeout(() => setOpacityIcon(1), 230);
  };

  const textVariants = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <>
      <Head>
        <title>Button</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container inner_container_sparks_parent">
          <BackButton title={""} />
          <div className="inner_container inner_container_sparks">
            <h2>Button</h2>
            <p>
              It's a scroll, but with a twist. Instead of the typical scroll
              bar, I integrated circular indicators to signify the moving
              content, elevating the overall user experience.
            </p>
            <div className="exp">
              <div className="circle">
                {texts.map((item, index) => (
                  <motion.div
                    key={index}
                    className="text_cir"
                    style={{ transform: `rotate(${item.rotation}deg)` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.text}
                  </motion.div>
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-32 h-32 flex justify-center items-center">
                <motion.div
                  onClick={handleClick}
                  animate={{
                    rotate: isAnimating ? 15 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 10 }}
                  style={{
                    cursor: "pointer",
                  }}
                  className="mainButtonAnimation rounded-full relative h-10 shadow-sm shadow-neutral-200 mix-blend-normal bg-blend-normal"
                >
                  <div
                    className="w-24 h-10 rounded-full bg-zinc-100 grid gap-0 m-b-0 relative border-neutral-50 border-2"
                    style={{
                      background: buttonColor,
                      transition: "all 0.4s ease-in-out",
                    }}
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{
                        rotate: rotation,
                      }}
                      className="letter_rotation"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 16,
                      }}
                    >
                      <div
                        className="words_button"
                        style={{
                          transition: "all 0.4s ease-in-out",
                        }}
                      >
                         {titles.map((title, index) => (
                          <div className="child" key={index} style={{ opacity: opacityValues[index] }}>
                            {title}
                          </div>
                        ))} 
                      </div>
                      {/* <div class="parent">
        <div class="child"></div>
    </div> */}
                    </motion.div>
                    <div className="arrow_button absolute right-2 top-2.5">
                      <svg
                        style={{
                          opacity: opacityIcon,
                          transition: "all 0.4s ease-in-out",
                        }}
                        fill="none"
                        height="18"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
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