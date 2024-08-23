import Image from "next/image";
import UserFeedComponent from "@/components/userFeedSection"



export default function Home() {
  return (
    <>
      <h1 className="text-foreground text-3xl font-bold ">hello</h1>

      <Image
        src="/images/nextjs.png"
        alt="Next.js Logo"
        width={200}
        height={200}
      />
      <UserFeedComponent/>
     

    </>
  );
}
