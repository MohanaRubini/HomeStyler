import React, { useState } from 'react';

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    alert('This is a dummy AI assistant. Your message: ' + message);
    setMessage('');
  };

  return (
    <div className={`chatbot ${open ? 'open' : ''}`}>
      <button className="toggle" onClick={() => setOpen(!open)}>
        💬
      </button>
      {open && (
        <div className="chat-window">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask something..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
