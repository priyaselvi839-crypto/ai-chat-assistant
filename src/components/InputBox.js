import { useState } from "react";

function InputBox({ onSend, loading }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="input-box">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={handleSend} disabled={loading}>
        {loading ? "..." : "Send"}
      </button>
    </div>
  );
}

export default InputBox;