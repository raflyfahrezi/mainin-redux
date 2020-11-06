import React, { useState, useEffect, useRef } from 'react'
import { SET } from '../redux/action' 
import Storage from '../redux/store'

const index = () => {
    const InputNama = useRef()

    const [ nama, setNama ] = useState({
        type : SET(),
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

        InputNama.current.value = ''
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
                    <input 
                        type="text" 
                        name="nama" 
                        id="nama" 
                        onChange={ namaHandler }
                        ref={ InputNama }
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <p>Nama : { anotherName }</p>
        </div>
    )
}

export default index
