import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


const OneTribe = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [tribe, setTribe] = useState({});
    const [family, setFamily] = useState({});

    useEffect(() => {
        let isMounted = true;

        axios.get("http://localhost:8000/api/oneTribe/" + id)
            .then((res) => {
                if (isMounted) {
                setTribe(res.data);
                setFamily(res.data.family)
            }
            })
            .catch((err) => {
                console.log(err);
            });
        return ()=> {
            isMounted = false;
        };
    }, [id]);

    const deleteTribe = (tribeId) => {
        axios.delete('http://localhost:8000/api/allTribes/' + tribeId)
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
            <Link className='btn4' to={`/`}>Home</Link>
            <div className='details4'>
                <h1 style={{ textDecoration: 'underline', fontWeight: 'bolder', color: 'greenyellow'}}>{tribe.tribeTitle}</h1>
                <br />
                <h3>How Many Members: {tribe.tribeMembers}</h3>
                <h3>Tribe Statement: {tribe.tribeStatement}</h3>
                <br /><br />
                {family.familyMembers > 0 && (
                    <>
                        <h2>Tribe Members:</h2>
                        <ul>
                            {family.family.map((familyMember) => (
                                <li className='innerBox' key={familyMember.id}>{familyMember.familyTitle}</li>
                            ))}
                        </ul>
                        <br /><br />
                    </>
                )}
                <br /><br />
                <button onClick={(e) => { deleteTribe(tribe._id) }} className='btn3 btn-danger'>Delete from library</button>
            </div>
        </div>
    )
}

export default OneTribe;