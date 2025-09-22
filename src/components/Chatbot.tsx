import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm your virtual assistant. How can I help you today?", isBot: true }
  ]);
  const [inputText, setInputText] = useState('');

  const predefinedResponses = {
    'hello': "Hello! How can I assist you today?",
    'hi': "Hi there! What can I help you with?",
    'services': "We offer web development, digital marketing, UI/UX design, and consulting services.",
    'pricing': "Please check our store page for current pricing on our products and services.",
    'contact': "You can reach us at connect@brandscript.com or +91 9876543210",
    'help': "I can help you with information about our services, pricing, and contact details. What would you like to know?",
    'default': "I understand you're asking about that. For detailed information, please contact our team at connect@brandscript.com or visit our contact page."
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage = { id: messages.length + 1, text: inputText, isBot: false };
    const newMessages = [...messages, userMessage];

    // Simple bot response logic
    const lowerInput = inputText.toLowerCase();
    let botResponse = predefinedResponses.default;

    for (const key in predefinedResponses) {
      if (lowerInput.includes(key) && key !== 'default') {
        botResponse = predefinedResponses[key as keyof typeof predefinedResponses];
        break;
      }
    }

    const botMessage = { id: messages.length + 2, text: botResponse, isBot: true };
    setMessages([...newMessages, botMessage]);
    setInputText('');
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all z-50 ${
          isOpen ? 'hidden' : 'block'
        }`}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border z-50 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Chat Support</h3>
            <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 p-1 rounded">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;