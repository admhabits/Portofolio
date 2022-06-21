import Head from 'next/head';
import styles from 'styles/Home.module.css'
import Footer from 'AppComponent/Footer'
import Header from 'AppComponent/Header'

export default function Layout(props) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content="Hire Programmer | Alam Santiko Wibowo" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Round" rel="stylesheet" />
            </Head>
            <main className={styles.main}>
                <div className="container" style={{ gridTemplateRows: `var(--appBarSize) repeat(${props.rows}, calc(100vh - 120px)) var(--appBarSize)` }}>
                    <Header />
                    {props.children}
                    <Footer />
                </div>
            </main>
        </>
    )
}
