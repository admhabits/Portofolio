import Card from 'AppComponent/Card'
import Grid from 'AppComponent/Grid'
import Layout from 'AppComponent/Layouts'
import styles from 'styles/Home.module.css'

export default function Home() {
  return (
    <Layout title="Pengalaman">
      <div className="container">
        <header className="navbar">
          <ul className="dekstop">
            <div className="navlink-left">
              <li className="navlink"><a href="#toko" className="material-icons md-30">store</a>Toko</li>
              <li className="navlink"><a href="#hire" className="material-icons-outlined md-30">work_history</a>Jam Kerja</li>
            </div>
            <div className="navlink-middle">
              <li className="navlink">Pengalaman</li>
              <li className="navlink">Portofolio</li>
              <li className="navlink">Pendidikan</li>
            </div>
            <div className="navlink-right">
              <li className="navlink"><a href="#masuk" className="material-icons md-30">account_circle</a>Masuk</li>
            </div>
          </ul>
          <ul className="mobile">
            <div className="navlink-left">
              <li className="material-icons">menu</li>
              <li className="material-icons">store</li>
            </div>
            <div className="navlink search-page">
              <form>
                <button htmlFor="searchId" type="submit" className="material-icons button-search" id="searchform">
                  search
                </button>
                <input type="text" name="search" id="searchId" placeholder="Cari..." className="search-bar" />
              </form>
            </div>
            <div className="navlink-right">
              <li className="material-icons small-mobile">search</li>
              <li className="material-icons-outlined">notifications</li>
              <li className="material-icons">account_circle</li>
            </div>
          </ul>
        </header>
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
        <footer className="copyright">
          <span>Footer</span>
        </footer>
      </div>
    </Layout>
  )
}
