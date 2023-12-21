import React, { useState, useEffect } from 'react'
import './style.scss'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const MyPlayer = () => {

    const [load, setLoad] = useState(true);
    const [data, setData] = useState([]);
    const baseURL = "http://localhost:8000/myplayer";

    const toggleIsLoading = () => {
        setLoad(current => !current);
      };

    const handleDelete = (id) => {
        axios.delete(baseURL + "/" + id)
            .then((response) => {
                console.log(response.data);
            });
    };

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setData(response.data)
        })
    }, [load]);

    return (
       
        <div className='player'>
            <div className='player-wrapper'>
                <div>
                    <h1>My Player</h1>
                    <button><NavLink to={`/create`} className='create-button'>Create</NavLink></button>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Nationality</th>
                                <th>Shirt</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((el) => (
                                <tr key={el.id}>
                                    <td>{el.name}</td>
                                    <td>{el.age}</td>
                                    <td>{el.nat}</td>
                                    <td>{el.shirt}</td>
                                    <td><button><NavLink to={`/player/${el.id}`}  className='view-button'>View</NavLink></button></td>
                                    <td><button onClick={() => {handleDelete(el.id); toggleIsLoading() }}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    )
}

export default MyPlayer