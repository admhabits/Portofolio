import Card from 'AppComponent/Card'
import Grid from 'AppComponent/Grid'
import Layout from 'AppComponent/Layouts'
import styles from 'styles/Home.module.css'

export default function Home() {
  return (
    <Layout title="Pengalaman">
      <div class="container">
        <header class="navbar">
          <ul class="dekstop">
            <div class="navlink-left">
              <li class="navlink"><a href="#toko" class="material-icons md-30">store</a>Toko</li>
              <li class="navlink"><a href="#hire" class="material-icons-outlined md-30">work_history</a>Jam Kerja</li>
            </div>
            <div class="navlink-middle">
              <li class="navlink">Pengalaman</li>
              <li class="navlink">Portofolio</li>
              <li class="navlink">Pendidikan</li>
            </div>
            <div class="navlink-right">
              <li class="navlink"><a href="#masuk" class="material-icons md-30">account_circle</a>Masuk</li>
            </div>
          </ul>
          <ul class="mobile">
            <div class="navlink-left">
              <li class="material-icons">menu</li>
              <li class="material-icons">store</li>
            </div>
            <div class="navlink search-page">
              <form>
                <button for="searchId" type="submit" class="material-icons button-search" id="searchform">
                  search
                </button>
                <input type="text" name="search" id="searchId" placeholder="Cari..." class="search-bar" />
              </form>
            </div>
            <div class="navlink-right">
              <li class="material-icons small-mobile">search</li>
              <li class="material-icons-outlined">notifications</li>
              <li class="material-icons">account_circle</li>
            </div>
          </ul>
        </header>
        <div class="hero">
          <h2 class="title heading">LEARN, REFLEX, IMPLEMENT &amp; SHARE</h2>
        </div>
        <div class="main-content">
          <div class="content">
            <h2 class="heading">Alam Santiko Wibowo</h2>
            <div class="line"></div>
            <p class="text-content">
              Hallo. Let me introduce, I'm Alam Santiko Wibowo,
              Full Stack React Developer Web &amp; Mobile Apps from Cilacap, Central Java - Indonesia.
              I really like to learn something new and interact with a lots of people.
              If you have any idea project to work with together.
              I will help you, to do something of your goal.
              Based on requirement as Programmer, I'm good at Git System Versioning &amp; RDBMS SQL and No-SQL. I can working with team collaboration.
            </p>
          </div>
          <div class="side-content">
            <span>Photo</span>
          </div>
        </div>
        <footer class="copyright">
          <span>Footer</span>
        </footer>
      </div>
    </Layout>
  )
}
