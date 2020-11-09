import React, {  useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Storage from '../redux/store'
import { SET } from '../redux/action'

const add = () => {
    const Router = useRouter()

    const InputNama = useRef()

    const [ nama, setNama ] = useState({
        type : SET(),
        nama : null
    })

    const submitHandler = e => {
        e.preventDefault()
        
        Storage.dispatch(nama)

        InputNama.current.value = ''
    }

    const namaHandler = e => {
        const Element = e.target
        const Temp = { ...nama }

        Temp['nama'] = Element['value']

        setNama(Temp)
    }

    return (
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
            <button onClick={ () => Router.push('/') }>Home</button>
        </div>
    )
}

export default add