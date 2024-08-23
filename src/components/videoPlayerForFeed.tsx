"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  MdOutlinePlayCircle,
  MdOutlinePauseCircleOutline,
} from "react-icons/md";
import { Badge } from "@/components/ui/badge";

interface CustomVideoPlayerUserFeedProps {
  src: string;
}

const CustomVideoPlayerUserFeed: React.FC<CustomVideoPlayerUserFeedProps> = ({
  src,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState("0:00");
  const [isPaused, setIsPaused] = useState(false);

  const togglePlayPause = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
        setIsPaused(true);
      } else {
        videoElement.play();
        setIsPaused(false);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const updateTimeLeft = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const remainingTime = Math.max(
        videoElement.duration - videoElement.currentTime,
        0
      );
      const minutes = Math.floor(remainingTime / 60);
      const seconds = Math.floor(remainingTime % 60)
        .toString()
        .padStart(2, "0");
      setTimeLeft(`${minutes}:${seconds}`);
    }
  };

  const handleVolumeChange = () => {
    const videoElement = videoRef.current;
    if (videoElement && videoElement.volume > 0) {
      setIsPlaying(true);
    }
  };

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      const videoElement = videoRef.current;
      if (videoElement) {
        videoElement.play();
        setIsPlaying(true);
      }
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      const videoElement = videoRef.current;
      if (videoElement) {
        videoElement.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (
              window.innerWidth <= 768 &&
              !isPlaying &&
              videoElement &&
              !isPaused
            ) {
              videoElement.play();
              setIsPlaying(true);
            }
          } else {
            if (isPlaying && videoElement) {
              videoElement.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    videoElement?.addEventListener("timeupdate", updateTimeLeft);
    videoElement?.addEventListener("volumechange", handleVolumeChange);

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
        videoElement.removeEventListener("timeupdate", updateTimeLeft);
        videoElement.removeEventListener("volumechange", handleVolumeChange);
      }
    };
  }, [isPlaying, isPaused]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleMetadataLoaded = () => {
        const totalDuration = videoElement.duration;
        const minutes = Math.floor(totalDuration / 60);
        const seconds = Math.floor(totalDuration % 60)
          .toString()
          .padStart(2, "0");
        setTimeLeft(`${minutes}:${seconds}`);
      };

      videoElement.addEventListener("loadedmetadata", handleMetadataLoaded);

      return () => {
        videoElement.removeEventListener(
          "loadedmetadata",
          handleMetadataLoaded
        );
      };
    }
  }, [src]);

  return (
    <div
      className="relative w-full h-auto bg-black rounded-[0.5rem] group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-auto cursor-pointer rounded-[0.5rem] lg:opacity-40 lg:group-hover:opacity-100 transition-all"
        loop
        playsInline
        onClick={togglePlayPause}
      />
      <div className="absolute bottom-2 right-1 transition-all text-white text-xl md:text-2xl bg-black bg-opacity-60 rounded-full p-1 md:p-2 text-center flex justify-center items-center">
        {isPlaying ? <MdOutlinePauseCircleOutline /> : <MdOutlinePlayCircle />}
      </div>

      <Badge className="absolute top-2 left-2 text-[0.55rem] tabular-nums py-1 px-1 bg-opacity-60 text-white rounded">
        {timeLeft}
      </Badge>
    </div>
  );
};

export default CustomVideoPlayerUserFeed;
