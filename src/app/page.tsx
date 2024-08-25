"use client";
import Image from "next/image";
import UserFeedComponent from "@/components/userFeedSection";
import UserDashBoardGroupsTab from "@/components/userGroupsTabs";
import UserDashBoardFriendsTab from "@/components/userFreindsTab";
import { ModeToggle } from "@/components/modeToggle";
import { ScrollArea } from "@/components/ui/scroll-area"


export default function Home() {
  return (
    <>
      <ModeToggle />
      <section className="flex flex-wrap items-start justify-around ">
        <section className="w-[100%] md:w-[23%]   flex flex-col items-center gap-2 bg-card border-border  rounded-[0.5rem]  ">
          <UserDashBoardGroupsTab />
          <UserDashBoardFriendsTab />
          <p></p>
        </section>

        <ScrollArea className="w-full md:w-[70%] h-full    ">
          <UserFeedComponent />
        </ScrollArea>
      </section>
    </>
  );
}
