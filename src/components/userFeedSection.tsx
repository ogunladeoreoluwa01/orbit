import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { isImage, isVideo } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FeedItem } from "@/types";
import CustomVideoPlayerUserFeed from "@/components/videoPlayerForFeed";
const feed: FeedItem[] = [
  {
    id: 1,
    user: "JohnDoe",
    userImageUrl:
      "https://i.pinimg.com/originals/9d/a8/24/9da824c644d942d03cc433bf7cf17f41.jpg",
    text: "Had a great day at the beach!",
    mediaUrl:
      "https://i.pinimg.com/originals/a4/68/82/a46882fa673dae9ae4e0735107d83ebe.jpg",
    likes: 120,
    comments: [
      {
        user: "JaneSmith",
        userImageUrl:
          "https://i.pinimg.com/originals/9d/a8/24/9da824c644d942d03cc433bf7cf17f41.jpg",
        text: "Looks amazing!",
        timestamp: "2024-08-22T10:00:00Z",
      },
      {
        user: "Alice",
        userImageUrl:
          "https://i.pinimg.com/originals/9d/a8/24/9da824c644d942d03cc433bf7cf17f41.jpg",
        text: "Wish I was there!",
        timestamp: "2024-08-22T11:00:00Z",
      },
    ],
    timestamp: "2024-08-22T09:00:00Z",
  },
  {
    id: 2,
    user: "Alice",
    userImageUrl:
      "https://i.pinimg.com/originals/57/99/f0/5799f03b2f1d549e1ab57a00708dd0e5.png",
    text: "Check out this cool video I made!",
    mediaUrl:
      "https://v1.pinimg.com/videos/mc/720p/d7/8f/17/d78f17c00d9cdc63814b6ec7057731bc.mp4",
    likes: 200,
    comments: [
      {
        user: "JohnDoe",
        userImageUrl:
          "https://i.pinimg.com/originals/57/99/f0/5799f03b2f1d549e1ab57a00708dd0e5.png",
        text: "Great video!",
        timestamp: "2024-08-22T12:00:00Z",
      },
      {
        user: "JaneSmith",
        userImageUrl:
          "https://i.pinimg.com/originals/57/99/f0/5799f03b2f1d549e1ab57a00708dd0e5.png",
        text: "Nice editing!",
        timestamp: "2024-08-22T12:30:00Z",
      },
    ],
    timestamp: "2024-08-22T11:00:00Z",
  },
  {
    id: 3,
    user: "JaneSmith",
    userImageUrl:
      "https://i.pinimg.com/originals/e4/a1/f9/e4a1f9ed4ff025d56078103af77c436f.jpg",
    text: "Loving this new book I'm reading.",
    likes: 50,
    comments: [],
    timestamp: "2024-08-22T08:00:00Z",
  },
  {
    id: 4,
    user: "JohnDoe",
    userImageUrl:
      "https://i.pinimg.com/originals/9d/a8/24/9da824c644d942d03cc433bf7cf17f41.jpg",
    text: "Had a great day at the beach!",
    mediaUrl:
      "https://i.pinimg.com/originals/93/67/65/9367655075b92e11596c90bdd5882aea.jpg",
    likes: 120,
    comments: [
      {
        user: "JaneSmith",
        userImageUrl:
          "https://i.pinimg.com/originals/9d/a8/24/9da824c644d942d03cc433bf7cf17f41.jpg",
        text: "Looks amazing!",
        timestamp: "2024-08-22T10:00:00Z",
      },
      {
        user: "Alice",
        userImageUrl:
          "https://i.pinimg.com/originals/9d/a8/24/9da824c644d942d03cc433bf7cf17f41.jpg",
        text: "Wish I was there!",
        timestamp: "2024-08-22T11:00:00Z",
      },
    ],
    timestamp: "2024-08-22T09:00:00Z",
  },
  {
    id: 5,
    user: "Alice",
    userImageUrl:
      "https://i.pinimg.com/originals/57/99/f0/5799f03b2f1d549e1ab57a00708dd0e5.png",
    text: "Check out this cool video I made!",
    mediaUrl:
      "https://i.pinimg.com/originals/5e/b9/0e/5eb90e27d1531d2af4140813c1e60371.jpg",
    likes: 200,
    comments: [
      {
        user: "JohnDoe",
        userImageUrl:
          "https://i.pinimg.com/originals/57/99/f0/5799f03b2f1d549e1ab57a00708dd0e5.png",
        text: "Great video!",
        timestamp: "2024-08-22T12:00:00Z",
      },
      {
        user: "JaneSmith",
        userImageUrl:
          "https://i.pinimg.com/originals/57/99/f0/5799f03b2f1d549e1ab57a00708dd0e5.png",
        text: "Nice editing!",
        timestamp: "2024-08-22T12:30:00Z",
      },
    ],
    timestamp: "2024-08-22T11:00:00Z",
  },
  {
    id: 6,
    user: "JaneSmith",
    userImageUrl:
      "https://i.pinimg.com/originals/e4/a1/f9/e4a1f9ed4ff025d56078103af77c436f.jpg",
    mediaUrl:
      "https://i.pinimg.com/originals/e4/a1/f9/e4a1f9ed4ff025d56078103af77c436f.jpg",
    text: "Loving this new book I'm reading.",
    likes: 50,
    comments: [],
    timestamp: "2024-08-22T08:00:00Z",
  },
];

const UserFeedComponent: React.FC = () => {
  return (
    <div className="w-full md:w-[65dvw] columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4">
      {feed.map((item) => (
        <Card
          key={item.id}
          className={`break-inside-avoid-column bg-background border-none shadow-none mb-4 p-0 rounded-lg overflow-hidden`}
        >
          <CardContent
            className={`${
              item.mediaUrl
                ? "p-0"
                : "px-2 pt-1 pb-2  border bg-card rounded-[0.5rem]"
            } mb-1`}
          >
            {/* Media Content */}
            {item.mediaUrl && (
              <div className="media-item">
                {isImage(item.mediaUrl) ? (
                  <img
                    src={item.mediaUrl}
                    alt="media"
                    loading="lazy"
                    className="w-full h-auto object-contain rounded-[0.5rem]"
                  />
                ) : isVideo(item.mediaUrl) ? (
                  <CustomVideoPlayerUserFeed src={item.mediaUrl} />
                ) : (
                  <p>Unsupported media type</p>
                )}
              </div>
            )}

            {/* Text Content */}
            {!item.mediaUrl && (
              <p className="mt-2 text-[14px] leading-[1.15]">{item.text}</p>
            )}
          </CardContent>
          {item.mediaUrl && (
            <CardDescription className="px-1 mt-2 text-[14px] leading-[1.15]">
              {item.text}
            </CardDescription>
          )}
          <CardFooter className="px-2 flex gap-2 items-center py-1 ">
            <Avatar className="h-[32px] w-[32px]">
              <AvatarImage src={item.userImageUrl} className="object-cover object-center " />
              <AvatarFallback>{item.user.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <span className="text-[14px] leading-[1.15]">{item.user}</span>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default UserFeedComponent;
