import Link from 'next/link';
import { useRouter } from 'next/router';
import useSound from 'use-sound';
import { motion } from "framer-motion"
import { useState } from 'react';

const Header = () => {
  // Sound hook
  const [play] = useSound("/sound.mp3");
  const [opacityContent, setOpacityContent] = useState("")
  const home_content = () => {
    setOpacityContent("opacity")
  }
  // Router hook
  const router = useRouter();
  // Router hook
  const hex_animaiton = {
    initial:{
      opacity:1
    },
    animate:{
      opacity:0
    }
  }


  const iconHome = {
    initial:{
      opacity:1,
      scale: 1,
      left: "50%",
      top: "50%",
      position:"absolute",
      zIndex: 100
    },
    animate:{
      opacity:0,
      scale: 0.5,
      left: "50%",
      top: "50%",
      position:"absolute",
      zIndex: 100
    }
  }
  const header_hex = {
    initial: {
      border: "none",
      width: "118px",
      opacity:1,
      overflow: "hidden"
    },
    animate: {
      width: "650px",
      border:"1px solid #101010",
      opacity:1,
    
    },
    hover:{
     overflow:"visible",
     transition: {
      ease: "easeInOut",
      duration: 0,
      delay:0
    }
    }
  }
  const iconss = {
    initial: {
     opacity:0,
     top:"10px"
    },
   
    animate: {
      opacity:1,
      top:"0"
    }
  }
  const iconSvg = {
    initial: {
      rotate: "0deg",
    },
    hover: {
      rotate:"180deg",
    }
  }
  const stack = {
    initial: {
      scale:1,
    },
    hover: {
      scale:1.2,
    }
  }
  const twittter = {
    initial: {
      rotate:"0",
    },
    hover: {
      rotate:"-20deg",
      duration:3
    }
  }
    return (
      <motion.header
        className={router.pathname == "/" ? "center_header" : "top_fixed"}
        whileHover={header_hex.hover}
        initial="initial"
        animate="animate"
        variants={header_hex}
        transition={{ type: "spring" , delay: 1.2  ,ease:"easeInOut", }}
      >
     
        <div className='inner_header'>
        <Link href="/" activeClassName="active">

        <motion.div onClick={ () => home_content()} className={opacityContent} initial="initial" whileHover="hover">
          <div  className={router.pathname == "/" ? "active icon_container" : "icon_container"}  onClick={play}>
          <div className="icons" id="home_icon">
          <div className="text" >
            Home
          </div>
          <motion.div 
            className='icon_home_ani'
            animate="animate"
            variants={iconHome}
            transition={{ duration: 1, type: "spring", delay: 8 , ease:"easeInOut"}}
          >

           <motion.div className='hex center'>
           <motion.div 
               className='hex_img hex3' 
              //  animate="animate"
              //  variants={hex_animaiton}
               transition={{ duration:0.6,  delay: 4 , ease:"easeInOut"}}
           ></motion.div>
           <motion.div 
               className='hex_img hex2' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration:0.6,  delay: 3.1 , ease:"easeInOut"}}
           ></motion.div>
           <motion.div 
               className='hex_img hex1' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration:0.6,  delay: 3 , ease:"easeInOut"}}
           ></motion.div>
           <motion.div 
               className='hex_img hex5' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration:0.6,  delay: 2.9 , ease:"easeInOut"}}
           ></motion.div>
           <motion.div 
               className='hex_img hex4' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration:0.6,  delay: 2.8 , ease:"easeInOut"}}
           ></motion.div>
           <motion.div 
               className='hex_img hex3' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration:0.6,  delay: 2.7 , ease:"easeInOut"}}
           ></motion.div>
           <motion.div 
               className='hex_img hex2' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration:0.6,  delay: 2.6 , ease:"easeInOut"}}
           ></motion.div>
           <motion.div 
               className='hex_img hex1' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration:0.6,  delay: 2.5 , ease:"easeInOut"}}
           ></motion.div>
           <motion.div 
               className='hex_img hex5' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration:0.6,  delay: 2.4 , ease:"easeInOut"}}
           ></motion.div>
           <motion.div 
               className='hex_img hex4' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration:0.6,  delay: 2.2 , ease:"easeInOut"}}
           ></motion.div>
           <motion.div 
               className='hex_img hex3' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration:0.6,  delay: 2 , ease:"easeInOut"}}
           ></motion.div>
           <motion.div 
               className='hex_img hex2' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration: 0.6,  delay: 1.8 , ease:"easeInOut"}}
              ></motion.div>
           <motion.div 
               className='hex_img hex1' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration: 0.6,  delay: 1.6 , ease:"easeInOut"}}
              ></motion.div>
           <motion.div 
               className='hex_img hex5' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration: 0.6,  delay: 1.4 , ease:"easeInOut"}}
              ></motion.div>
           <motion.div 
               className='hex_img hex4' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration: 0.6,  delay: 1.2 , ease:"easeInOut"}}
              ></motion.div>
           <motion.div 
               className='hex_img hex3' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration: 0.6,  delay: 0.8 , ease:"easeInOut"}}
              ></motion.div>
              <motion.div 
               className='hex_img hex1' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration: 0.6,  delay: 0.6 , ease:"easeInOut"}}
              ></motion.div>

              <motion.div 
               className='hex_img hex2' 
               animate="animate"
               variants={hex_animaiton}
               transition={{ duration: 0.6,  delay: 0.4 , ease:"easeInOut"}}
              ></motion.div>
           </motion.div>

          </motion.div>
        
              <motion.div variants={iconSvg} className="glow" id="home_button">
                <svg id="homeIcon" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.29442 22.4449C1.75167 19.586 0.980302 18.1566 0.769474 16.6275C0.66278 15.8537 0.66278 15.0688 0.769474 14.295C0.980302 12.7658 1.75167 11.3364 3.29442 8.47761L3.6773 7.7681C4.99519 5.32595 5.65414 4.10488 6.58443 3.19745C7.53987 2.26549 8.70063 1.57198 9.9729 1.17298C11.2117 0.784485 12.5965 0.784485 15.3662 0.784485C18.1359 0.784485 19.5207 0.784485 20.7595 1.17298C22.0318 1.57198 23.1925 2.26549 24.148 3.19745C25.0783 4.10488 25.7372 5.32595 27.0551 7.76811L27.438 8.47762C28.9807 11.3364 29.7521 12.7658 29.9629 14.295C30.0696 15.0688 30.0696 15.8537 29.9629 16.6275C29.7521 18.1566 28.9807 19.586 27.438 22.4449L27.0551 23.1544C25.7372 25.5965 25.0783 26.8176 24.148 27.725C23.1925 28.657 22.0318 29.3505 20.7595 29.7495C19.5207 30.138 18.1359 30.138 15.3662 30.138C12.5965 30.138 11.2117 30.138 9.9729 29.7495C8.70063 29.3505 7.53987 28.657 6.58443 27.725C5.65414 26.8176 4.99519 25.5965 3.6773 23.1544L3.29442 22.4449Z" fill="url(#paint0_linear_231_3060)"/>
                    <defs>
                    <linearGradient id="paint0_linear_231_3060" x1="15.3662" y1="0.784485" x2="15.3662" y2="30.138" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="white"/>
                    </linearGradient>
                    </defs>
                </svg>
                </motion.div>
            </div>
            <div className="dot_active"></div>
          </div>
          </motion.div>
          </Link>
          <Link href="/projects" >
          <motion.div
            className="icon_holder"
            initial="initial"
            animate="animate"
            whileHover="hover"
            variants={iconss}
            transition={{ delay: 2.2 , ease:"easeInOut"}}
          >
          <div  className={router.pathname == "/projects" ? "active icon_container" : "icon_container"}  onClick={play}>
       
          <div className='icons'>
          <div className="text">
            Projects
          </div>
          <motion.div variants={iconSvg} className="glow">
                <svg id="projectsIcon"width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.4767 37.9031H19.4906C19.7686 27.4251 28.3497 19.0165 38.8948 19.0165C39.0704 19.0165 39.2455 19.0189 39.42 19.0235V19.0096C39.2455 19.0142 39.0704 19.0165 38.8948 19.0165C28.3497 19.0165 19.7686 10.608 19.4906 0.130005H19.4767C19.2033 10.4335 10.901 18.7359 0.597656 19.0096V19.0235C10.901 19.2972 19.2033 27.5996 19.4767 37.9031Z" fill="white"/>
                </svg>
          </motion.div>
           </div>
         
            <div className="dot_active"></div>
          </div>
          </motion.div>
          </Link>
          <Link href="/web3stack">
          <motion.div
           className="icon_holder"
           initial="initial"
           animate="animate"
           whileHover="hover"
           variants={iconss}
           transition={{ delay:2.3 , ease:"easeInOut"}}
          >
          <div  className={router.pathname == "/web3stack" ? "active icon_container" : "icon_container"}  onClick={play}>
          
          <div className='icons'>
          <div className="text">
            Web3 Stack
          </div>
          <motion.div variants={stack} className="glow">
                <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_231_3053)">
                    <path d="M5.75411 11.5302L19.1999 18.8371C19.3165 18.8992 19.4466 18.9317 19.5787 18.9317C19.7108 18.9317 19.8408 18.8992 19.9574 18.8371L33.4032 11.5302C33.5259 11.4697 33.6279 11.3742 33.6965 11.2558C33.7651 11.1374 33.7972 11.0014 33.7888 10.8649C33.7804 10.7283 33.7318 10.5973 33.6492 10.4882C33.5665 10.3792 33.4535 10.297 33.3243 10.2519L19.8785 4.76C19.6864 4.68108 19.4709 4.68108 19.2788 4.76L5.83302 10.2519C5.70382 10.297 5.59081 10.3792 5.50816 10.4882C5.42552 10.5973 5.37694 10.7283 5.36851 10.8649C5.36008 11.0014 5.39218 11.1374 5.46078 11.2558C5.52939 11.3742 5.63143 11.4697 5.75411 11.5302Z" fill="white"/>
                    <path d="M33.3244 16.8486L30.4364 15.6176L19.9576 21.3147C19.841 21.3769 19.7109 21.4094 19.5788 21.4094C19.4467 21.4094 19.3166 21.3769 19.2 21.3147L8.72116 15.6176L5.83315 16.8486C5.71085 16.9128 5.60842 17.0092 5.53696 17.1274C5.46551 17.2456 5.42773 17.3811 5.42773 17.5193C5.42773 17.6574 5.46551 17.7929 5.53696 17.9111C5.60842 18.0294 5.71085 18.1258 5.83315 18.19L19.279 25.9229C19.393 25.9926 19.524 26.0295 19.6577 26.0295C19.7914 26.0295 19.9224 25.9926 20.0365 25.9229L33.4823 18.19C33.5987 18.1125 33.6914 18.0043 33.7501 17.8774C33.8088 17.7505 33.8312 17.6098 33.8149 17.4709C33.7985 17.332 33.7441 17.2003 33.6575 17.0905C33.5709 16.9806 33.4557 16.8969 33.3244 16.8486Z" fill="white"/>
                    <path d="M33.3227 23.8556L30.8608 22.7825L19.9558 28.7163C19.8392 28.7785 19.7091 28.811 19.577 28.811C19.4449 28.811 19.3148 28.7785 19.1983 28.7163L8.2933 22.7825L5.8314 23.8556C5.70562 23.9208 5.60018 24.0193 5.52658 24.1404C5.45299 24.2615 5.41406 24.4004 5.41406 24.5421C5.41406 24.6838 5.45299 24.8227 5.52658 24.9438C5.60018 25.0649 5.70562 25.1634 5.8314 25.2286L19.2772 33.1193C19.3938 33.1815 19.5238 33.214 19.6559 33.214C19.7881 33.214 19.9181 33.1815 20.0347 33.1193L33.4805 25.2286C33.6004 25.15 33.6961 25.0397 33.757 24.9099C33.8178 24.78 33.8414 24.6359 33.825 24.4934C33.8086 24.351 33.753 24.2159 33.6643 24.1033C33.5756 23.9907 33.4573 23.9049 33.3227 23.8556Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_231_3053">
                    <rect width="37.8755" height="37.8755" fill="white" transform="translate(0.638672 0.0256348)"/>
                    </clipPath>
                    </defs>
                </svg>
                </motion.div>
                </div>
             <div className="dot_active"></div>
          </div>
          </motion.div>
          </Link>
          <Link href={"/blogs"}>
          <motion.div 
             className="icon_holder"
             initial="initial"
             animate="animate"
             whileHover="hover"
             variants={iconss}
             transition={{ delay: 2.4 , ease:"easeInOut"}}
          >
          <div  className={router.pathname == "/blogs" ? "active icon_container" : "icon_container"} onClick={play}>
         
         <div className='icons'>
          <div className="text">
            Blog
          </div>
          <motion.div variants={iconSvg} className="glow">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <path d="M26.3426 6.3659L23.8752 8.83325L19.1162 4.22002L21.6564 1.67976C22.2779 1.05834 23.1207 0.709229 23.9995 0.709229C24.8783 0.709229 25.7212 1.05834 26.3426 1.67976C26.964 2.30118 27.3131 3.14401 27.3131 4.02283C27.3131 4.90165 26.964 5.74448 26.3426 6.3659ZM22.4303 10.2765L7.25997 25.4469L0.800781 27.2464L2.57217 20.7624L17.6861 5.6484L22.4303 10.2765Z" fill="white"/>
              </svg>
              </motion.div>
              </div>
            <div className="dot_active"></div>
          </div>
          </motion.div>
          </Link>
      
         
          <motion.div 
          className="icon_holder"
          initial="initial"
          animate="animate"
          whileHover="hover"
          variants={iconss}
          transition={{ delay: 2.5 , ease:"easeInOut"}}
          >
          <div  className="icon_container"  onClick={play}>
            <a href="https://twitter.com/sadiq_moo" target="_blank">
          
              <div className='icons'>
            <div className="text">
            Twitter
            </div>
            <motion.div variants={twittter} className="glow">
                <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.5425 11.0318C38.2251 11.6033 36.8318 11.9811 35.4061 12.1535C36.9102 11.2549 38.0374 9.84128 38.5785 8.17483C37.1651 9.01625 35.6178 9.60907 34.0039 9.92755C32.9252 8.75774 31.4887 7.97905 29.9198 7.71361C28.3508 7.44817 26.7382 7.71099 25.3347 8.46086C23.9312 9.21072 22.8163 10.4052 22.1648 11.857C21.5133 13.3088 21.3621 14.9357 21.735 16.4827C18.877 16.3381 16.0815 15.594 13.5299 14.2986C10.9783 13.0032 8.72782 11.1855 6.92455 8.96355C6.29206 10.0681 5.95972 11.3189 5.96056 12.5917C5.95832 13.7737 6.24838 14.9379 6.80494 15.9806C7.36149 17.0234 8.16725 17.9124 9.15049 18.5684C8.00769 18.5373 6.8893 18.2307 5.89045 17.6745V17.7622C5.89902 19.4183 6.47935 21.0206 7.53329 22.2981C8.58723 23.5756 10.0501 24.4499 11.6744 24.773C11.0491 24.9633 10.4 25.0636 9.74642 25.071C9.29402 25.0657 8.84276 25.0247 8.39683 24.9483C8.85939 26.3729 9.75452 27.6179 10.9577 28.5101C12.1608 29.4022 13.6122 29.8972 15.1097 29.926C12.5809 31.9158 9.45877 33.0017 6.24099 33.0108C5.65512 33.0127 5.06972 32.9776 4.48828 32.9056C7.77361 35.0268 11.6022 36.1529 15.5128 36.1481C18.2115 36.1761 20.8886 35.6661 23.388 34.6479C25.8873 33.6297 28.1587 32.1237 30.0695 30.2178C31.9802 28.3119 33.4921 26.0444 34.5167 23.5477C35.5413 21.051 36.0582 18.3751 36.0371 15.6764C36.0371 15.3785 36.0371 15.063 36.0371 14.7475C37.4124 13.7218 38.5986 12.4645 39.5425 11.0318Z" fill="white"/>
                </svg>
             </motion.div>
             </div>
              <div className="dot_active"></div>
            </a>
          </div>
          </motion.div>
          <motion.div 
          className="icon_holder"
          initial="initial"
          animate="animate"
          whileHover="hover"
          variants={iconss}
          transition={{ delay:2.6 , ease:"easeInOut"}}
          >
          <div className="icon_container"  onClick={play}>
          <a href="https://github.com/mohamedsadiq" target="_blank">
        
               <div className='icons'>
          <div className="text">
           Github
          </div>
          <motion.div variants={stack} className="glow">
               <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M15.5582 25.78C15.5582 26.3436 15.4701 26.9213 15.294 27.5131C15.1179 28.1049 14.8149 28.6404 14.3852 29.1195C13.9554 29.5985 13.4446 29.8381 12.8528 29.8381C12.261 29.8381 11.7502 29.5985 11.3205 29.1195C10.8907 28.6404 10.5878 28.1049 10.4116 27.5131C10.2355 26.9213 10.1474 26.3436 10.1474 25.78C10.1474 25.2164 10.2355 24.6387 10.4116 24.0469C10.5878 23.4551 10.8907 22.9196 11.3205 22.4405C11.7502 21.9615 12.261 21.7219 12.8528 21.7219C13.4446 21.7219 13.9554 21.9615 14.3852 22.4405C14.8149 22.9196 15.1179 23.4551 15.294 24.0469C15.4701 24.6387 15.5582 25.2164 15.5582 25.78ZM29.0852 25.78C29.0852 26.3436 28.9971 26.9213 28.821 27.5131C28.6448 28.1049 28.3419 28.6404 27.9121 29.1195C27.4824 29.5985 26.9716 29.8381 26.3798 29.8381C25.788 29.8381 25.2772 29.5985 24.8474 29.1195C24.4177 28.6404 24.1147 28.1049 23.9386 27.5131C23.7624 26.9213 23.6744 26.3436 23.6744 25.78C23.6744 25.2164 23.7624 24.6387 23.9386 24.0469C24.1147 23.4551 24.4177 22.9196 24.8474 22.4405C25.2772 21.9615 25.788 21.7219 26.3798 21.7219C26.9716 21.7219 27.4824 21.9615 27.9121 22.4405C28.3419 22.9196 28.6448 23.4551 28.821 24.0469C28.9971 24.6387 29.0852 25.2164 29.0852 25.78ZM32.4669 25.78C32.4669 24.0891 31.9808 22.6519 31.0085 21.4683C30.0363 20.2847 28.7188 19.6929 27.0561 19.6929C26.4784 19.6929 25.1046 19.8408 22.9346 20.1367C21.9342 20.2917 20.8281 20.3692 19.6163 20.3692C18.4045 20.3692 17.2984 20.2917 16.298 20.1367C14.1562 19.8408 12.7824 19.6929 12.1765 19.6929C10.5138 19.6929 9.19631 20.2847 8.22406 21.4683C7.25181 22.6519 6.76569 24.0891 6.76569 25.78C6.76569 27.02 6.99113 28.1014 7.44203 29.0244C7.89293 29.9473 8.4636 30.673 9.15404 31.2013C9.84448 31.7297 10.704 32.1525 11.7326 32.4695C12.7612 32.7865 13.7476 32.9944 14.6916 33.093C15.6357 33.1916 16.6855 33.241 17.8409 33.241H21.3917C22.5471 33.241 23.5969 33.1916 24.541 33.093C25.485 32.9944 26.4714 32.7865 27.5 32.4695C28.5286 32.1525 29.3881 31.7297 30.0786 31.2013C30.769 30.673 31.3397 29.9473 31.7906 29.0244C32.2415 28.1014 32.4669 27.02 32.4669 25.78ZM37.2013 22.0601C37.2013 24.9768 36.7716 27.3088 35.912 29.0561C35.3766 30.141 34.6333 31.0781 33.6822 31.8671C32.7311 32.6562 31.7377 33.2621 30.7021 33.6848C29.6664 34.1075 28.4687 34.4422 27.109 34.6888C25.7492 34.9354 24.541 35.0903 23.4842 35.1538C22.4274 35.2172 21.2508 35.2489 19.9545 35.2489C18.8554 35.2489 17.855 35.2277 16.9532 35.1855C16.0514 35.1432 15.0122 35.0551 13.8356 34.9213C12.6591 34.7874 11.5847 34.576 10.6124 34.2872C9.64016 33.9983 8.67496 33.6355 7.7168 33.1987C6.75864 32.7619 5.90616 32.1912 5.15936 31.4867C4.41256 30.7822 3.80666 29.9719 3.34167 29.0561C2.46806 27.3229 2.03125 24.9909 2.03125 22.0601C2.03125 18.7206 2.98941 15.9307 4.90573 13.6903C4.52528 12.5349 4.33506 11.3372 4.33506 10.0972C4.33506 8.46268 4.69437 6.9268 5.41299 5.48956C6.93477 5.48956 8.27338 5.76785 9.4288 6.32443C10.5842 6.88101 11.9158 7.7511 13.4235 8.93471C15.4948 8.44154 17.6718 8.19495 19.9545 8.19495C22.0399 8.19495 24.0126 8.4204 25.8725 8.8713C27.352 7.71587 28.6695 6.86339 29.8249 6.31386C30.9803 5.76433 32.3119 5.48956 33.8196 5.48956C34.5382 6.9268 34.8975 8.46268 34.8975 10.0972C34.8975 11.3231 34.7073 12.5067 34.3269 13.648C36.2432 15.9025 37.2013 18.7065 37.2013 22.0601Z" fill="white"/>
               </svg>
               </motion.div>
               </div>
             <div className="dot_active"></div>
          </a>
          </div>
          </motion.div>
          <motion.div 
          className="icon_holder"
          initial="initial"
          animate="animate"
          whileHover="hover"
          variants={iconss}
          transition={{ delay: 2.7 , ease:"easeInOut"}}
          >
          <div className="icon_container"  onClick={play}>
          
          <div className='icons'>
          <div className="text">
          Mail
          </div>
          <motion.div variants={stack} className="glow">
               <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M2.93164 10.012V28.9841L12.4177 19.498L2.93164 10.012ZM4.81653 8.11102L16.826 20.1205C18.3428 21.6373 20.9881 21.6373 22.5048 20.1205L34.5143 8.11102H4.81653Z" fill="white"/>
                 <path d="M24.3972 22.0134C23.1348 23.2771 21.4534 23.9746 19.6649 23.9746C17.8763 23.9746 16.1949 23.2771 14.9325 22.0134L14.31 21.3909L4.83203 30.8689H34.4977L25.0197 21.3909L24.3972 22.0134ZM26.9126 19.4979L36.3986 28.984V10.0119L26.9126 19.4979Z" fill="white"/>
               </svg>
               </motion.div>
               </div>
         
             <div className="dot_active"></div>
          </div>
          </motion.div>
        </div>
     
        </motion.header>
    )
}

export default Header