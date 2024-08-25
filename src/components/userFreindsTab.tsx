
import { Separator } from "@/components/ui/separator"
import FriendCard from "@/components/friendsCard"
const UserDashBoardFriendsTab =() =>{

    return(
        <div className="w-full md:p-4  flex flex-col  gap-1">
<h1 className="text-sm text-muted-foreground font-semibold px-2 mb-1">Friends</h1>


<section className="flex flex-col gap-1">
{Array(5).fill(<FriendCard />)}



</section>
</div>
    )
}

export default UserDashBoardFriendsTab