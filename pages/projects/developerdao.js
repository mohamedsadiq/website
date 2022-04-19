
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import BlogNav from '../../components/BlogNav'
import WorkIntro from '../../components/WorkIntro'
import imgWork from "../../img/developerdao.png"

const DeveloperDAO = () => {
    return (
        <div className={styles.container}>
            <Head>
            <title>DeveloperDAO Website | Mohamed Sadiq</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
        <main>
        <div className="container">
            <div className="inner_container">
                <BlogNav />
                <WorkIntro title={"DeveloperDao"} link={"/projects/developerdao"}/>
                <div className="blog_photo inner_blog work_intro_image">
                <Image
                    src={imgWork}
                    alt="Picture of the author"
                    objectFit='cover'
                    layout='fill'
                    objectPosition="center"
                    placeholder="blur"
                    quality={100}
                />
            </div>
                <h2>Project Overview</h2>
                <p>Developer DAO is a DAO that exists to accelerate the education and impact of a new wave of web3 builders. The website was among the priorities for the DAO, because of its importance in bringing in new partners and sponsors</p>
                <h2>My Contributions</h2>
                <p>I was the champion of the project on the design side.The existing website did not represent the DAO, the design was so simple, and it did not deliver what it should have been delivering, first step was to analyze the flow and overall aesthetic appeal of the website and figure out the direction that we should take. After that, my job was to simplify the process as much as possible and make it intuitive for the users, as well as improve the visual appeal of the entire site. </p>
                <h2>My Contributions</h2>
                <p>I was the champion of the project on the design side.The existing website did not represent the DAO, the design was so simple, and it did not deliver what it should have been delivering, first step was to analyze the flow and overall aesthetic appeal of the website and figure out the direction that we should take. After that, my job was to simplify the process as much as possible and make it intuitive for the users, as well as improve the visual appeal of the entire site. </p>
            </div> 
        </div>
        </main>
        </div>
    )
}
export default DeveloperDAO

const data = {
    projectOverview:"Project Overview",
    projectOverviewPara:"Developer DAO is a DAO that exists to accelerate the education and impact of a new wave of web3 builders. The website was among the priorities for the DAO, because of its importance in bringing in new partners and sponsors",
    myContributions:"My Contributions",
    myContributionsPara:"I was the champion of the project on the design side. The existing website did not represent the DAO, the design was so simple, and it did not deliver what it should have been delivering, first step was to analyze the flow and overall aesthetic appeal of the website and figure out the direction that we should take. After that, my job was to simplify the process as much as possible and make it intuitive for the users, as well as improve the visual appeal of the entire site"
}