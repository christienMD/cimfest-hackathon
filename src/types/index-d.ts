export interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
  isCoach: boolean;
  avatar?: string;
}
