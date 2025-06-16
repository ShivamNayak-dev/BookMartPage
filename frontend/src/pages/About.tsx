import React from 'react';
import { useNavigate } from "react-router-dom";
import "../styles/About.css";

export default function About() {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/auth");
    };

    return (
        <div className="about-container new-about">
            <div className="about-header">
                <h1 className="brand-name">📖 BookMart</h1>
                <p className="tagline">
                    Your one-stop online bookstore — discover, read, and enjoy!
                </p>
            </div>

            <div className="about-sections">
                <div className="about-card">
                    <h2>🎯 Our Goal</h2>
                    <p>
                        At BookVerse, we bring a universe of books to your fingertips. Whether you're a student, avid reader, or casual browser, explore curated collections for everyone.
                    </p>
                </div>

                <div className="about-card">
                    <h2>✨ Why Choose Us?</h2>
                    <ul>
                        <li>📚 Vast collection across categories</li>
                        <li>🔍 Smart search & intuitive browsing</li>
                        <li>👤 Personalized user experience</li>
                        <li>🛍️ Seller portal for independents</li>
                        <li>🔐 Secure login & data privacy</li>
                    </ul>
                </div>

                <div className="about-card">
                    <h2>👩‍💻 Meet the Creator</h2>
                    <p>
                        Built by a passionate developer blending tech and literature to elevate the reading experience. Modern web meets the magic of books.
                    </p>
                </div>
            </div>

            <div className="cta-container">
                <button className="sign-in-button" onClick={handleSignIn}>
                    🚀 Get Started — Sign In
                </button>
            </div>
        </div>
    );
}
