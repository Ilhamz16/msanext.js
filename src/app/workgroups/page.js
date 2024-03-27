'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import DataTable from 'react-data-table-component';

export default function WorkgroupsPage() {
    const router = useRouter();
    const [actdata, setActdata] = useState([]);
    const [workgroup, setWorkgroup] = useState({
        wgid: '',
        name: '',
        description: ''
    });

    const columns = [
        {
            name: 'Workgroups ID',
            selector: row => row.wgid,
        },
        {
            name: 'Date',
            selector: row => row.name,
        },
        {
            name: 'Description',
            selector: row => row.description,
        },
        {
            name: 'Action',
            cell: (row) => (
                <>
                    <button className='btn btn-primary' onClick={() => router.push(`/workgroups/view/${row.id}`)}>View</button>
                </>
            ),
            ignoreRowClick: true
        }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWorkgroup(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data: newWorkgroup } = await axios.post('http://172.16.1.141:8000/workgroups/', workgroup);
            setActdata(prevState => [...prevState, newWorkgroup]);
            setWorkgroup({
                wgid: '',
                name: '',
                description: ''
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        async function getData() {
            try {
                const { data: res } = await axios.get('http://172.16.1.141:8000/workgroups/');
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
            <h3>Workgroup</h3>
            <DataTable
                columns={columns}
                data={actdata}
            />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="workgroupID">Workgroup ID</label>
                    <input type="text" className="form-control" id="wgid" name="workgroupID" value={workgroup.workgroupID} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={workgroup.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={workgroup.description} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Add Workgroup</button>
            </form>
        </div>
    )
}
