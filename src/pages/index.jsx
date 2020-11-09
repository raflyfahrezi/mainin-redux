/** @jsx jsx */
import { jsx } from 'theme-ui' 
import { useRouter } from 'next/router'
import { connect } from 'react-redux'

const index = ({ name }) => {
    const Router = useRouter()

    const Container = {
        width : '100%',
        maxWidth : '300px',
        
        m : '0 auto',
        p : '30px 0',
        
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
    }

    return (
        <div sx={ Container }>
            <h1>Current Name</h1>
            <p>{ name }</p>
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