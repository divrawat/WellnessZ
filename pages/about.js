import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import styles from "../styles/about.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowsToDot, faArrowsToEye, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Image from "next/image";

const About = () => {
    const [activeButton, setActiveButton] = useState(null);
    const handleButtonClick = (id) => {
        setActiveButton(id === activeButton ? null : id);
    };

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <h1>About Us</h1>
                <p>WellnessZ is a new-age B2B e-commerce platform that facilitates seamless and efficient Buying and Selling through a secured transactional marketplace. Currently working in the uncharted textile industry, catering from Institutions to MSME's we provide digital bandwidth along the entire value chain. We also aim to revolutionize the concept of surplus stock sourcing through our Open trade ecosystem, a space that enables businesses to cut through the impediments of Inventory management with Bidding and Reverse Bidding mechanism. Breaking through the complexities of e-commerce we are creating a simplified experience of control and growth by enabling businesses to create their online stores and add their bulk stock in it for selling online, All managed through one App. Addressing the capital crunch in the segment, we will provide our customers with smart BNPL solutions to reduce the intention-action gap in the B2B trade.

                </p>
            </div>


            <div className={styles.container2}>
                <h2>People</h2>

                <div className={styles.founderrow}>

                    <div className={styles.column1}>
                        {/* <img src="/pranav.jpeg" /> */}
                        <Image src="/pranav.jpeg" width={500} height={500} />
                        <div className={styles.ceoname}>Simarpreet Singh</div>
                        <p style={{ marginTop: "10px", color: "#878787" }}>Founder, CEO</p>
                    </div>

                    <div className={styles.column2}>
                        <p>Pranav Founded busineswise in 2023 with the idea of joining taditional markets with Technology and enhancing the b2b landscape of indian markets</p>

                        <p>Connect on Social Media </p>

                        <div className={styles.socialmediacontainer}>
                            <a href="#">   <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} size="2x" /></a>
                            <a href="#">  <FontAwesomeIcon className={styles.instagram} icon={faInstagram} size="2x" /></a>
                            <a href="#">  <FontAwesomeIcon className={styles.github} icon={faGithub} size="2x" /></a>
                        </div>

                    </div>

                </div>
            </div>


            <div className={styles.container3}>
                <div className={styles.membersrow}>
                    <div className={styles.memberImages}>
                        {/* <img src="/pranav.jpeg" /> */}
                        <Image src="/pranav.jpeg" width={500} height={500} />
                        <h2>Divyanshu Rawat</h2>

                        <button className={styles.biobutton} v onClick={() => handleButtonClick(1)}>
                            {activeButton === 1 ? 'Hide bio' : 'Show bio'}&nbsp; <FontAwesomeIcon icon={faArrowCircleDown} />
                        </button>
                        <p hidden={activeButton !== 1}>1 am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas</p>
                        <div hidden={activeButton !== 1} className={styles.membersocialmedia}>
                            <a href="#">   <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} size="2x" /></a>
                            <a href="#">  <FontAwesomeIcon className={styles.instagram} icon={faInstagram} size="2x" /></a>
                            <a href="#">  <FontAwesomeIcon className={styles.github} icon={faGithub} size="2x" /></a>
                        </div>
                    </div>


                    <div className={styles.memberImages}>
                        {/* <img src="/pranav.jpeg" /> */}
                        <Image src="/pranav.jpeg" width={500} height={500} />
                        <h2>Divyanshu Rawat</h2>

                        <button className={styles.biobutton} onClick={() => handleButtonClick(2)}>
                            {activeButton === 2 ? 'Hide bio' : 'Show bio'}&nbsp; <FontAwesomeIcon icon={faArrowCircleDown} />
                        </button>
                        <p hidden={activeButton !== 2}>2 am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas</p>
                        <div hidden={activeButton !== 2} className={styles.membersocialmedia}>
                            <a href="#">   <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} size="2x" /></a>
                            <a href="#">  <FontAwesomeIcon className={styles.instagram} icon={faInstagram} size="2x" /></a>
                            <a href="#">  <FontAwesomeIcon className={styles.github} icon={faGithub} size="2x" /></a>
                        </div>
                    </div>


                    <div className={styles.memberImages}>
                        {/* <img src="/pranav.jpeg" /> */}
                        <Image src="/pranav.jpeg" width={500} height={500} />
                        <h2>Divyanshu Rawat</h2>

                        <button className={styles.biobutton} onClick={() => handleButtonClick(3)}>
                            {activeButton === 3 ? 'Hide bio' : 'Show bio'}&nbsp; <FontAwesomeIcon icon={faArrowCircleDown} />
                        </button>
                        <p hidden={activeButton !== 3}>3 am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas</p>
                        <div hidden={activeButton !== 3} className={styles.membersocialmedia}>
                            <a href="#">   <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} size="2x" /></a>
                            <a href="#">  <FontAwesomeIcon className={styles.instagram} icon={faInstagram} size="2x" /></a>
                            <a href="#">  <FontAwesomeIcon className={styles.github} icon={faGithub} size="2x" /></a>
                        </div>
                    </div>


                    <div className={styles.memberImages}>
                        {/* <img src="/pranav.jpeg" /> */}
                        <Image src="/pranav.jpeg" width={500} height={500} />
                        <h2>Divyanshu Rawat</h2>

                        <button className={styles.biobutton} onClick={() => handleButtonClick(4)}>
                            {activeButton === 4 ? 'Hide bio' : 'Show bio'}&nbsp; <FontAwesomeIcon icon={faArrowCircleDown} />
                        </button>
                        <p hidden={activeButton !== 4}>4 am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas</p>
                        <div hidden={activeButton !== 4} className={styles.membersocialmedia}>
                            <a href="#">   <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} size="2x" /></a>
                            <a href="#">  <FontAwesomeIcon className={styles.instagram} icon={faInstagram} size="2x" /></a>
                            <a href="#">  <FontAwesomeIcon className={styles.github} icon={faGithub} size="2x" /></a>
                        </div>
                    </div>


                    <div className={styles.memberImages}>
                        {/* <img src="/pranav.jpeg" /> */}
                        <Image src="/pranav.jpeg" width={500} height={500} />
                        <h2>Divyanshu Rawat</h2>


                        <button className={styles.biobutton} onClick={() => handleButtonClick(5)}>
                            {activeButton === 5 ? 'Hide bio' : 'Show bio'}&nbsp; <FontAwesomeIcon icon={faArrowCircleDown} />
                        </button>
                        <p hidden={activeButton !== 5}>5 am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas</p>
                        <div hidden={activeButton !== 5} className={styles.membersocialmedia}>
                            <a href="#">   <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} size="2x" /></a>
                            <a href="#">  <FontAwesomeIcon className={styles.instagram} icon={faInstagram} size="2x" /></a>
                            <a href="#">  <FontAwesomeIcon className={styles.github} icon={faGithub} size="2x" /></a>
                        </div>
                    </div>


                    <div className={styles.memberImages}>
                        {/* <img src="/pranav.jpeg" /> */}
                        <Image src="/pranav.jpeg" width={500} height={500} />
                        <h2>Divyanshu Rawat</h2>

                        <button className={styles.biobutton} onClick={() => handleButtonClick(6)}>
                            {activeButton === 6 ? 'Hide bio' : 'Show bio'}&nbsp; <FontAwesomeIcon icon={faArrowCircleDown} />
                        </button>

                        <p hidden={activeButton !== 6}>6 am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas I am dskncas</p>
                        <div hidden={activeButton !== 6} className={styles.membersocialmedia}>
                            <a href="#">   <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} size="2x" /></a>
                            <a href="#">  <FontAwesomeIcon className={styles.instagram} icon={faInstagram} size="2x" /></a>
                            <a href="#">  <FontAwesomeIcon className={styles.github} icon={faGithub} size="2x" /></a>
                        </div>


                    </div>
                </div>
            </div>


            <div className={styles.ninthrowparent}>
                <div className={styles.ninthrow}>
                    <div className={styles.column9}>
                        {/* <img src="/b.svg" alt="" srcSet="" /> */}
                        <Image src="/b.svg" alt="" srcSet="" width={100} height={100} />
                        <h2>Start B2B Buying & Selling online</h2>
                        <p>Take your business online with busineswise and Experience Growth in a simple, efficient and effortless wise way.</p>

                        <div className={styles.btndiv}>
                            <button className={styles.btnstyle}><FontAwesomeIcon icon={faArrowsToDot} /> Comming Soon</button>
                        </div>
                        <div className={styles.btndiv2}>
                            <button className={styles.btnstyle2}><FontAwesomeIcon icon={faArrowsToEye} /> Comming Soon</button>
                        </div>
                    </div>
                    <div className={styles.column10}>
                        {/* <img className={styles.column10Img} src="/jumbo.png" alt=""  /> */}
                        <Image className={styles.column10Img} src="/jumbo.png" alt="" width={400} height={400} />
                    </div>
                </div>
            </div>

            <div style={{ marginBottom: "100px" }}></div>
            <Footer />

        </>
    )
}

export default About