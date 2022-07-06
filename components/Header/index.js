import Link from "next/link"

export default function Header() {
    return (
        <header className="navbar">
            <ul className="dekstop">
                <div className="navlink-left">
                    <li>
                        <Link href="/">
                            <a className="navlink">
                                <i className="material-icons md-30">menu</i>
                                <span style={{ textTransform: 'uppercase' }}>React Developer</span>
                            </a>
                        </Link>
                    </li>
                </div>
                <div className="navlink-right">
                    <li>
                        <Link href="/works">
                            <a className="navlink">
                                <i className="material-icons-outlined md-30">work_history</i>
                                <span>Works</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/experience">
                            <a className="navlink">
                                <i className="material-icons-outlined md-30">history</i>
                                <span>Experiences</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/education">
                            <a className="navlink">
                                <i className="material-icons-outlined md-30">school</i>
                                <span>Education</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/login">
                            <a className="navlink signBtn">
                                <span>Login</span>
                            </a>
                        </Link>
                    </li>
                </div>
            </ul>
            <ul className="mobile">
                <div className="navlink-left">
                    <li>
                        <Link href="/menu">
                            <a className="navlink">
                                <i className="material-icons md-30">menu</i>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/store">
                            <a className="navlink">
                                <i className="material-icons md-30">store</i>
                            </a>
                        </Link>
                    </li>
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
                    <li>
                        <Link href="/search">
                            <a className="navlink">
                                <i className="material-icons md-30">search</i>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/notif">
                            <a className="navlink">
                                <i className="material-icons md-30">notifications</i>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/account">
                            <a className="navlink">
                                <i className="material-icons md-30">account_circle</i>
                            </a>
                        </Link>
                    </li>
                </div>
            </ul>
        </header>
    )
}
