import React, { useEffect, useState } from "react";
import './footer.css'
function Footer() {
    const [shouldFooterBeFixed, setShouldFooterBeFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('.footer-container');
            const screenHeight = window.innerHeight;
            const contentHeight = '90vh';
            setShouldFooterBeFixed(screenHeight >= contentHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className={shouldFooterBeFixed ? "footer-container fixed-footer" : "footer-container"}>
            <div className="footer-text">
                அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. © 2024 தமிழ் இலக்கிய மன்றம்
            </div>
        </div>
    );
}

export default Footer