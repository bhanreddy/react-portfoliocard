import './PortfolioCard.css'
function WelcomeMessage() {
    const handleToggleTheme = () => {
        document.body.classList.toggle("dark-theme");
    };
    return (
        <div>
            <button onClick={handleToggleTheme}
                className="theme-toggle">☼ ☾  Toggle Theme</button>
            <h2>Congratulations!</h2>
            <p>You just created your first React component</p>
        </div>
    )
}
export default WelcomeMessage;