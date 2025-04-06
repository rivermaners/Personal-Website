import React, { useEffect, useState } from "react";
import "../styles/fonts.css";
import "../styles/homeStyle.css";
import "../styles/global.css";
import logo from "../assets/images/river-logo.png";

const normalPhrases = [
  "Hey!",
  "What's up?",
  "Spin me!",
  "So... hungry...",
  "RAHHHHHHH!!",
  "Welcome!",
  "Beans.",
  "Explore my website!",
];

const dizzyPhrases = [
  "I'm so dizzy...",
  "Whoa, that was fast!",
  "The world is spinning!",
  "I need a break...",
  "Make it stop!",
];

const Home = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [isDizzy, setIsDizzy] = useState(false);
  const [chatTimeout, setChatTimeout] = useState(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleSpin = () => {
    setIsSpinning(true);
    setIsDizzy(true);
    setTimeout(() => setIsSpinning(false), 1000);
  };

  const handleChat = () => {
    if (showChat) {
      setShowChat(false); // Force hide before showing again
      setTimeout(() => triggerChat(), 50); // Small delay before showing again
    } else {
      triggerChat();
    }
  };

  const triggerChat = () => {
    let randomPhrase = isDizzy
      ? dizzyPhrases[Math.floor(Math.random() * dizzyPhrases.length)]
      : normalPhrases[Math.floor(Math.random() * normalPhrases.length)];

    setChatMessage(randomPhrase);
    setShowChat(true);
    setIsDizzy(false); // Reset dizzy state

    if (chatTimeout) clearTimeout(chatTimeout);

    const newTimeout = setTimeout(() => setShowChat(false), 3000); // Chat stays for 3s
    setChatTimeout(newTimeout);
  };

  return (
    <div className="home">
      <div className="border"></div>
      <h1 className={`top-left ${animate ? "animate" : ""}`}>River Maners !</h1>
      <h1 className={`bottom-right ${animate ? "animate" : ""}`}>
        River Maners !
      </h1>
      <h1 className={`bottom-left ${animate ? "animate" : ""}`}>
        River Maners !
      </h1>
      <h1 className={`top-right ${animate ? "animate" : ""}`}>
        River Maners !
      </h1>

      <div className="image-container">
        <img
          src={logo}
          alt="RIVER LOGO"
          className={isSpinning ? "river-image spinning" : "river-image"}
        />
        {showChat && (
          <div className="speech-bubble-home">
            <span>{chatMessage}</span>
          </div>
        )}
      </div>

      <button onClick={handleSpin} className="spin-button">
        <span>Spin</span>
      </button>
      <button onClick={handleChat} className="chat-button">
        <span>Chat</span>
      </button>
    </div>
  );
};

export default Home;
