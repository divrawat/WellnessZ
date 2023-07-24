import Link from 'next/link';
import styles from "../styles/NavFooter.module.css";
import { useRouter } from 'next/router';

const Navbar = () => {

  function disablenavbar2() {
    let x = document.getElementById("disable")
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else { x.style.display = "block" }
  }

  function disablenavbar() { document.getElementById("disable").style.display = "none"; }
  const router = useRouter();

  return (
    <>
      <nav className={styles.nav}>

        <div className={styles.span} onClick={disablenavbar2}>☰</div>
        <Link href="/"><div className={styles.logo}> WellnessZ</div></Link>

        <ul id="disable" onClick={disablenavbar}  >
          <li ><Link className={router.pathname == "/about" ? "active" : ""} href="/about" >About</Link></li>
          <li><Link className={router.pathname == "/contact" ? "active" : ""} href="/contact">Contact</Link></li>
          <li ><Link className={router.pathname == "/blog" ? "active" : ""} href="/">Blog</Link></li>
        </ul>

      </nav>

    </>
  )
}

export default Navbar