import  { useState, useEffect } from 'react';
import io from 'socket.io-client';
// import io from 'socket.io';
import './chat.css';
// import  '/assets';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const socket = io('http://localhost:5000');

  useEffect(() => {
    const userName = prompt("Enter your name to join the chat:");
    setName(userName);
    socket.emit('new-user-joined', userName);

    socket.on('user-joined', (name) => {
      appendMessage(`${name} joined the chat`, 'right');
    });

    socket.on('receive', (data) => {
      appendMessage(`${data.name}: ${data.message}`, 'left');
    });

    socket.on('left', (name) => {
      appendMessage(`${name} left the chat`, 'right');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const appendMessage = (message, position) => {
    const newMessage = { text: message, position };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    if (position === 'left') {
      const audio = new Audio(message.mp3);
      audio.play();
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    appendMessage(`You: ${message}`, 'right');
    socket.emit('send', message);
    setMessage('');
  };

  return (
    <div>
      <nav>
        <img className="logo" src="chatting.png" alt="Chatting" />
        <h1>Welcome to the community</h1>
      </nav>
      <div className="container">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.position}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="send">
        <form onSubmit={sendMessage} id="send-container">
          <input
            type="text"
            name="messageInp"
            id="messageInp"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" id="btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
