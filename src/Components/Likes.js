import React, { useState } from "react";


export default function Likes() {
    const [likes, setLikes] = useState(35);
    const updateLikes = () => {
        if (likes === 35) {
            setLikes(likes + 1);
        } else {
            setLikes(likes - 1);
        }
    }
    return (
        <div className="likes dark-theme " >
            <h3 className="likes-title" >Likes</h3>
            <button
                onClick={updateLikes}> &hearts; {likes}</button>
        </div>
    )
}