import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './single.scss';

const SinglePlayer = () => {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);
    const baseURL = `http://localhost:8000/myplayer/${id}`;

    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setPlayer(response.data);
            })
    }, [baseURL]);

    return (
        <div className='single'>
            <div className="single-container">
                <div className="single-wrapper">
                    <h2>Player Details</h2>
                    {player ? (
                        <div>
                            <p>
                                Name: <strong>{player.name}</strong>
                                <br />Position: <span>{player.position}</span>
                                <br />Age: <span>{player.age}</span>
                                <br />Nat: <span>{player.nat}</span>
                                <br />Foot: <span>{player.foot}</span>
                                <br />Nr: <span>{player.shirt}</span>
                            </p>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <Link to="/my-player" className="back-button">
                    Back to Table
                </Link>
                <Link to={`/edit-player/${id}`} className='back-button'>
                    Edit
                </Link>
            </div>
        </div>
    );
};

export default SinglePlayer;
