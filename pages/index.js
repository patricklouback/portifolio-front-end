import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Patrick Louback | DEV</title>
        <meta name="description" content="Portifólio Patrick Louback" />
        <link rel="icon" href="/javascript.png" />
      </Head>
      <Header />

      <div className={styles.main}>
        <div className={styles.textBox}>
          <h1 className={styles.title}>hello</h1>
          <h2 className={styles.description}>Sou um engenheiro de controle e automação
            que tem atuado com projetos de eletrônica
            embarcada, e usa todo esse know-how para
            desenvolver aplicações fluidas, limpas e
            funcionais.
          </h2>
        </div>
        <div className={styles.linha}></div>
        <Image
          src={'/perfil.png'}
          width={'450px'}
          height={'450px'}
        />
      </div>

    </>
  )
}
