// Components/Bio.js


export default function Bio() {
    const bioText = "I am a passionate frontend developer with a strong background in web development. I love turning complex problems into simple and effective solutions."
    const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git", "GitHub"];

    return (
        <div className="bio-section">
            <h3>About Me</h3>
            <p className="bio-text">{bioText}</p>
            <h3>Skills</h3>
            <div className="skill-container">
                {skills.map((skills, index) => (
                    <span key={index} className="skill-tag">{skills}</span>
                ))}
            </div>
        </div>
    )
}