export interface Comment {
    user: string;
    userImageUrl: string;
    text: string;
    timestamp: string;
}

export interface FeedItem {
    id: number;
    user: string;
    userImageUrl: string;
    text: string;
    mediaUrl?: string;
    likes: number;
    comments: Comment[];
    timestamp: string;
}