import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your virtual assistant. How can I help you today?",
      isBot: true,
    },
  ]);
  const [inputText, setInputText] = useState('');

  const predefinedResponses = {
    hello: "Hello! How can I assist you today?",
    hi: "Hi there! What can I help you with?",
    services:
      "We offer web development, digital marketing, UI/UX design, and consulting services.",
    pricing:
      "Please check our store page for current pricing on our products and services.",
    contact:
      "You can reach us at connect@brandscript.com or +91 9876543210",
    help: "I can help you with information about our services, pricing, and contact details. What would you like to know?",
    default:
      "I understand you're asking about that. For detailed information, please contact our team at connect@brandscript.com or visit our contact page.",
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage = { id: messages.length + 1, text: inputText, isBot: false };
    const newMessages = [...messages, userMessage];

    const lowerInput = inputText.toLowerCase();
    let botResponse = predefinedResponses.default;

    for (const key in predefinedResponses) {
      if (lowerInput.includes(key) && key !== 'default') {
        botResponse = predefinedResponses[key];
        break;
      }
    }

    const botMessage = { id: messages.length + 2, text: botResponse, isBot: true };
    setMessages([...newMessages, botMessage]);
    setInputText('');
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: "fixed",
          bottom: "16px",
          right: "16px",
          backgroundColor: "#2563eb",
          color: "white",
          padding: "14px",
          borderRadius: "9999px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          zIndex: 50,
          border: "none",
        }}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "0",
            right: "0",
            width: "100%",
            height: "70%",
            maxWidth: "320px",
            maxHeight: "400px",
            backgroundColor: "white",
            borderRadius: "12px",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 100,
            margin: "0",
            boxSizing: "border-box",
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#2563eb",
              color: "white",
              padding: "12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3 style={{ fontSize: "15px", fontWeight: "600" }}>Chat Support</h3>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
              backgroundColor: "#f9fafb",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  display: "flex",
                  justifyContent: message.isBot ? "flex-start" : "flex-end",
                }}
              >
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "10px",
                    borderRadius: "12px",
                    backgroundColor: message.isBot ? "#e5e7eb" : "#2563eb",
                    color: message.isBot ? "#1f2937" : "#fff",
                    fontSize: "14px",
                    lineHeight: "1.4",
                  }}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Section */}
          <div
            style={{
              padding: "10px",
              borderTop: "1px solid #e5e7eb",
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: "8px 10px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                outline: "none",
                fontSize: "14px",
              }}
            />
            <button
              onClick={handleSend}
              style={{
                backgroundColor: "#2563eb",
                color: "white",
                border: "none",
                padding: "8px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
