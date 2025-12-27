// Components/PersonalInfo.js

export default function PersonalInfo() {
    const name = "BhanuReddy";
    const role = "Frontend Developer";
    const location = "Hyderabad";
    const email = "bhanureddy123@gmail.com";
    return (
        <div className="personal-info">
            <h2 className="name">{name}</h2>
            <p className="role">{role}</p>
            <p className="location">{location}</p>
            <p className="email">{email}</p>


        </div>
    )
} 