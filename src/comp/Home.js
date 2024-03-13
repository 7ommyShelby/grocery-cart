import React, { useEffect, useState } from 'react'
import './home.css'
import Carrd from './Carrd'
import SimpleSnackbar from './Toast'

const Home = () => {

    const [list, setlist] = useState([]);

    const [input, setInput] = useState("")

    const [open, setOpen] = useState(false);

    


    

    function onclickhandler() {
        if(input==""){
            alert('Ente Data')
            return;
        }
        setOpen(true);

        setlist((prev) => {
            localStorage.setItem("list", JSON.stringify([...prev, input]))
            return [...prev, input]
        })
        setInput("")

    }

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("list")) == null) {
            return setlist([])
        }
        setlist(() => {
            return JSON.parse(localStorage.getItem("list"))
        })
    }, [])


    return (
        <section className='container'>
            <SimpleSnackbar
                open={open}
                setOpen={setOpen}
            />
            <div className="input">
                <input className='feed' type="text" placeholder='Enter Item' onChange={(e) => {
                    setInput(e.target.value)
                }} value={input} />
                <button className='add' onClick={() => {
                    onclickhandler()
                }}>Add</button>
            </div>
            <div className="display">

                {
                    list.map((e, idx) => {

                        return (
                            <Carrd
                                item={e}
                                index={idx}
                                list={list}
                                setlist={setlist}
                                
                            />
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Home
