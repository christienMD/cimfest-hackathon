import { useState } from "react";
import { ChatInput } from "../sections/ChatInput/ChatInput";
import { ChatMessageList } from "../sections/ChatMessageList/ChatMessageList";
import { Message } from "@/types/index-d";
;

export function CoachChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "Coach",
      content: "Hello Cyril, did you test out the new guitar?",
      timestamp: new Date(),
      isCoach: true,
      avatar: "/coach-avatar.png",
    },
    {
      id: "2",
      sender: "Cyril",
      content: "Yes I did",
      timestamp: new Date(),
      isCoach: false,
      avatar: "/artist-avatar.png",
    },
  ]);

  const handleSend = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "Coach",
      content,
      timestamp: new Date(),
      isCoach: true,
      avatar: "/coach-avatar.png",
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex flex-col h-full">
      <ChatMessageList messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
}
