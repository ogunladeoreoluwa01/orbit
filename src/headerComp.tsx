import React from "react";
import { useNavigate,Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TiUser } from "react-icons/ti";
import { IoMdSettings } from "react-icons/io";
import { GiTrophyCup, GiExitDoor } from "react-icons/gi";
import { TbLogout } from "react-icons/tb";

import { ModeToggle } from "@/components/modeToggle";


interface HeaderProp {
  username?: string;
  userProfileImg?: string;
}

const HeaderComp: React.FC<HeaderProp> = ({
  username = "Shadcn",
  userProfileImg = "https://github.com/shadcn.png",
}) => {
  const navigate = useNavigate();




  return (

  );
};
export default HeaderComp
