
import React from "react";
import Link from 'next/link'
import {ModeToggle} from "@/components/modeToggle"
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


const HeaderComp = () =>{
return (
    <>
 <header className="w-full fixed  z-30 top-0 bg-background bg-opacity-50 flex py-1 justify-between px-2 md:px-4 lg:px-6">
      {" "}
      <Link
        href={"/"}
        className="font-black text-primary text-md flex items-center justify-around "
      >
        YUKI{" "}
      </Link>{" "}
      <div className="flex items-center gap-2">
        {true ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className=" cursor-pointer transition-all duration-150 ease-linear ">
                <AvatarImage
                  src="https://i.pinimg.com/originals/cf/30/8b/cf308b77f0f6bf330240b9f62824acb1.jpg"
                  
                />
                <AvatarFallback className="uppercase ">
                 DE
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56  "
            >
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem className="focus:font-black transition-all group ">
                  Profile
                  <DropdownMenuShortcut>
                    <TiUser  className="text-md group-hover:text-foreground group-hover:text-lg transition-all duration-200 ease-linear " />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:font-black transition-all group ">
                  Settings
                  <DropdownMenuShortcut>
                    <IoMdSettings  className="text-md group-hover:text-foreground group-hover:text-lg transition-all duration-200 ease-linear" />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="group focus:font-black transition-all  ">
                Achievements
                <DropdownMenuShortcut>
                  <GiTrophyCup  className="text-md group-hover:text-foreground group-hover:text-lg transition-all duration-200 ease-linear" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem
                disabled
                className="focus:font-black transition-all  "
              >
                Support
              </DropdownMenuItem>
              <DropdownMenuItem
                disabled
                className="focus:font-black transition-all  "
              >
                Coming Soon
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                
                className="mb-1 focus:bg-destructive focus:font-black transition-all  group"
              >
                Log out
                <DropdownMenuShortcut>
                  <TbLogout className="text-md group-hover:text-foreground group-hover:text-lg transition-all duration-200 ease-linear" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            className="text-foreground group  transition-all duration-150 ease-linear focus:font-extrabold"
          >
            <GiExitDoor className="text-md group-hover:text-foreground group-hover:text-lg transition-all duration-200 ease-linear"/>
            <span className="md:inline-block hidden">Log In</span>
          </Button>
        )}

      </div>
    </header>
    
    
    </>
)
}
export default HeaderComp