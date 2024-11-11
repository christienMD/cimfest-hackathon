import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Message } from "@/types/index-d";

interface ChatBubbleProps {
  message: Message;
  className?: string;
}

export const ChatBubble = React.forwardRef<HTMLDivElement, ChatBubbleProps>(
  ({ message, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex gap-2 p-4",
        message.isCoach ? "justify-start" : "justify-end",
        className
      )}
      {...props}
    >
      {message.isCoach && (
        <Avatar className="h-8 w-8">
          <AvatarImage src={message.avatar} alt={message.sender} />
          <AvatarFallback className="bg-primary/10 text-primary">
            {message.sender.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          "flex flex-col gap-1 max-w-[75%]",
          !message.isCoach && "items-end"
        )}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{message.sender}</span>
          <span className="text-xs text-muted-foreground">
            {message.timestamp.toLocaleTimeString()}
          </span>
        </div>
        <div
          className={cn(
            "rounded-lg px-4 py-2 text-sm",
            message.isCoach
              ? "bg-muted text-foreground"
              : "bg-primary text-primary-foreground"
          )}
        >
          {message.content}
        </div>
      </div>
      {!message.isCoach && (
        <Avatar className="h-8 w-8">
          <AvatarImage src={message.avatar} alt={message.sender} />
          <AvatarFallback className="bg-primary text-primary-foreground">
            {message.sender.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  )
);
ChatBubble.displayName = "ChatBubble";
