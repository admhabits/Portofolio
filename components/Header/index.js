export default function Header() {
    return (
        <header className="navbar">
            <ul className="dekstop">
                <div className="navlink-left">
                    <li>
                        <a href="/store" className="navlink">
                            <i className="material-icons md-30">store</i>
                            <span>Toko</span>
                        </a>
                    </li>
                    <li>
                        <a href="/offers" className="navlink">
                            <i className="material-icons-outlined md-30">work_history</i>
                            <span>Penawaran</span>
                        </a>
                    </li>
                </div>
                <div className="navlink-middle">
                    <li>
                        <a href="/profile" className="navlink">
                            <i className="material-icons-outlined md-30">apartment</i>
                            <span>Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="/experience" className="navlink">
                            <i className="material-icons-outlined md-30">history</i>
                            <span>Experience</span>
                        </a>
                    </li>
                    <li>
                        <a href="/education" className="navlink">
                            <i className="material-icons-outlined md-30">school</i>
                            <span>Education</span>
                        </a>
                    </li>
                </div>
                <div className="navlink-right">
                    <li>
                        <a href="/login" className="navlink signBtn">
                            {/* <i className="material-icons md-30">account_circle</i> */}
                            <span>Login</span>
                        </a>
                    </li>
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
