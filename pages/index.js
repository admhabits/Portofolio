import Footer from 'AppComponent/Footer'
import Header from 'AppComponent/Header'
import Layout from 'AppComponent/Layouts'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout title="Alam Wibowo | Software Engineer">
      <div className="container">
        <Header />
        <div className="hero">
          <h2 className="title heading">FULL STACK REACT DEVELOPER</h2>
        </div>
        <div className="main-content">
          <div className="content">
            <h2 className="heading">Alam Santiko Wibowo</h2>
            <div className="line"></div>
            <p className="text-content">
              {
                `
                Hallo. Let me introduce myself, I'm Alam Santiko Wibowo, Full Stack React Developer Web & Mobile Apps from Cilacap, Central Java - Indonesia. I really like to learn something new and interact with lots of people. Suppose you have any idea project to work with. I will help you to do something about your goal. Based on requirements as a Programmer, I'm good at Git System Versioning & RDBMS SQL and No-SQL. I can work with team collaboration.
              `
              }
            </p>
            <div className="download-cv">
              <a href="/CV/CV%20(14).pdf" className="btn btn-primary btn-download">
                <span className="icon material-icons">file_download</span>
                <span> Unduh CV</span>
              </a>
            </div>
          </div>
          <div className="side-content">
            <Image src={"/images/me.jpeg"} width={250} height={250} className="rounded" layout="fixed" objectFit='contain' />
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  )
}
