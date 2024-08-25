import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useNumberFormatter from "@/hooks/useNumberFormatter";
import { HiMiniUserGroup } from "react-icons/hi2";

const GroupCard = () => {
  return (
    <>
      <div className="flex  w-full justify-between hover:bg-accent py-1 px-2 rounded-[0.5rem] transition-all duration-200 ease-linear ">
        <div className="flex gap-2 items-center ">
          <Avatar className="h-[40px] w-[40px] rounded-[0.5rem]">
            <AvatarImage
              src="https://i.pinimg.com/originals/cf/30/8b/cf308b77f0f6bf330240b9f62824acb1.jpg"
              className="object-cover object-center rounded-[0.5rem]"
            />
            <AvatarFallback className="rounded-[0.5rem]">DE</AvatarFallback>
          </Avatar>
          <span className="text-[14px] text-muted-foreground leading-[1.15] truncate">
            demo group
          </span>
        </div>

        <div className="flex gap-[0.1rem] text-sm text-muted-foreground items-center">
          <HiMiniUserGroup className="" />
          {useNumberFormatter(122)}
        </div>
      </div>
    </>
  );
};
export default GroupCard;
