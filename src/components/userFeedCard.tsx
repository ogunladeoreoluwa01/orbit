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
import { GiStarSwirl, GiSatelliteCommunication } from "react-icons/gi";
import { Badge } from "@/components/ui/badge";

interface UserFeedCardProps {
  feed: FeedItem;
}

const UserFeedCardComp: React.FC<UserFeedCardProps> = ({ feed }) => {
  return (
    <Card
      key={feed.id}
      className="break-inside-avoid-column bg-background border-none shadow-none mb-4 p-0 rounded-lg overflow-hidden"
    >
      <CardContent
        className={`${
          feed.mediaUrl
            ? "p-0"
            : "px-2 pt-1 pb-2 border bg-card rounded-[0.5rem]"
        } mb-1`}
      >
        {/* Media Content */}
        {feed.mediaUrl && (
          <div className="media-item relative">
            {isImage(feed.mediaUrl) ? (
              <img
                src={feed.mediaUrl}
                alt="media"
                loading="lazy"
                className="w-full h-auto object-contain rounded-[0.5rem]"
              />
            ) : isVideo(feed.mediaUrl) ? (
              <CustomVideoPlayerUserFeed src={feed.mediaUrl} />
            ) : (
              <p>Unsupported media type</p>
            )}
            <Badge className="absolute top-1 right-2 bg-opacity-50 text-[0.5rem] tabular-nums py-[0.15rem] px-[0.2rem] text-white rounded">
              {getFileTypeFromUrl(feed.mediaUrl)}
            </Badge>
            <div className="flex gap-1 absolute bottom-2 left-2 items-center md:hidden bg-black bg-opacity-60 rounded-[0.5rem] w-fit p-1">
              <div className="flex items-center gap-[0.15rem]">
                <GiStarSwirl />
                <p className="tabular-num text-xs">{feed.likes.length}</p>
              </div>
              <div className="flex items-center gap-[0.15rem]">
                <GiSatelliteCommunication />
                <p className="tabular-num text-xs">
                  {feed.comments.length}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Text Content */}
        {!feed.mediaUrl && (
          <div className="flex flex-col justify-start gap-1">
            <p className="mt-2 text-[14px] leading-[1.15]">{feed.text}</p>
            <div className="flex gap-1 py-1 items-center w-fit">
              <div className="flex items-center gap-[0.15rem]">
                <GiStarSwirl />
                <p className="tabular-num text-xs">{feed.likes.length}</p>
              </div>
              <div className="flex items-center gap-[0.15rem]">
                <GiSatelliteCommunication />
                <p className="tabular-num text-xs">
                  {feed.comments.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      
      {feed.mediaUrl && (
        <CardDescription className="px-1 mt-2 text-[14px] leading-[1.15]">
          {feed.text}
        </CardDescription>
      )}

      <CardFooter className="flex gap-2 p-0 w-full items-center justify-between py-1">
        <div className="flex gap-1 items-center py-1 w-full md:w-[65%]">
          <Avatar className="h-[32px] w-[32px]">
            <AvatarImage
              src={feed.userImageUrl}
              className="object-cover object-center"
            />
            <AvatarFallback>{feed.user.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <span className="text-[14px] leading-[1.15] truncate">
            {feed.user}
          </span>

         
        </div>
        <div className="md:flex gap-1 items-center w-[25%] hidden">
            <div className="flex items-center gap-[0.15rem]">
              <GiStarSwirl />
              <p className="tabular-num text-xs">{feed.likes.length}</p>
            </div>
            <div className="flex items-center gap-[0.15rem]">
              <GiSatelliteCommunication />
              <p className="tabular-num text-xs">
                {feed.comments.length}
              </p>
            </div>
          </div>
      </CardFooter>
    </Card>
  );
};

export default UserFeedCardComp;
