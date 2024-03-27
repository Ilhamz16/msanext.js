"use client"

import { useEffect } from "react"

export default function BootstrapClient() {
    useEffect (() => {
        require('bootstrap/dist/js/bootstrap.bundel.min.js')
    }, [])
    return null
}
