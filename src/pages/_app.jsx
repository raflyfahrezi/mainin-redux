import { Provider } from 'react-redux'
import Store from '../redux/store'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <Provider store={ Store }>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp