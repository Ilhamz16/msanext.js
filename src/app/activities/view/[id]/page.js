'use client'
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react";
import axios from "axios";
import Workgroup from "../../../../component/workgroup.js";
import dynamic from 'next/dynamic';


const DynamicMap = dynamic(() => import('../../../../component/Map.js'), {
    ssr: false

});

export default function ActivityView({ params }) {
    const router = useRouter();
    const [actdata, setActivitydata] = useState(null);
    const [workgroups, setWorkgroups] = useState([]);


    useEffect(() => {
        async function getData() {
            try {
                const { data: res } = await axios.get('http://172.16.1.141:8000/workgroups/');
                if (res) {
                    setWorkgroups(res)
                }
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);


    useEffect(() => {
        async function getData() {
            try {
                const { actdata: res } = await axios.get(`http://172.16.1.141:8000/activities/${params.id}/`);
                if (res.length > 0) {
                    setActivitydata(res)
                }
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, [params.id]);

    return (
        <>
            <div className="col-sm p-2">
                <h3 className='mb-3'>Activity</h3>
                {actdata != null &&
                    (
                        <div className='row'>
                            <div className='col-6'>
                                <p style={{ lineHeight: '2em' }}>
                                    Activity ID : {actdata.activityid}<br />
                                    Activity Date : {actdata.date}<br />
                                    Work Time : {actdata.starttime} - {actdata.endtime}<br />
                                    Weather : {actdata.weather}<br />
                                    Worktype : <Workgroup activitywg={actdata.workgroup} workgroups={workgroups} /><br />
                                    <br />
                                    Description : <br />
                                    {actdata.description}<br />
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className='col-6'>
                <DynamicMap />
            </div>

            <div className='row'>
                <div className='col-12 text-end'>
                    <button className='btn btn-primary' onClick={() => router.push(`/activities/`)}>Back to Activities Page</button>
                </div>
            </div>



        </>
    )
}