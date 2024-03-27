'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import DataTable from 'react-data-table-component';
import Workgroup from '../../component/workgroup'


export default function ActivitiesPage() {
    const router = useRouter();
    const [actdata, setActdata] = useState([]);

    const columns = [
        {
            name: 'Activity ID',
            selector: row => row.activityid,
        },
        {
            name: 'Date',
            selector: row => row.date,
        },
        {
            name: 'weather',
            selector: row => row.weather,
        },
        {
            name: 'Description',
            selector: row => row.description,
        },
        {
            name: 'Action',
            cell: (row) => (
                <>
                    <button className='btn btn-primary' onClick={() => router.push(`/activities/view/ ${row.id}`)}>View</button>
                </>
            ),
            ignoreRowClick: true
        }
    ];


    useEffect(() => {
        async function getData() {
            try {
                const { data: res } = await axios.get('http://172.16.1.141:8000/activities/');
                if (res.length > 0) {
                    setActdata(res)
                }
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);
    

    return (
        <div className="col-sm p-2">
            <h3>Activities</h3>
            <DataTable
                columns={columns}
                data={actdata}
            />

        </div>
    )

}


