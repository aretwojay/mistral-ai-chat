"use client";

import { useState } from "react";
import ChatSelect from "./chat-select";
import { ChatTextarea } from "./chat-textarea";

export const ChatBox = () => {
  const [model, setModel] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div>
        {messages.map((msg, index) => (
          <div key={index} className="mb-2 p-2 border rounded bg-default-50">
            {msg}
          </div>
        ))}
        {!messages.length && <p>No messages yet.</p>}
      </div>
      <ChatSelect onChange={(model) => setModel(model)} />
      <ChatTextarea model={model} />
    </div>
  );
};
