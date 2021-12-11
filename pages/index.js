import Head from 'next/head';
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List| Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div >
      
      
<h1 className={styles.title}>Homepage</h1>
  <p className={styles.text}>It ishas dis as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

</p>
<Link href="/ninjas">
  <a className={styles.btn}>See Ninja Listing</a></Link>

    </div>
    </>
  )
}
