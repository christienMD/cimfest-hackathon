import { ScrollArea } from "@/components/ui/scroll-area";
import { Message } from "@/types/index-d";
import { ChatBubble } from "../ChatBubble/ChatBubble";

interface ChatMessageListProps {
  messages: Message[];
}

export const ChatMessageList: React.FC<ChatMessageListProps> = ({
  messages,
}) => (
  <ScrollArea className="flex-1 p-4">
    <div className="space-y-4">
      {messages.map((message) => (
        <ChatBubble key={message.id} message={message} />
      ))}
    </div>
  </ScrollArea>
);
