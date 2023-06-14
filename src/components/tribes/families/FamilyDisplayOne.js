import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


const OneFamily = (props) => {
    const navigate = useNavigate();
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

    const deleteFamily = (familyId) => {
        axios.delete('http://localhost:8000/api/allFamilies/' + familyId)
            .then(res => {
                navigate('/Main')
            })
            .catch(err => console.log(err))
    };

    return (
        <div className='container4' style={{
            backgroundImage: `transparent`
        }}>
            <br /><br />
            <Link className='btn4' to={`/Main`}>Home</Link>
            <div className='details4'>
                <h1 style={{ textDecoration: 'underline', fontWeight: 'bolder'}}>{family.familyTitle}</h1>
                <br />
                <h3>{family.familyMembers}</h3>
                <br  />
                <h3 style={{ fontFamily: 'cursive'}}>{family.familyStatement}</h3>
                <br /><br />
                <button onClick={(e) => { deleteFamily(family._id) }} className='btn3 btn-danger'>Delete</button>
            </div>
        </div>
    )
}

export default OneFamily;