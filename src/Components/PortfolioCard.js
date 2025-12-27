// Components/PortfolioCard.js


import Header from "./Header";
import Avatar from "./Avatar";
import PersonalInfo from "./PersonalInfo";
import Bio from "./Bio";
import Likes from "./Likes";
import "./PortfolioCard.css";

export default function PortfolioCard() {
    return (
        <div className="portfolio-card">
            <Header />
            <div className="card-content">
                <div className="flex">
                    <Avatar />
                    <PersonalInfo />
                </div>
                <Bio />
                <Likes />
            </div>
        </div>
    )
}