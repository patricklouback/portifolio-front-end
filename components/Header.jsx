import styles from '../styles/Header.module.css'
import Logo from './Logo'
import Menu from './Menu'

export default function Header(){
    return(
        <div className={styles.area}>
            <Logo/>
            <Menu/>
        </div>
    )
}