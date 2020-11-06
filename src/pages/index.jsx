import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Storage from '../redux/store'

const index = () => {
    const Router = useRouter()

    const [ anotherName, setAnotherName ] = useState(Storage.getState())

    return (
        <div>
            <p>Nama : { anotherName }</p>
            <button onClick={ () => Router.push('/add') }>Tambah</button>
        </div>
    )
}

export default index
