import Head from 'next/head';
import Header from 'AppComponent/Header';
import Footer from 'AppComponent/Footer';

export default function Layout(props) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content="Hire Programmer | Alam Santiko Wibowo" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}
