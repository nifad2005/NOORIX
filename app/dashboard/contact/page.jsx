// app/chat/page.js
'use client'; // This component will be a Client Component

import { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

// Replace with your backend URL
const SOCKET_SERVER_URL = process.env.NEXT_PUBLIC_SOCKET_SERVER_URL || 'http://localhost:5000';

export default function ChatPage() {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [currentUserId, setCurrentUserId] = useState(''); // This should come from auth
  const [currentUserRole, setCurrentUserRole] = useState(''); // 'user' or 'admin'
  const [recipientId, setRecipientId] = useState(''); // The ID of the user/admin you are chatting with
  const [recipientRole, setRecipientRole] = useState(''); // Role of the recipient

  const messagesEndRef = useRef(null); // Ref to scroll to bottom of messages

  useEffect(() => {
    // 1. Establish Socket.IO connection
    const newSocket = io(SOCKET_SERVER_URL);
    setSocket(newSocket);

    // 2. Event listeners for messages
    newSocket.on('connect', () => {
      console.log('Connected to Socket.IO server');
      // After connection, register the user (ideally with their actual ID)
      if (currentUserId) {
        newSocket.emit('registerUser', currentUserId);
      }
    });

    newSocket.on('receiveMessage', (message) => {
      console.log('Received message:', message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    newSocket.on('messageSentConfirmation', (message) => {
      console.log('Message sent confirmation:', message);
      // Optional: Update UI to show message as 'sent'
    });

    newSocket.on('messagesLoaded', (loadedMessages) => {
      console.log('Messages loaded:', loadedMessages);
      setMessages(loadedMessages);
    });

    newSocket.on('disconnect', () => {
      console.log('Disconnected from Socket.IO server');
    });

    newSocket.on('connect_error', (error) => {
        console.error('Socket.IO connection error:', error);
    });

    return () => {
      // Clean up on component unmount
      newSocket.disconnect();
    };
  }, [currentUserId]); // Re-run effect if currentUserId changes

  // Scroll to bottom of messages when new message arrives
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle user and recipient selection (for testing purposes)
  const handleUserSelect = (e) => {
    const [id, role] = e.target.value.split(':');
    setCurrentUserId(id);
    setCurrentUserRole(role);
    // If a user is selected, ensure recipient is unset or a default admin
    setRecipientId('');
    setRecipientRole('');
  };

  const handleRecipientSelect = (e) => {
    const [id, role] = e.target.value.split(':');
    setRecipientId(id);
    setRecipientRole(role);
  };

  // Load messages when sender/receiver change
  useEffect(() => {
    if (socket && currentUserId && recipientId) {
      socket.emit('loadMessages', { senderId: currentUserId, receiverId: recipientId });
    }
  }, [socket, currentUserId, recipientId]);


  const sendMessage = () => {
    if (socket && messageInput.trim() && currentUserId && recipientId) {
      // Determine chatSessionId: always use a consistent order (e.g., smaller ID first)
      const participants = [currentUserId, recipientId].sort();
      const chatSessionId = `${participants[0]}_${participants[1]}`;

      const messageData = {
        senderId: currentUserId,
        receiverId: recipientId,
        senderRole: currentUserRole,
        receiverRole: recipientRole,
        content: messageInput,
        chatSessionId: chatSessionId,
      };
      socket.emit('sendMessage', messageData);
      setMessageInput('');
    } else {
      alert('Please select sender, recipient and type a message.');
    }
  };

  // Dummy user data for demonstration
  const users = [
    { id: 'user1', role: 'user', name: 'User One' },
    { id: 'user2', role: 'user', name: 'User Two' },
  ];
  const admins = [
    { id: 'admin1', role: 'admin', name: 'Admin Alpha' },
    { id: 'admin2', role: 'admin', name: 'Admin Beta' },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1>Real-time Chat (Next.js + Socket.IO)</h1>

      <div style={{ marginBottom: '20px' }}>
        <h3>Select Your Identity:</h3>
        <select onChange={handleUserSelect} value={`${currentUserId}:${currentUserRole}`}>
          <option value="">-- Select Me --</option>
          <optgroup label="Users">
            {users.map((u) => (
              <option key={u.id} value={`${u.id}:${u.role}`}>
                {u.name} ({u.role})
              </option>
            ))}
          </optgroup>
          <optgroup label="Admins">
            {admins.map((a) => (
              <option key={a.id} value={`${a.id}:${a.role}`}>
                {a.name} ({a.role})
              </option>
            ))}
          </optgroup>
        </select>
        <p>Current User: {currentUserId} ({currentUserRole})</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Select Recipient:</h3>
        <select onChange={handleRecipientSelect} value={`${recipientId}:${recipientRole}`}>
          <option value="">-- Select Recipient --</option>
          <optgroup label="Users">
            {users.map((u) => (
              <option key={u.id} value={`${u.id}:${u.role}`}>
                {u.name} ({u.role})
              </option>
            ))}
          </optgroup>
          <optgroup label="Admins">
            {admins.map((a) => (
              <option key={a.id} value={`${a.id}:${a.role}`}>
                {a.name} ({a.role})
              </option>
            ))}
          </optgroup>
        </select>
        <p>Recipient: {recipientId} ({recipientRole})</p>
      </div>


      <div style={{ border: '1px solid #eee', height: '400px', overflowY: 'scroll', padding: '10px', marginBottom: '10px', backgroundColor: '#f9f9f9' }}>
        {messages.length === 0 && <p>No messages yet.</p>}
        {messages.map((msg) => (
          <div key={msg._id} style={{
            marginBottom: '8px',
            textAlign: msg.sender === currentUserId ? 'right' : 'left',
          }}>
            <span style={{
              backgroundColor: msg.sender === currentUserId ? '#dcf8c6' : '#e0e0e0',
              padding: '8px 12px',
              borderRadius: '15px',
              display: 'inline-block',
              maxWidth: '70%',
              wordWrap: 'break-word',
            }}>
              <strong>{msg.senderRole === 'admin' ? 'Admin' : 'User'} ({msg.sender}):</strong> {msg.content}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div style={{ display: 'flex' }}>
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="Type your message..."
          style={{ flexGrow: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
        />
        <button
          onClick={sendMessage}
          style={{ marginLeft: '10px', padding: '10px 15px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}
        >
          Send
        </button>
      </div>
    </div>
  );
}