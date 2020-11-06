import React, { useState, useEffect } from 'react'
import Storage from '../redux/redux'

const index = () => {
    const [ nama, setNama ] = useState({
        type : 'SET',
        nama : null
    })

    const [ stateChanged, setStateChanged ] = useState(0)

    const [ anotherName, setAnotherName ] = useState(Storage.getState())

    useEffect(() => {
        setAnotherName(Storage.getState())
    }, [ stateChanged ])

    const submitHandler = e => {
        e.preventDefault()
        
        Storage.dispatch(nama)

        setStateChanged(prev => prev + 1)
    }

    const namaHandler = e => {
        const Element = e.target
        const Temp = { ...nama }

        Temp['nama'] = Element['value']

        setNama(Temp)
    }

    return (
        <div>
            <div>
                <form onSubmit={ submitHandler }>
                    <label>Masukan Nama : </label>
                    <input type="text" name="nama" id="nama" onChange={ namaHandler }/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <p>Nama : { anotherName }</p>
        </div>
    )
}

export default index
