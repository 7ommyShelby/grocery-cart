import React from 'react'
import './card.css'
import { useEffect, useState } from 'react'


const Carrd = ({ item, index, list, setlist }) => {

    const [check, setcheck] = useState(false);

    useEffect(() => {
        console.log(check);


    }, [check])


    return (
        <div className='card'>
            <div className='left'>
                <input type="checkbox" name="" id="check" onChange={(e) => {
                    setcheck(e.target.checked)
                }} />
                <p>{item}</p>
            </div>

            <button className='delete' onClick={() => {
                list.splice(index, 1)

                setlist((prev) => {

                    localStorage.setItem("list", JSON.stringify([...prev]))

                    return [...prev];
                })


            }}>Delete</button>
        </div>
    )
}

export default Carrd
