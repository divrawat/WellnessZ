import styles from "../styles/Homepage.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsToDot, faArrowsToEye } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from "next/image";

const HomepageComponents = () => {

    const TransitionDuration = 0.6;

    const [ref1, inView1] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref2, inView2] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref3, inView3] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref4, inView4] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref5, inView5] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref6, inView6] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref7, inView7] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref8, inView8] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref9, inView9] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref10, inView10] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref11, inView11] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref12, inView12] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref13, inView13] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref14, inView14] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref15, inView15] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref16, inView16] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref17, inView17] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref18, inView18] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref19, inView19] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref20, inView20] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref21, inView21] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref22, inView22] = useInView({ rootMargin: '0px 0px -100px 0px' });

    const [ref23, inView23] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref24, inView24] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref25, inView25] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref26, inView26] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref27, inView27] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref28, inView28] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref29, inView29] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref30, inView30] = useInView({ rootMargin: '0px 0px -100px 0px' });
    const [ref31, inView31] = useInView({ rootMargin: '0px 0px -100px 0px' });

    const variants = { hidden: { opacity: 0, y: 150 }, visible: { opacity: 1, y: 0 }, };




    return (
        <>

            {/* ------------------------ */}

            <div className={styles.givemargin}></div>

            <div className={styles.row}>
                <div className={styles.column0}>

                    <div className={styles.headcontainer}>
                        <motion.h1 initial={{ opacity: 0.1 }} animate={{ opacity: 1 }} transition={{ duration: 0.99 }} className={styles.heading}
                        >
                            Join The New Age B2B Trading Platform
                        </motion.h1>


                        <p className={styles.firstcompartmentp}> Take your Business online and buy or sell on the new age b2b textile marketplace Platform</p>
                        <div>

                            <div className={styles.btndiv}>
                                <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.99 }}
                                    className={styles.btnstyle}><FontAwesomeIcon icon={faArrowsToDot} /> Comming Soon</motion.button>
                            </div>

                            <div className={styles.btndiv2}>
                                <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.99 }}
                                    className={styles.btnstyle2}><FontAwesomeIcon icon={faArrowsToEye} /> Comming Soon</motion.button>
                            </div>
                        </div>

                    </div>

                </div>


                <div className={styles.column1}>
                    {/* <motion.img src="/phoneImg.png" className={styles.phoneImg}
                        initial={{ translateY: '100%', opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} transition={{ duration: 0.4 }} /> */}


                    <Image className={styles.phoneImg} src="/phoneImg.png" width={600} height={650} />


                </div>


            </div>
            {/* ------------------------ */}


            <motion.div ref={ref1} initial="hidden" animate={inView1 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>
                {/* <motion.img ref={ref1} initial="hidden" animate={inView1 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}
                 className={styles.plantImg} src="/plant.png"/> */}

                <Image className={styles.plantImg} src="/plant.png" height={200} width={200} />
            </motion.div>

            <div className={styles.secondCompartment}>
                <div className={styles.seconddiv}>
                    <span className={styles.belowplant}>WellnessZ</span>
                </div>


                <motion.div className={styles.secondCompartmentheading}
                    ref={ref2} initial="hidden" animate={inView2 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>
                    We Are In The Business Of Enhancing Your Business</motion.div>


                <motion.p
                    ref={ref3} initial="hidden" animate={inView3 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}
                    className={styles.secondCompartmentp}>We are not just enabling your business with technology but creating value by facilitating stock sourcing for your business at great prices from businesses you can trust. furthermore we provide digital bandwidth for scaling your business to reach and cater the ever-expanding online buyer base.</motion.p>
            </div>

            {/* ------------------------ */}

            <div className={styles.videocontainer} style={{ textAlign: "center" }}>
                <video src="/mobiles.mp4" autoPlay muted loop className={styles.video}></video>

            </div>
            {/* ------------------------ */}




            <div className={styles.fifthrow}>
                <div className={styles.column3}>

                    <div className={styles.fourthcompartment} >
                        {/* <img src="/Dumbbell.png" className={styles.dumbellIcon} /> */}
                        <Image src="/Dumbbell.png" className={styles.dumbellIcon} width={150} height={150} />

                        <motion.h2 className={styles.fourthcompartmentheading} ref={ref4} initial="hidden" animate={inView4 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>B2B Buying & Selling Made Simple, Efficient And Effortless</motion.h2>

                    </div>

                    <motion.p style={{ fontSize: "17px" }} ref={ref5} initial="hidden" animate={inView5 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}
                        className={styles.firstcompartmentp}>We understand b2B Ecommerce is complex, But not anymore. busineswise onboards verified sellers for you to buy your stock from and through our optimized functionality and nonchalant design we ensure that you can start your online selling journey with ease.</motion.p>
                </div>


                <motion.div className={styles.column4} ref={ref6} initial="hidden" animate={inView6 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>
                    {/* <motion.img ref={ref6} initial="hidden" animate={inView6 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} className={styles.fouthImgphone} src="/dhanda.png" /> */}
                    <Image src="/dhanda.png" className={styles.fouthImgphone} height={350} width={140} />
                </motion.div>


            </div>
            {/* ------------------------ */}

            <div className={styles.sixthrow}>
                <div className={styles.column5}>
                    <motion.h2 className={styles.fifthcompartmentheading} ref={ref7} initial="hidden" animate={inView7 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>
                        Discover Market To <span className={styles.spancolor}> Buy</span> Stock For Your Business
                    </motion.h2>
                </div>
                <motion.div className={styles.column6} ref={ref8} initial="hidden" animate={inView8 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>
                    <p style={{ color: "#9f9a9a", fontFamily: "system-ui" }}>Find Verified businesses and browse their stocks to place a buy order, that too at great prices to Skyrocket your margins.</p>
                </motion.div>
            </div>
            {/* ------------------------ */}


            <div className={styles.sixthgridContainer}>

                <motion.div className={styles.sixthgriditem} ref={ref9} initial="hidden" animate={inView9 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>
                    {/* <img className={styles.sixthImg} src="/sixth.png" /> */}
                    <Image className={styles.sixthImg} src="/sixth.png" height={300} width={300} />
                </motion.div>

                <motion.div className={styles.sixthgriditem} ref={ref10} initial="hidden" animate={inView10 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>
                    <div className={styles.blur}>
                    </div>
                    {/* <img className={styles.sixthphone} src="/sixthphone.png" /> */}
                    <Image className={styles.sixthphone} src="/sixthphone.png" height={530} width={250} />
                </motion.div>



                <div className={styles.sixthgriditem}>
                    <div className={styles.sixthgrid}>

                        <motion.div className={styles.sixthboxsitems} ref={ref11} initial="hidden" animate={inView11 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>1</motion.div>
                        <motion.div className={styles.sixthbox} ref={ref11} initial="hidden" animate={inView11 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>
                            <h2 className={styles.sixthH2}>Download The App</h2>
                            <p className={styles.sixthP}>It All Start By Downloading The Busineswise App on Your Phone.</p>
                        </motion.div>

                        <motion.div className={styles.sixthboxsitems} ref={ref12} initial="hidden" animate={inView12 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>2</motion.div>
                        <motion.div className={styles.sixthbox} ref={ref12} initial="hidden" animate={inView12 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>
                            <h2 className={styles.sixthH2}>Complete Your Billing Details</h2>
                            <p className={styles.sixthP}>Before Your First Order, You Need to give your Billing Details Like GST, Business Name And Address.</p>
                        </motion.div>


                        <motion.div className={styles.sixthboxsitems} ref={ref13} initial="hidden" animate={inView13 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>3</motion.div>
                        <motion.div className={styles.sixthbox} ref={ref13} initial="hidden" animate={inView13 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>
                            <h2 className={styles.sixthH2}>Start Ordering</h2>
                            <p className={styles.sixthP}>And That's it...</p>
                        </motion.div>


                    </div>
                    <motion.button className={styles.sixthbutton} ref={ref14} initial="hidden" animate={inView14 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>Start Buying Wisely</motion.button>
                </div>
            </div>

            {/* ------------------------ */}

            <div className={styles.seventhrow}>
                <motion.div className={styles.column5} ref={ref15} initial="hidden" animate={inView15 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>
                    <h2 className={styles.seventhcompartmentheading}>
                        Grow Your Business By <span className={styles.seventhspancolor}> Selling</span> Online
                    </h2>
                </motion.div>
                <motion.div className={styles.column6} ref={ref16} initial="hidden" animate={inView16 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>
                    <p style={{ color: "#9f9a9a", fontFamily: "system-ui" }}>Find Verified businesses and browse their stocks to place a buy order, that too at great prices to Skyrocket your margins.</p>
                </motion.div>
            </div>
            {/* ------------------------ */}



            <div className={styles.seventhgridContainer}>

                <motion.div className={styles.sixthgriditem} ref={ref17} initial="hidden" animate={inView17 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>

                    {/* <img className={styles.seventhImg} src="/seventh.png" /> */}
                    <Image className={styles.seventhImg} src="/seventh.png" height={600} width={300} />
                </motion.div>

                <motion.div className={styles.sixthgriditem} ref={ref18} initial="hidden" animate={inView18 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}><div style={{ backgroundColor: "#e0313159" }} className={styles.blur}>
                </div>

                    {/* <img className={styles.sixthphone} src="/sixthphone.png" /> */}
                    <Image className={styles.sixthphone} src="/sixthphone.png" height={530} width={250} />

                </motion.div>



                <div className={styles.sixthgriditem}>
                    <div className={styles.seventhgrid}>

                        <motion.div ref={ref19} initial="hidden" animate={inView19 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} style={{ boxShadow: "0 0 53px 15px #e0313159" }} className={styles.sixthboxsitems}>1</motion.div>
                        <motion.div className={styles.sixthbox} ref={ref19} initial="hidden" animate={inView19 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>
                            <h2 className={styles.sixthH2}>Activate Your Seller Account</h2>
                            <p className={styles.sixthP}>After Downloading Busineswise Click on Activate Sell Button to Complete your Seller Verification, Relax It’ll take Just Few Minutes</p>
                        </motion.div>

                        <motion.div ref={ref20} initial="hidden" animate={inView20 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} style={{ boxShadow: "0 0 53px 15px #e0313159" }} className={styles.sixthboxsitems}>2</motion.div >
                        <motion.div ref={ref20} initial="hidden" animate={inView20 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} className={styles.sixthbox}>
                            <h2 className={styles.sixthH2}>Add Your Products</h2>
                            <p className={styles.sixthP}>Your Business Is online. Now add Your Products and prices easily</p>
                        </motion.div >


                        <motion.div ref={ref21} initial="hidden" animate={inView21 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} style={{ boxShadow: "0 0 53px 15px #e0313159" }} className={styles.sixthboxsitems}>3</motion.div>
                        <motion.div ref={ref21} initial="hidden" animate={inView21 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} className={styles.sixthbox}>
                            <h2 className={styles.sixthH2}>Start Selling</h2>
                            <p className={styles.sixthP}>Now You Are Ready...</p>
                        </motion.div>


                    </div>
                    <motion.button ref={ref22} initial="hidden" animate={inView22 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} className={styles.sixthbutton}>Start Buying Wisely</motion.button>
                </div>
            </div>


            {/* ------------------------ */}

            -
            {/* ------------------------ */}            <h2 className={styles.head24}>MORE TRICKS UP THE SLEEVE</h2>{/* ------------------------ */}

            <div className={styles.eightrow}>
                <div className={styles.column7}>
                    <motion.h2 ref={ref23} initial="hidden" animate={inView23 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} className={styles.column7heading}>Explore <span style={{ color: "#8835F2" }}>Open Market</span> To Get The Deals You Deserve</motion.h2>
                    <motion.p ref={ref24} initial="hidden" animate={inView24 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} className={styles.column7P}>Open Market Lets You Post Requirements As A Buyer And Adding Lots For Sales As A Seller In Response To Your Posts Interested Buyers And Sellers Can Place Their Bids In Open Market</motion.p>
                </div>


                <motion.div className={styles.column8} ref={ref25} initial="hidden" animate={inView25 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} >
                    {/* <motion.img ref={ref25} initial="hidden" animate={inView25 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} className={styles.column8Img} src="/path1.png" /> */}

                    <Image className={styles.column8Img} src="/path1.png" width={530} height={530} />
                </motion.div>
                <svg
                    data-aos="fade-up"
                    style={{ margin: "-5em 0em 0em 18em" }}
                    viewBox="0 0 546 247"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="546"
                    height="247"
                >
                    <path
                        stroke="#878787"
                        strokeWidth="1.74577"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="9.93 12.42"
                        d="M544.371 1C487.261 72.5942 324.622 77.1465 290.274 77.1465C251.122 76.1768 174.757 77.2307 146.923 87.6081C140.827 89.8805 135.167 93.4815 129.121 95.8833C81.9506 114.624 2.54845 165.265 1 245.165"
                    />
                </svg>
            </div>


            {/* ------------------------ */}


            <div className={styles.eightrow2} id="ffff">

                <motion.div id="myimg" style={{ marginTop: "-25px" }} className={styles.column8} ref={ref26} initial="hidden" animate={inView26 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>
                    {/* <motion.img ref={ref26} initial="hidden" animate={inView26 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} className={styles.column8Img} src="/path2.png" /> */}
                    <Image className={styles.column8Img} src="/path2.png" width={500} height={500} />

                </motion.div>

                <div className={styles.column7} id="mycolumn7container">
                    <motion.h2 ref={ref27} initial="hidden" animate={inView27 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} className={styles.column7heading}><span style={{ color: "#FCAF17" }}>Manage</span> Everything From One App</motion.h2>
                    <motion.p ref={ref28} initial="hidden" animate={inView28 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} className={styles.column7P}>Now Experience Ease Of Doing Business In A Wise Way By Managing Buying, Selling And Promoting From One App.</motion.p>
                </div>
                <svg
                    width="495"
                    style={{ margin: "0em 0em -4em 27em" }}
                    height="242"
                    viewBox="0 0 495 242"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_d_94_313)">
                        <path
                            d="M5 1C11.8936 9.39762 28.764 31.9083 41.0972 54.7699C53.4305 77.6314 74.061 115.183 82.8347 131.1C95.7445 148.773 136.003 185.622 193.759 191.639C215.264 193.879 230.868 195.215 242.003 195.959C257.216 196.974 277.031 195.841 292.271 195.368L339.652 193.895C382.392 191.889 472.159 196.903 489.305 233"
                            stroke="#878787"
                            strokeWidth="1.81728"
                            strokeLinejoin="round"
                            strokeDasharray="9.02 11.28"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_d_94_313"
                            x="0.297684"
                            y="0.42334"
                            width="493.828"
                            height="240.966"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_94_313" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_94_313" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>
            {/* ------------------------ */}


            <div className={styles.eightrow}>

                <div className={styles.column7}>
                    <motion.h2 ref={ref29} initial="hidden" animate={inView29 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} className={styles.column7heading}>The House Always <span style={{ color: "#E3393C" }}>Wins</span></motion.h2>
                    <motion.p ref={ref30} initial="hidden" animate={inView30 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} className={styles.column7P}>Mint Cashback In Form Of Wise Cash Everytime You Do Business With Us Because It Pays To Be Wise.</motion.p>
                </div>


                <motion.div className={styles.column8} ref={ref31} initial="hidden" animate={inView31 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }}>
                    {/* <motion.img ref={ref31} initial="hidden" animate={inView31 ? 'visible' : 'hidden'} variants={variants} transition={{ duration: TransitionDuration }} className={styles.column8Img} src="/path3.png" /> */}

                    <Image className={styles.column8Img} src="/path3.png" width={530} height={530} />
                </motion.div>
            </div>

            {/* ------------------------ */}



            <div>
                <img src="/breifcase-logo.svg" alt="" srcSet="" className={styles.briefcaseLogo} />
            </div>

            {/* ------------------------ */}

            <div className={styles.ninthrowparent}>
                <div className={styles.ninthrow}>
                    <div className={styles.column9}>

                        {/* <img src="/b.svg" alt="" srcSet="" /> */}
                        <Image src="/b.svg" alt="" srcSet="" width={130} height={130} />
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
                        {/* <img className={styles.column10Img} src="/jumbo.png" alt="" srcSet="" /> */}
                        <Image className={styles.column10Img} src="/jumbo.png" alt="" srcSet="" width={400} height={400} />
                    </div>
                </div>
            </div>



            <div style={{ marginBottom: "100px" }}></div>

        </>
    )
}

export default HomepageComponents