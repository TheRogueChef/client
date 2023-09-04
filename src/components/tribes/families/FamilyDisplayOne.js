import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const OneFamily = (props) => {

    const { id } = useParams();
    const [family, setFamily] = useState({});

    useEffect(() => {
        let isMounted = true;

        axios.get("http://localhost:8000/api/oneFamily/" + id)
            .then((res) => {
                if (isMounted) {
                setFamily(res.data)
            }
            })
            .catch((err) => {
                console.log(err);
            });
        return ()=> {
            isMounted = false;
        };
    }, [id]);



    return (
        <div className='oneBodyBox'>
            <br /><br />
            <div className='oneBox'>
                <h1 style={{ textShadow: '2px 2px black', fontSize: '100px',  color:"darkRed"}}>----- {family.familyTitle} -----</h1>
                <br />
                <h1 style={{ textShadow: '1px 1px pink' }}>{family.familyMembers}</h1>
                <br  />
                <h3 style={{ fontStyle: 'italic', textShadow: '1px 1px pink' }}>"{family.familyStatement}"</h3>
                <br /><br />
                <Link className='onebtn' to={`/allFamilies`}>Back</Link>
                
            </div>
        </div>
    )
}

export default OneFamily;