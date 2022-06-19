export default function Header() {
    return (
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
    )
}
