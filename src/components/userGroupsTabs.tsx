

import GroupCard from "@/components/groupCard"
const UserDashBoardGroupsTab =() =>{

    return(
        <div className="w-full md:p-4  flex flex-col   gap-1">
<h1 className="text-sm text-muted-foreground font-semibold px-2 mb-1">Your Groups</h1>


<section className="flex flex-col gap-1">
{Array(5).fill(<GroupCard />)}



</section>
</div>
    )
}

export default UserDashBoardGroupsTab