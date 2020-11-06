import { createStore } from 'redux'

const setNama = (state = 'Asep', action) => {
    switch (action['type']) {
        case 'SET' :
            state = action['nama'] 
            return state
        case 'GET' : 
            return state
        default : 
            return state
    }
}

const store = createStore(setNama)

export default store