'use client'
import { useRouter } from "next/navigation"

export default function WorkgroupView ({params}) {
    return(
        <>
        <p>Ini adalah page untuk workgroup {params.id}</p>
    
        </>
    )
}