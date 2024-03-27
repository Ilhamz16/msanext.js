`use client`

//1 guna pill badge untuk workgroup
//2 ambil data dari workgroup
//3 matchkan nama array.filter


export default function Workgroup({activitywg, workgroup}){

    function getWgName(a){
        if(WorkgroupsPage.length != 0){
            const selwg = workgroups.filter(wg => wg.id == a)
            return selwg[0].name
        }
    }


    return(
        <>
        {activitywg.map((a)=>{
            return (<span class="badge text-bg-primary">{getWgName(a)}</span>)
        })}
        </>
    )
    
}