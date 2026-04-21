import { useState } from "react";
import ChatBox from "./components/ChatBox";
import InputBox from "./components/InputBox";
import { getAIResponse } from "./services/api";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (text) => {
    // add user message
    const newMessages = [...messages, { text, sender: "user" }];
    setMessages(newMessages);

    setLoading(true);

    try {
      const reply = await getAIResponse(text);

      setMessages([
        ...newMessages,
        { text: reply, sender: "ai" }
      ]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { text: "Error! Try again.", sender: "ai" }
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="app">
      <h2>AI Chat App</h2>
      <ChatBox messages={messages} />
      <InputBox onSend={handleSend} loading={loading} />
    </div>
  );
}

export default App;