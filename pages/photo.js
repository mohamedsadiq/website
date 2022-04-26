

import Head from 'next/head'
import Image from 'next/image'

import img1 from "../img/photos/1.jpg"
import img2 from "../img/photos/2.jpg"
import img3 from "../img/photos/3.jpg"
import img4 from "../img/photos/4.jpg"
import img5 from "../img/photos/5.jpg"
import img6 from "../img/photos/6.jpg"
import img7 from "../img/photos/7.jpg"
import img8 from "../img/photos/8.jpg"
import img9 from "../img/photos/9.jpg"

const Photo = () =>{
    return   <>
    <Head>
    <title>Photos | Mohamed Sadiq</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
<main>
    <div className="container">
        <div className=' inner_container'>
            <div className='mItv1'>
                <div className='ripi6'>
              
                {data.map( i => {
                    return (
                        <Image
                        className='border_radius'
                        src={i.img}
                        alt="Picture of the author"
                        quality={100}
                        placeholder="blur"
                    />
                    )
                })}  
             
                </div>
                <div className='ripi6'>
                {data2.map( (i) => {
                    return (
                        <Image
                        className='border_radius'
                        src={i.img}
                        alt="Picture of the author"
                        quality={100}
                        placeholder="blur"
                    />
                    )
                })}    
                </div>
                            
            </div>
        </div>
        </div>
</main>
</>
}

export default Photo

const data = [
    {
        img:img1
    },
    {
        img:img2
    },
    {
        img:img3
    },
    {
        img:img8
    },
  
   
]
const data2 = [
    {
        img:img4
    },
    {
        img:img5
    },
    {
        img:img6
    },
    {
        img:img7
    } ,{
        img:img9
    },
]
