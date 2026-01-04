import React, { useEffect, useState } from 'react';
import './loading-screen.css';

const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const [text, setText] = useState("INITIALIZING");

    useEffect(() => {
        const texts = ["INITIALIZING", "LOADING ASSETS", "CONNECTING...", "ALMOST THERE"];
        let textIndex = 0;

        const textInterval = setInterval(() => {
            textIndex = (textIndex + 1) % texts.length;
            setText(texts[textIndex]);
        }, 800);

        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    clearInterval(textInterval);
                    setTimeout(() => {
                        setIsFading(true);
                        setTimeout(onComplete, 800); // Wait for fade out transition
                    }, 500);
                    return 100;
                }
                // Randomize progress increments for "realistic" feel
                const increment = Math.random() * 15;
                return Math.min(prev + increment, 100);
            });
        }, 200);

        return () => {
            clearInterval(progressInterval);
            clearInterval(textInterval);
        };
    }, [onComplete]);

    return (
        <div className={`loading-screen ${isFading ? 'fade-out' : ''}`}>
            <div className="loading-content">
                <div className="loader-core"></div>
                <div className="loading-text">SYSTEM LOADING</div>
                <div className="loading-subtext">[{text}]... {Math.round(progress)}%</div>
                <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
