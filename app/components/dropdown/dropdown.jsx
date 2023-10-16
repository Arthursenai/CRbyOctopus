import NavLinks from '../navlinks/navlinks';
import styles from './dropdown.module.css';


function DropDown({ type }) {

    if (type === true) {
        return (
            <ul className={styles.navList}>
                
                <NavLinks className={styles.links} rota="/" text="Cadastro" />

            </ul>
        );
        }
}

export default DropDown;