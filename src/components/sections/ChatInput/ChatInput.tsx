import { useState, useRef } from "react";
import {
  Send,
  Paperclip,
  AtSign,
  Mic,
  Video,
  Bold,
  Italic,
  Underline,
  Code,
  Quote,
  Link,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatInputProps {
  onSend: (content: string) => void;
}

export const ChatInput = ({ onSend }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  const formatText = (
    format: "bold" | "italic" | "underline" | "code" | "quote" | "link"
  ) => {
    const textarea = textAreaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = message.substring(start, end);

    let formattedText = "";
    switch (format) {
      case "bold":
        formattedText = `**${selectedText}**`;
        break;
      case "italic":
        formattedText = `*${selectedText}*`;
        break;
      case "underline":
        formattedText = `_${selectedText}_`;
        break;
      case "code":
        formattedText = `\`${selectedText}\``;
        break;
      case "quote":
        formattedText = `> ${selectedText}`;
        break;
      case "link":
        formattedText = `[${selectedText}](url)`;
        break;
    }

    const newText =
      message.substring(0, start) + formattedText + message.substring(end);
    setMessage(newText);
  };

  return (
    <div className="px-4 py-3 border-t border-gray-800">
      <div className="relative bg-[#1A1D21] rounded-lg">
        <div className="flex flex-col">
          {/* Formatting toolbar */}
          <div className="flex items-center px-3 py-1 border-b border-gray-800">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => formatText("bold")}
              className="h-8 px-2 text-gray-400 hover:text-gray-900"
            >
              <Bold className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => formatText("italic")}
              className="h-8 px-2 text-gray-400 hover:text-gray-900"
            >
              <Italic className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => formatText("underline")}
              className="h-8 px-2 text-gray-400 hover:text-gray-900"
            >
              <Underline className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => formatText("code")}
              className="h-8 px-2 text-gray-400 hover:text-gray-900"
            >
              <Code className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => formatText("quote")}
              className="h-8 px-2 text-gray-400 hover:text-gray-900"
            >
              <Quote className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => formatText("link")}
              className="h-8 px-2 text-gray-400 hover:text-gray-900"
            >
              <Link className="h-4 w-4" />
            </Button>
          </div>

          {/* Input area with action buttons container */}
          <div className="relative bg-[#1A1D21]">
            {/* Action buttons container */}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#1A1D21] border-t border-gray-800">
              <div className="absolute bottom-1 left-2 flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-400 hover:text-gray-900"
                >
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-400 hover:text-gray-900"
                >
                  <AtSign className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-400 hover:text-gray-900"
                >
                  <Mic className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-400 hover:text-gray-900"
                >
                  <Video className="h-4 w-4" />
                </Button>
              </div>

              <Button
                size="icon"
                onClick={handleSend}
                className="absolute top-2 bottom-1 right-2 bg-[#23213A] hover:bg-[#23213A]/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>

            {/* Textarea above the buttons */}
            <textarea
              ref={textAreaRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message Cyril..."
              className="w-full min-h-[100px] max-h-[200px] p-3 bg-transparent text-white placeholder-gray-400 resize-none focus:outline-none"
              style={{ marginBottom: "40px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
