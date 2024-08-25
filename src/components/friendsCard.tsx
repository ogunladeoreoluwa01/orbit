import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useLastSeen from "@/hooks/lastSeen";

const FriendCard = () => {
  const demodate = new Date(Date.now() - 5 * 60 * 1000);
  const isOnline = true;
  const lastSeen = useLastSeen({ date: demodate, isShort: true });
  return (
    <>
      <div className="flex  w-full justify-between hover:bg-accent py-1 px-2 rounded-[0.5rem] transition-all duration-200 ease-linear ">
        <div className="flex gap-2 items-center ">
          <div className="relative">
            <Avatar className="h-[40px] w-[40px] ">
              <AvatarImage
                src="https://i.pinimg.com/originals/cf/30/8b/cf308b77f0f6bf330240b9f62824acb1.jpg"
                className="object-cover object-center"
              />
              <AvatarFallback>DE</AvatarFallback>
            </Avatar>
            <div className="w-[0.85rem] h-[0.85rem] z-20 border-background border-2 dark:border-[2.8px] hover:border-black hover:border-opacity-30 transition-all duration-200 ease-linear rounded-full absolute -bottom-1 -right-1  bg-emerald-600 "></div>
          </div>

          <span className="text-[14px] text-muted-foreground leading-[1.15] truncate">
            demo group
          </span>
        </div>
        <div className="flex gap-[0.1rem] text-sm text-muted-foreground items-center">
          {lastSeen}
        </div>
      </div>
    </>
  );
};
export default FriendCard;
