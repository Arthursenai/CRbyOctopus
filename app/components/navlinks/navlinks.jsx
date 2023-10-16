import Link from "next/link";
import  styles from './navlinks.module.css';


const NavLinks = ({ rota, text }) => {

    return (
        <Link className={styles.links} href={rota}>{text}</Link>
    )

}

export default NavLinks;