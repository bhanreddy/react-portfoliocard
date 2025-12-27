// components/Header.js
import './PortfolioCard.css'
export default function Header() {
    const handleToggleTheme = () => {
        document.body.classList.toggle("dark-theme");
    };
    return (
        <header className="portfolio-header">
            <h1>Developer Portfolio</h1>
            <button onClick={handleToggleTheme}
                className="theme-toggle">☼ ☾  Toggle Theme</button>
            <div className="header-decoration">

            </div>
        </header>
    );
}