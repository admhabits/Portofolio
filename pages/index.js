import Footer from 'AppComponent/Footer'
import Header from 'AppComponent/Header'
import Layout from 'AppComponent/Layouts'

export default function Home() {
  return (
    <Layout title="Pengalaman">
      <div className="container">
        <Header/>
        <div className="hero">
          <h2 className="title heading">LEARN, REFLEX, IMPLEMENT &amp; SHARE</h2>
        </div>
        <div className="main-content">
          <div className="content">
            <h2 className="heading">Alam Santiko Wibowo</h2>
            <div className="line"></div>
            <p className="text-content">
              Hallo. Let me introduce, I'm Alam Santiko Wibowo,
              Full Stack React Developer Web &amp; Mobile Apps from Cilacap, Central Java - Indonesia.
              I really like to learn something new and interact with a lots of people.
              If you have any idea project to work with together.
              I will help you, to do something of your goal.
              Based on requirement as Programmer, I'm good at Git System Versioning &amp; RDBMS SQL and No-SQL. I can working with team collaboration.
            </p>
          </div>
          <div className="side-content">
            <span>Photo</span>
          </div>
        </div>
        <Footer/>
      </div>
    </Layout>
  )
}
