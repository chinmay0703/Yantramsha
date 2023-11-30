import React, { useState } from 'react';
import "../routes/Chatbot.css"
import watt from '../Images/45.png';

function ChatBot() {
  const recipientNumber = '+917620846379'; 
  const [isClicked, setIsClicked] = useState(false);
  const openWhatsApp = () => {
    setIsClicked(true);
    const message = 'Hello,I have a question'; 
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${recipientNumber}&text=${encodedMessage}`;
    const isConfirmed = window.confirm("Are you sure you want to open WhatsApp app?");
    if (isConfirmed) {
      window.open(whatsappURL, '_blank');
    } else {
      setIsClicked(false);
    }
  };
  return (
    <div className="chatbot-container">
      <div className={`chat-icon ${isClicked ? 'clicked' : ''}`} onClick={openWhatsApp}>
        <img src={watt} alt="WhatsApp Logo" className="whatsapp-logo" />
      </div>
    </div>
  );
}
export default ChatBot;
