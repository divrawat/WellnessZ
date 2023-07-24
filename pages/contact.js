import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import styles from "../styles/contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faHeadphones, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

const Contact = () => {
    return (
        <>
            <Navbar />

            <div className={styles.backdrop}>
                {/* <img src="/contact-backdrop.png" /> */}
                <Image src="/contact-backdrop.png" width={800} height={350}/>
            </div>

            <div className={styles.headersection}>
                <div className={styles.databox}>
                    <h1>Talk To Us</h1>
                    <p>Got a question about the Busineswise app or wish to reach out to us for anything else?</p>


                    <div className={styles.contactcolumn}>
                        <div className={styles.flexcolumn}>
                            <div className={styles.headphone}>
                                <FontAwesomeIcon icon={faHeadphones} size="7x" />
                            </div>

                            <div className={styles.contactus}>
                                <h2>Customer Support</h2>
                                <p><a href="mailto:wellnessz@email.com"><FontAwesomeIcon icon={faEnvelope} /> Email Us </a> </p> &nbsp;&nbsp;&nbsp;&nbsp;
                                <p><a href="tel:+91 000000000"><FontAwesomeIcon icon={faPhone} /> Call Us </a></p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className={styles.locationcontainer}>
                <h2>Office Location <FontAwesomeIcon icon={faLocationDot} /> </h2>

                <div className={styles.address}>
                    <div>
                        <h3>Amritsar</h3>
                        <p>110, white enclave beside greenfield Majitha road amritsar, punjab 143001</p>
                    </div>

                    <div>
                        {/* <img src="/golden-temple.svg" alt=""  /> */}
                        <Image src="/golden-temple.svg" width={330} height={320}/>
                        <></>
                    </div>
                </div>
            </div>


            <div className={styles.faqcontainer}>
                <h2>FAQ</h2>
                <h3>Call/Email us or feel free to drop by.</h3>
                <h3>Coffee / Chai is on us!</h3>
            </div>

            <div style={{ marginBottom: "100px" }}></div>

            <Footer />
        </>
    )
}

export default Contact