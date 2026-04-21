function Message({ text, sender }) {
  return (
    <div className={sender === "user" ? "user-msg" : "ai-msg"}>
      <p>{text}</p>
    </div>
  );
}

export default Message;