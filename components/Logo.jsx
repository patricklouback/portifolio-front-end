import Image from 'next/image'
import logoJS from '../public/javascript.png'
import styles from '../styles/Logo.module.css'

export default function Logo() {
    return (
        <div className={styles.area}>
            <Image
                className={styles.img}
                src={logoJS}
                alt="Logo JavaScript" />
            <div className={styles.areaTitle}>
                <h1 className={styles.h1}>Patrick</h1>
                <h2 className={styles.h2}>Louback</h2>
            </div>
        </div>
    )
}