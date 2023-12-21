import React, { useState, useEffect } from 'react'
import './academy.scss'
import { data } from '../../Assets/data/academydata'


const Academy = () => {

  const [players] = useState(data.players);
  // const [players, setPlayers] = useState(data.players);
  // const [age, setAge] = useState();

  // const filterByAge = (byAge) => {
  //   const filteredData = data.players.filter(
  //     (obj) => (byAge === obj.age)
  //   );
  //   setPlayers(filteredData)
  // }

  useEffect(() => {
    const age = [];
    data.players.forEach((element) => {
      if (!age.find((e) => (e === element.age))) {
        age.push(element.age)
      }
    });
    // setAge(age);
  }, [])


  return (
    <div className='academy'>
      <div className='academy-wrapper'>
        <h1>Academy Players</h1>
        {/* <div>
          <button onClick={() => setPlayers(data.players)}>All</button>
          {
            age?.map((el) => (
              <button onClick={() => filterByAge(el)}>{el}</button>
            ))
          }
        </div> */}
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Nationality</th>
                <th>Position</th>
                <th>Foot</th>
              </tr>
            </thead>
            <tbody>
              {players?.map((el) => (
                <tr key={el.id}>
                  <td>{el.name}</td>
                  <td>{el.age}</td>
                  <td>{el.nat}</td>
                  <td>{el.position}</td>
                  <td>{el.foot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Academy