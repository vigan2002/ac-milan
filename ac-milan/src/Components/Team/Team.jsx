import React, { useState, useEffect } from 'react'
import './team.scss'
import { data } from "../../Assets/data/teamdata"
import Modal from './Modal/Modal'


const Team = () => {

    const [players, setPlayers] = useState(data.players);
    const [category, setCategory] = useState();

    //modal
    const [single, setSingle] = useState();
    const [openModal, setOpenModal] = useState(false);

    const getSingleEl = (el) => {
        setOpenModal(true);
        setSingle(el);
    }


    const filterByCat = (byCat) => {
        const filteredData = data.players.filter(
            (obj) => (byCat === obj.category)
        );
        setPlayers(filteredData)
    }

    useEffect(() => {
        const cat = [];
        data.players.forEach((element) => {
            if (!cat.find((e) => (e === element.category))) {
                cat.push(element.category);
            }
        });
        setCategory(cat)
    }, [])


    return (
        <div className='team'>
            <div className='team-wrapper'>
                <h1>Ac Milan Team</h1>
                <div className='categories'>
                    <button onClick={() => setPlayers(data.players)}>All</button>
                    {category?.map((el) => (
                        <button onClick={() => filterByCat(el)}>{el}</button>
                    ))}
                </div>
                <div className='players'>
                    {
                        players.map((el) => (
                            <div className='card-player' key={el.id} onClick={() => getSingleEl(el)}>
                                <div className='ovr-card'>
                                    <h2>OVR:<br /><br /><span>{el.ovr}</span></h2>
                                    {/* <h2>POS:<br />{el.position}</h2> */}
                                </div>
                                <div className='info-card'>
                                    <img src={el.image} alt={el.name} />
                                    <p>Name: <h2>{el.name}</h2>
                                    </p>
                                </div>
                            </div>
                            
                        ))
                    }
                </div>
            </div>
            {
                openModal && (
                    <Modal
                        image={single.image}
                        name={single.name}
                        shirt={single.shirt}
                        position={single.position}
                        age={single.age}
                        nat={single.nat}
                        foot={single.foot}
                        closeModal={()=> setOpenModal()}
                    />
                )
            }
        </div>
    )
}

export default Team