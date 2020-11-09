import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'

const index = ({ name }) => {
    const Router = useRouter()

    return (
        <div>
            <p>Nama : { name }</p>
            <button onClick={ () => Router.push('/add') }>Tambah</button>
        </div>
    )
}

const MapToProps = state => {
    return {
        name : state
    }
}

export default connect(MapToProps)(index)
