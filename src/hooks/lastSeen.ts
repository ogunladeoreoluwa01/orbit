import { useState, useEffect } from "react";

interface UseLastSeenOptions {
  date: Date;
  isShort?: boolean;  // Optional boolean to indicate short format
}

const useLastSeen = ({ date, isShort = false }: UseLastSeenOptions): string => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const calculateTimeAgo = () => {
      const now = new Date();
      const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

      let interval = Math.floor(seconds / 31536000);

      if (interval >= 1) {
        setTimeAgo(isShort ? `${interval}y` : `${interval} year${interval > 1 ? 's' : ''} ago`);
        return;
      }
      interval = Math.floor(seconds / 2592000);
      if (interval >= 1) {
        setTimeAgo(isShort ? `${interval}mo` : `${interval} month${interval > 1 ? 's' : ''} ago`);
        return;
      }
      interval = Math.floor(seconds / 86400);
      if (interval >= 1) {
        setTimeAgo(isShort ? `${interval}d` : `${interval} day${interval > 1 ? 's' : ''} ago`);
        return;
      }
      interval = Math.floor(seconds / 3600);
      if (interval >= 1) {
        setTimeAgo(isShort ? `${interval}h` : `${interval} hour${interval > 1 ? 's' : ''} ago`);
        return;
      }
      interval = Math.floor(seconds / 60);
      if (interval >= 1) {
        setTimeAgo(isShort ? `${interval}m` : `${interval} minute${interval > 1 ? 's' : ''} ago`);
        return;
      }
      setTimeAgo(isShort ? `${seconds}s` : `${seconds} second${seconds > 1 ? 's' : ''} ago`);
    };

    calculateTimeAgo();
    const interval = setInterval(calculateTimeAgo, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [date, isShort]);

  return timeAgo;
};

export default useLastSeen;
