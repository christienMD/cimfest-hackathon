export interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
  isCoach: boolean;
  avatar?: string;
}

export interface Album {
  name: string;
  artist: string;
  cover: string;
}