import { setLocalStorage, getLocalStorage } from '../storage/storage' 
import { SET } from './action'

const Reducer = (state = getLocalStorage(), action) => {
    switch (action['type']) {
        case SET():
            state = ''
            state = action['nama']
            setLocalStorage(state)
            return state
        default:
            return state
    }
}

export default Reducer