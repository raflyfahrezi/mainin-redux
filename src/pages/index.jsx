import React, { useState } from 'react'

const index = () => {
    const [ nama, setNama ] = useState('')

    const submitHandler = e => {
        e.preventDefault()
    }

    const namaHandler = e => {
        const Element = e.target

        setNama(Element['value'])
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
            <p>Nama : { nama }</p>
        </div>
    )
}

export default index
