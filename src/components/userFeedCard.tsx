import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { isImage, isVideo, getFileTypeFromUrl } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FeedItem } from "@/types";
import CustomVideoPlayerUserFeed from "@/components/videoPlayerForFeed";

import { AiFillHeart } from "react-icons/ai";
import { HiChatBubbleLeft } from "react-icons/hi2";
import { IoMdShareAlt } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import { Badge } from "@/components/ui/badge";

interface UserFeedCardProps {
  feed: FeedItem;
}

const UserFeedCardComp: React.FC<UserFeedCardProps> = ({ feed }) => {
  return (
    <Card
      key={feed.id}
      className="break-inside-avoid-column group bg-background border-none shadow-none mb-4 p-0 rounded-lg overflow-hidden"
    >
      <CardFooter className="flex gap-2 p-0 w-full items-center justify-between py-1">
        <div className="flex gap-1 items-center py-1 w-full md:w-[65%]">
          <Avatar className="h-[32px] w-[32px] ">
            <AvatarImage
              src={feed.userImageUrl}
              className="object-cover object-center "
            />
            <AvatarFallback>{feed.user.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <span className="text-[14px] text-muted-foreground leading-[1.15] truncate">
            {feed.user}
          </span>
        </div>
        <div className="flex rotate-180 items-center gap-[0.15rem]">
          <SlOptions />
        </div>
      </CardFooter>
      <CardContent
        className={`${
          feed.mediaUrl
            ? "p-0 bg-black "
            : "px-2 pt-1 pb-2 border bg-card rounded-[0.5rem]"
        } mb-1 relative rounded-[0.5rem]`}
      >
        {/* Media Content */}
        {feed.mediaUrl && (
          <div className="media-item relative bg-black rounded-[0.5rem]">
            {isImage(feed.mediaUrl) ? (
              <img
                src={feed.mediaUrl}
                alt="media"
                loading="lazy"
                className="w-full h-auto object-contain rounded-[0.5rem] lg:opacity-60 lg:group-hover:opacity-100 transition-all duration-200 linear"
              />
            ) : isVideo(feed.mediaUrl) ? (
              <CustomVideoPlayerUserFeed src={feed.mediaUrl} />
            ) : (
              <p>Unsupported media type</p>
            )}
            <Badge className="absolute top-1 right-2 bg-opacity-50 text-[0.5rem] tabular-nums py-[0.15rem] px-[0.2rem] text-background font-bold rounded">
              {getFileTypeFromUrl(feed.mediaUrl)}
            </Badge>

          </div>
        )}

        {/* Text Content */}
        {!feed.mediaUrl && (
          <div className="flex flex-col justify-start gap-1">
            <p className="mt-2 text-[14px] leading-[1.15]">{feed.text}</p>
           
          </div>
        )}
      </CardContent>

      {feed.mediaUrl && (
        <CardDescription className="px-1 mt-2 text-[14px] leading-[1.15]">
          {feed.text}
        </CardDescription>
      )}

      <CardFooter className="flex gap-2 p-0 w-full items-center justify-between py-1">
        
        <div className="flex gap-1 items-center justify-between w-[40%] ">
          <div className="flex items-center gap-[0.15rem]">
            <AiFillHeart />
            {feed.likes.length !== 0 &&(<p className="tabular-num text-xs">{feed.likes.length}</p>)}
            
        
          </div>
          <div className="flex items-center gap-[0.15rem]">
            <HiChatBubbleLeft />
            {feed.comments.length  !== 0 &&(<p className="tabular-num text-xs">{feed.comments.length}</p>)}
            
          </div>
        </div>
        <div className="flex rotate-180 items-center gap-[0.15rem]">
          <IoMdShareAlt />
        </div>
      </CardFooter>
    </Card>
  );
};

export default UserFeedCardComp;
