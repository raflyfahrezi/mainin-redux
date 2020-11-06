import { SET } from './action'

const Reducer = (state = '', action) => {
    switch (action['type']) {
        case SET():
            state = ''
            state = action['nama']
            return state
        default:
            return state
    }
}

export default Reducer