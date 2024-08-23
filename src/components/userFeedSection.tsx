import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { isImage, isVideo,getFileTypeFromUrl } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FeedItem } from "@/types";
import CustomVideoPlayerUserFeed from "@/components/videoPlayerForFeed";
import { GiStarSwirl, GiSatelliteCommunication } from "react-icons/gi";
import { Badge } from "@/components/ui/badge";
import UserFeedCardComp from "@/components/userFeedCard"
const feed: FeedItem[] = [
  {
    id: 1,
    user: "StarGazer",
    userImageUrl:
      "https://i.pinimg.com/originals/87/42/4a/87424a515a402f676ed07c382f28972b.jpg",
    text: "Captured a glimpse of the Milky Way tonight!",
    mediaUrl:
      "https://i.pinimg.com/originals/ba/9b/95/ba9b95658404d4e5e2202e627119315b.jpg",
    likes: ["AstroFan", "CosmicDreamer", "GalacticVoyager"],
    comments: [
      {
        user: "LunarExplorer",
        userImageUrl:
          "https://i.pinimg.com/originals/da/07/93/da0793eda161a2f9b620f16601040d20.jpg",
        text: "Absolutely stunning!",
        timestamp: "2024-08-22T10:00:00Z",
      },
      {
        user: "CometChaser",
        userImageUrl:
          "https://i.pinimg.com/originals/2c/5f/5c/2c5f5c9a9067c00f51d8ead82b5f1661.png",
        text: "I wish I could see this in person!",
        timestamp: "2024-08-22T11:00:00Z",
      },
    ],
    timestamp: "2024-08-22T09:00:00Z",
  },
  {
    id: 2,
    user: "LunarExplorer",
    userImageUrl:
      "https://i.pinimg.com/originals/11/f5/80/11f5806d42b65a325b57f83d3379c685.jpg",
    text: "Check out this timelapse of the moonrise!",
    mediaUrl:
      "https://v1.pinimg.com/videos/iht/720p/b2/ea/76/b2ea7693c7b19c67affc69e0966e98e8.mp4",
    likes: ["StarGazer", "AstroFan", "NebulaNerd"],
    comments: [
      {
        user: "GalacticVoyager",
        userImageUrl:
          "https://i.pinimg.com/originals/8c/52/8a/8c528a4029698d3c4a1fd5fc4bea97fb.png",
        text: "Mesmerizing!",
        timestamp: "2024-08-22T12:00:00Z",
      },
      {
        user: "StarGazer",
        userImageUrl:
          "https://i.pinimg.com/originals/87/42/4a/87424a515a402f676ed07c382f28972b.jpg",
        text: "I love how the clouds move across the sky.",
        timestamp: "2024-08-22T12:30:00Z",
      },
    ],
    timestamp: "2024-08-22T11:00:00Z",
  },
  {
    id: 3,
    user: "CometChaser",
    userImageUrl:
      "https://i.pinimg.com/originals/b2/10/83/b21083415c5647a79d2dd3eb2196b39f.jpg",
    text: "Loving this new telescope I just got!",
    mediaUrl:
      "https://i.pinimg.com/originals/ca/91/68/ca91685c9494c75e368ebda10171b740.jpg",
    likes: ["LunarExplorer", "NebulaNerd", "StarGazer"],
    comments: [
      {
        user: "AstroFan",
        userImageUrl:
          "https://i.pinimg.com/originals/6d/87/0a/6d870a5aa844cecc8cd4637fd6545f1b.jpg",
        text: "That's an awesome shot!",
        timestamp: "2024-08-22T13:00:00Z",
      },
    ],
    timestamp: "2024-08-22T08:00:00Z",
  },
  {
    id: 4,
    user: "AstroFan",
    userImageUrl:
      "https://i.pinimg.com/originals/11/f5/80/11f5806d42b65a325b57f83d3379c685.jpg",
    text: "Captured some amazing shots of Mars!",
    mediaUrl:
      "https://i.pinimg.com/originals/a4/f5/b6/a4f5b68acaa5dcd2709a290ee41fb4f2.jpg",
    likes: ["CometChaser", "StarGazer", "NebulaNerd"],
    comments: [
      {
        user: "GalacticVoyager",
        userImageUrl:
          "https://i.pinimg.com/originals/b2/10/83/b21083415c5647a79d2dd3eb2196b39f.jpg",
        text: "Red planet never looked better!",
        timestamp: "2024-08-22T14:00:00Z",
      },
    ],
    timestamp: "2024-08-22T09:30:00Z",
  },
  {
    id: 5,
    user: "GalacticVoyager",
    userImageUrl:
      "https://i.pinimg.com/originals/2c/5f/5c/2c5f5c9a9067c00f51d8ead82b5f1661.png",
    text: "Experimenting with long exposure photography!",
    mediaUrl:
      "https://i.pinimg.com/originals/27/65/5a/27655a6a4ec6c3dcff2ab1c2fedfa2e5.jpg",
    likes: ["AstroFan", "StarGazer", "NebulaNerd"],
    comments: [
      {
        user: "StarGazer",
        userImageUrl:
          "https://i.pinimg.com/originals/6d/87/0a/6d870a5aa844cecc8cd4637fd6545f1b.jpg",
        text: "The stars look like trails, so cool!",
        timestamp: "2024-08-22T10:30:00Z",
      },
      {
        user: "NebulaNerd",
        userImageUrl:
          "https://i.pinimg.com/originals/11/f5/80/11f5806d42b65a325b57f83d3379c685.jpg",
        text: "This is amazing!",
        timestamp: "2024-08-22T11:30:00Z",
      },
    ],
    timestamp: "2024-08-22T07:45:00Z",
  },
  {
    id: 6,
    user: "NebulaNerd",
    userImageUrl:
      "https://i.pinimg.com/originals/8c/52/8a/8c528a4029698d3c4a1fd5fc4bea97fb.png",
    text: "Exploring the Orion Nebula through my new telescope.",
    mediaUrl:
      "https://i.pinimg.com/originals/8f/7b/88/8f7b88562baacd9784ad80eca790319a.jpg",
    likes: ["GalacticVoyager", "LunarExplorer", "CometChaser"],
    comments: [],
    timestamp: "2024-08-22T08:00:00Z",
  },
  {
    id: 7,
    user: "StarGazer",
    userImageUrl:
      "https://i.pinimg.com/originals/87/42/4a/87424a515a402f676ed07c382f28972b.jpg",
    text: "Photographed a passing comet last night!",
    mediaUrl:
      "https://i.pinimg.com/originals/8c/e8/e6/8ce8e611a0d66bfff6a01d1198fad2de.jpg",
    likes: ["NebulaNerd", "AstroFan", "GalacticVoyager"],
    comments: [
      {
        user: "CometChaser",
        userImageUrl:
          "https://i.pinimg.com/originals/b2/10/83/b21083415c5647a79d2dd3eb2196b39f.jpg",
        text: "So cool to see a comet up close!",
        timestamp: "2024-08-22T12:00:00Z",
      },
      {
        user: "LunarExplorer",
        userImageUrl:
          "https://i.pinimg.com/originals/11/f5/80/11f5806d42b65a325b57f83d3379c685.jpg",
        text: "Wow, I missed it!",
        timestamp: "2024-08-22T13:00:00Z",
      },
    ],
    timestamp: "2024-08-22T07:00:00Z",
  },
  {
    id: 8,
    user: "LunarExplorer",
    userImageUrl:
      "https://i.pinimg.com/originals/da/07/93/da0793eda161a2f9b620f16601040d20.jpg",
    text: "Lunar eclipse coming up, can't wait!",
    mediaUrl:
      "https://i.pinimg.com/originals/2c/34/1a/2c341abe9b38f7ba6d19fff0f3cf8de5.gif",
    likes: ["AstroFan", "GalacticVoyager", "CometChaser"],
    comments: [],
    timestamp: "2024-08-22T08:30:00Z",
  },
  {
    id: 9,
    user: "NebulaNerd",
    userImageUrl:
      "https://i.pinimg.com/originals/11/f5/80/11f5806d42b65a325b57f83d3379c685.jpg",
    text: "Found an interesting star cluster, does anyone know what it's called?",
    mediaUrl:
      "https://i.pinimg.com/originals/91/c7/56/91c75640703760e350f6e197fd4c2413.gif",
    likes: ["StarGazer", "LunarExplorer", "GalacticVoyager"],
    comments: [
      {
        user: "AstroFan",
        userImageUrl:
          "https://i.pinimg.com/originals/6d/87/0a/6d870a5aa844cecc8cd4637fd6545f1b.jpg",
        text: "That looks like the Pleiades!",
        timestamp: "2024-08-22T11:00:00Z",
      },
    ],
    timestamp: "2024-08-22T09:00:00Z",
  },
  {
    id: 10,
    user: "CometChaser",
    userImageUrl:
      "https://i.pinimg.com/originals/2c/5f/5c/2c5f5c9a9067c00f51d8ead82b5f1661.png",
    text: "Learning how to photograph the night sky. Any tips?",
    mediaUrl:
      "https://i.pinimg.com/originals/27/65/5a/27655a6a4ec6c3dcff2ab1c2fedfa2e5.jpg",
    likes: ["NebulaNerd", "StarGazer", "AstroFan"],
    comments: [
      {
        user: "LunarExplorer",
        userImageUrl:
          "https://i.pinimg.com/originals/11/f5/80/11f5806d42b65a325b57f83d3379c685.jpg",
        text: "Try using a higher ISO!",
        timestamp: "2024-08-22T13:00:00Z",
      },
    ],
    timestamp: "2024-08-22T10:00:00Z",
  },
  {
    id: 11,
    user: "AstroFan",
    userImageUrl:
      "https://i.pinimg.com/originals/87/42/4a/87424a515a402f676ed07c382f28972b.jpg",
    text: "Mars was particularly bright tonight!",
    mediaUrl:
      "https://i.pinimg.com/originals/a4/f5/b6/a4f5b68acaa5dcd2709a290ee41fb4f2.jpg",
    likes: ["CometChaser", "StarGazer", "NebulaNerd"],
    comments: [
      {
        user: "GalacticVoyager",
        userImageUrl:
          "https://i.pinimg.com/originals/b2/10/83/b21083415c5647a79d2dd3eb2196b39f.jpg",
        text: "Amazing color contrast!",
        timestamp: "2024-08-22T14:00:00Z",
      },
    ],
    timestamp: "2024-08-22T09:30:00Z",
  },
  {
    id: 12,
    user: "StarGazer",
    userImageUrl:
      "https://i.pinimg.com/originals/11/f5/80/11f5806d42b65a325b57f83d3379c685.jpg",
    text: "Caught a meteor shower last night!",
    mediaUrl:
      "https://i.pinimg.com/originals/8f/7b/88/8f7b88562baacd9784ad80eca790319a.jpg",
    likes: ["NebulaNerd", "AstroFan", "GalacticVoyager"],
    comments: [
      {
        user: "CometChaser",
        userImageUrl:
          "https://i.pinimg.com/originals/b2/10/83/b21083415c5647a79d2dd3eb2196b39f.jpg",
        text: "Must've been amazing to see!",
        timestamp: "2024-08-22T12:00:00Z",
      },
      {
        user: "LunarExplorer",
        userImageUrl:
          "https://i.pinimg.com/originals/11/f5/80/11f5806d42b65a325b57f83d3379c685.jpg",
        text: "Wish I was there!",
        timestamp: "2024-08-22T13:00:00Z",
      },
    ],
    timestamp: "2024-08-22T07:00:00Z",
  },
  {
    id: 13,
    user: "NebulaNerd",
    userImageUrl:
      "https://i.pinimg.com/originals/8c/52/8a/8c528a4029698d3c4a1fd5fc4bea97fb.png",
    text: "Studying the Andromeda Galaxy. It's so vast!",
    mediaUrl:
      "https://i.pinimg.com/originals/ba/9b/95/ba9b95658404d4e5e2202e627119315b.jpg",
    likes: ["GalacticVoyager", "LunarExplorer", "CometChaser"],
    comments: [],
    timestamp: "2024-08-22T08:00:00Z",
  },
  {
    id: 14,
    user: "CometChaser",
    userImageUrl:
      "https://i.pinimg.com/originals/8f/7b/88/8f7b88562baacd9784ad80eca790319a.jpg",
    text: "Looking forward to the next lunar mission!",
    mediaUrl:
      "https://i.pinimg.com/originals/be/3b/61/be3b610ec9d274e71359c8a4c3678e06.jpg",
    likes: ["AstroFan", "GalacticVoyager", "CometChaser"],
    comments: [],
    timestamp: "2024-08-22T08:30:00Z",
  },
  {
    id: 15,
    user: "StarGazer",
    userImageUrl:
      "https://i.pinimg.com/originals/6d/87/0a/6d870a5aa844cecc8cd4637fd6545f1b.jpg",
    text: "Spotted a rare supernova in a distant galaxy!",
    mediaUrl:
      "https://i.pinimg.com/originals/f5/66/38/f56638d10c8cb4ed2e6aa3b89adb46fb.jpg",
    likes: ["NebulaNerd", "StarGazer", "AstroFan"],
    comments: [
      {
        user: "LunarExplorer",
        userImageUrl:
          "https://i.pinimg.com/originals/2c/5f/5c/2c5f5c9a9067c00f51d8ead82b5f1661.png",
        text: "Supernovas are always fascinating!",
        timestamp: "2024-08-22T13:00:00Z",
      },
    ],
    timestamp: "2024-08-22T10:00:00Z",
  },
  {
    id: 16,
    user: "AstroFan",
    userImageUrl:
      "https://i.pinimg.com/originals/11/f5/80/11f5806d42b65a325b57f83d3379c685.jpg",
    text: "Jupiter and its moons through my telescope.",
    mediaUrl:
      "https://i.pinimg.com/originals/27/65/5a/27655a6a4ec6c3dcff2ab1c2fedfa2e5.jpg",
    likes: ["CometChaser", "NebulaNerd", "StarGazer"],
    comments: [
      {
        user: "LunarExplorer",
        userImageUrl:
          "https://i.pinimg.com/originals/87/42/4a/87424a515a402f676ed07c382f28972b.jpg",
        text: "Incredible detail!",
        timestamp: "2024-08-22T11:00:00Z",
      },
    ],
    timestamp: "2024-08-22T09:00:00Z",
  },
  {
    id: 17,
    user: "LunarExplorer",
    userImageUrl:
      "https://i.pinimg.com/originals/11/f5/80/11f5806d42b65a325b57f83d3379c685.jpg",
    text: "Getting ready for the Mars rover landing.",
    mediaUrl:
      "https://i.pinimg.com/originals/a4/f5/b6/a4f5b68acaa5dcd2709a290ee41fb4f2.jpg",
    likes: ["StarGazer", "NebulaNerd", "CometChaser"],
    comments: [
      {
        user: "AstroFan",
        userImageUrl:
          "https://i.pinimg.com/originals/2c/5f/5c/2c5f5c9a9067c00f51d8ead82b5f1661.png",
        text: "Can’t wait to see the first images!",
        timestamp: "2024-08-22T14:00:00Z",
      },
    ],
    timestamp: "2024-08-22T09:30:00Z",
  },
  {
    id: 18,
    user: "JohnDoe",
    userImageUrl:
      "https://i.pinimg.com/originals/9d/a8/24/9da824c644d942d03cc433bf7cf17f41.jpg",
    text: "Had a great day at the beach!",
    mediaUrl:
      "https://i.pinimg.com/originals/a4/68/82/a46882fa673dae9ae4e0735107d83ebe.jpg",
    likes: ["1234", "sgrsbu", "hi"],
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
    id: 19,
    user: "Alice",
    userImageUrl:
      "https://i.pinimg.com/originals/57/99/f0/5799f03b2f1d549e1ab57a00708dd0e5.png",
    text: "Check out this cool video I made!",
    mediaUrl:
      "https://v1.pinimg.com/videos/mc/720p/d7/8f/17/d78f17c00d9cdc63814b6ec7057731bc.mp4",
    likes: ["1234", "sgrsbu", "hi"],
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
    id: 20,
    user: "JaneSmith",
    userImageUrl:
      "https://i.pinimg.com/originals/e4/a1/f9/e4a1f9ed4ff025d56078103af77c436f.jpg",
    text: "Loving this new book I'm reading.",
    likes: ["1234", "sgrsbu", "hi"],
    comments: [],
    timestamp: "2024-08-22T08:00:00Z",
  },
  {
    id: 21,
    user: "JohnDoe",
    userImageUrl:
      "https://i.pinimg.com/originals/9d/a8/24/9da824c644d942d03cc433bf7cf17f41.jpg",
    text: "Had a great day at the beach!",
    mediaUrl:
      "https://i.pinimg.com/originals/93/67/65/9367655075b92e11596c90bdd5882aea.jpg",
    likes: ["1234", "sgrsbu", "hi"],
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
    id: 22,
    user: "Alice",
    userImageUrl:
      "https://i.pinimg.com/originals/57/99/f0/5799f03b2f1d549e1ab57a00708dd0e5.png",
    text: "Check out this cool video I made!",
    mediaUrl:
      "https://i.pinimg.com/originals/5e/b9/0e/5eb90e27d1531d2af4140813c1e60371.jpg",
    likes: ["1234", "sgrsbu", "hi"],
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
    id: 23,
    user: "JaneSmith",
    userImageUrl:
      "https://i.pinimg.com/originals/e4/a1/f9/e4a1f9ed4ff025d56078103af77c436f.jpg",
    mediaUrl:
      "https://i.pinimg.com/originals/e4/a1/f9/e4a1f9ed4ff025d56078103af77c436f.jpg",
    text: "Loving this new book I'm reading.",
    likes: ["1234", "sgrsbu", "hi"],
    comments: [],
    timestamp: "2024-08-22T08:00:00Z",
  },
  {
    id: 24,
    user: "JaneSmith",
    userImageUrl:
      "https://i.pinimg.com/originals/e4/a1/f9/e4a1f9ed4ff025d56078103af77c436f.jpg",
    mediaUrl:
      "https://v1.pinimg.com/videos/iht/720p/fd/4a/95/fd4a959ea6953d9359b1a05593fc43c2.mp4",
    text: "Loving this new book I'm reading.",
    likes: ["1234", "sgrsbu", "hi"],
    comments: [],
    timestamp: "2024-08-22T08:00:00Z",
  },
  {
    id: 25,
    user: "JaneSmith",
    userImageUrl:
      "https://i.pinimg.com/originals/e4/a1/f9/e4a1f9ed4ff025d56078103af77c436f.jpg",
    mediaUrl:
      "https://v1.pinimg.com/videos/iht/720p/b2/ea/76/b2ea7693c7b19c67affc69e0966e98e8.mp4",
    text: "Loving this new book I'm reading.",
    likes: ["1234", "sgrsbu", "hi"],
    comments: [],
    timestamp: "2024-08-22T08:00:00Z",
  },
];

const UserFeedComponent: React.FC = () => {
  return (
    <div className="w-full md:w-[65dvw] columns-2 md:columns-3 gap-2 space-y-2  md:gap-4 md:space-y-4 md:p-4">
      {feed.map((item) => (
      <UserFeedCardComp feed={item} key={item.id} />
      ))}
    </div>
  );
};

export default UserFeedComponent;
