import React, { useState, useEffect } from 'react';
import '../styles/CleanerCarsDemo.css'; // Updated CSS import
import OpenAI from 'openai';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const MessageDisplay = ({ message }: { message: Message }) => (
  <div className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}>
    <div className="message-content">
      {message.sender === 'bot' ? (
        <ReactMarkdown>{message.text}</ReactMarkdown>
      ) : (
        message.text
      )}
    </div>
    <div className="message-timestamp">
      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </div>
  </div>
);

const MessagesContainer = ({ messages, isLoading }: { messages: Message[], isLoading: boolean }) => (
  <div className="messages-container">
    {messages.map(message => (
      <MessageDisplay key={message.id} message={message} />
    ))}
    {isLoading && (
      <div className="message bot-message">
        <div className="message-content typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    )}
  </div>
);

// Updated component name
const CleanerCarsDemoPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    // Updated initial message
    text: "Hi there! I'm the CleanerCars AI Assistant. How can I help you with your car cleaning needs today?",
    sender: 'bot',
    timestamp: new Date()
  }]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [threadId, setThreadId] = useState<string>('');

  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  // Consider using a different Assistant ID if needed for CleanerCars
  const assistantId = import.meta.env.VITE_OPENAI_ASSISTANT_ID_CLEANER; // Using the same assistant for now

  useEffect(() => {
    const initializeAssistant = async () => {
      try {
        const thread = await openai.beta.threads.create();
        setThreadId(thread.id);
      } catch (error) {
        console.error('Error initializing assistant:', error);
      }
    };

    initializeAssistant();
  }, []);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim() === '' || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await callOpenAI(inputText);

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error('Error in handleSendMessage:', error);

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, there was an error processing your request. Please try again later.",
        sender: 'bot',
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = async (suggestion: string) => {
    if (isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: suggestion,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await callOpenAI(suggestion);

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error('Error in handleSendMessage:', error);

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, there was an error processing your request. Please try again later.",
        sender: 'bot',
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const callOpenAI = async (userMessage: string) => {
    if (!assistantId || !threadId) {
      console.error('Assistant ID or Thread ID not found');
      return "I'm sorry, I'm having trouble connecting to my brain right now. Please try again later.";
    }

    try {
      // Add the user's message to the thread
      await openai.beta.threads.messages.create(threadId, {
        role: 'user',
        content: userMessage,
      });

      // Run the assistant
      const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: assistantId,
      });

      // Poll for the completion
      let runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
      while (runStatus.status !== 'completed') {
        await new Promise(resolve => setTimeout(resolve, 1000));
        runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);

        if (runStatus.status === 'failed' || runStatus.status === 'cancelled') {
          throw new Error(`Run ${runStatus.status}`);
        }
      }

      // Get the assistant's messages
      const messages = await openai.beta.threads.messages.list(threadId);
      const lastMessage = messages.data[0];

      if (lastMessage.role === 'assistant' && lastMessage.content[0].type === 'text') {
        return lastMessage.content[0].text.value;
      }

      return "I'm sorry, I couldn't generate a response. Please try again.";
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      return "I'm sorry, there was an error processing your request. Please try again later.";
    }
  };

  return (
    // Updated container class
    <div className="cleanercars-demo-container">
      {/* Updated header class */}
      <div className="cleanercars-header">
        {/* Updated logo class and potentially src/alt */}
        <div className="cleanercars-logo">
          {/* Updated title class */}
          <div className="cleanercars-title">
            {/* Updated title text */}
            <h1>Cleaner Cars Assistant Demo</h1>
            <p>Trusted car cleaning services in Christchurch</p>
          </div>
        </div>
      </div>

      <div className="chat-container">
        <MessagesContainer messages={messages} isLoading={isLoading} />

        {messages.length <= 1 && (
          <div className="suggestion-section">
            <h3>Try asking about:</h3>
            <div className="suggestion-buttons">
              {/* Updated suggestion buttons */}
              <button
                onClick={() => handleSuggestionClick("Where are you located?")}
                className="suggestion-button"
                disabled={isLoading}
              >
                Where are you located?
              </button>
              <button
                onClick={() => handleSuggestionClick("What are the prices?")}
                className="suggestion-button"
                disabled={isLoading}
              >
                What are the prices?
              </button>
              <button
                onClick={() => handleSuggestionClick("How can I book?")}
                className="suggestion-button"
                disabled={isLoading}
              >
                How can I book?
              </button>
            </div>
          </div>
        )}

        <form onSubmit={handleSendMessage} className="input-container">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask about car cleaning..." // Updated placeholder
            className="message-input"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="send-button"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

// Updated export name
export default CleanerCarsDemoPage; 