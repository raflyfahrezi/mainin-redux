import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getLocalStorage } from '../storage/storage'

const index = () => {
    const Router = useRouter()

    const [ name, setName ] = useState('')


    useEffect(() => {
        setName(getLocalStorage())
    }, [])

    return (
        <div>
            <p>Nama : { name }</p>
            <button onClick={ () => Router.push('/add') }>Tambah</button>
        </div>
    )
}

export default index
