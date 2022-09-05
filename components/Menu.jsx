import Link from 'next/link'
import styles from '../styles/Menu.module.css'

export default function Menu() {
    return (
        <div className={styles.externo}>
            <div className={styles.area}>
                <h1 className={styles.title}>Home</h1>
                <h1 className={styles.title}>Projetos</h1>
                <h1 className={styles.title}>Contato</h1>
            </div>
        </div>
    )
}