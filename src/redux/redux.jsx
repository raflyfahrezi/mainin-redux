import { createStore } from 'redux'

const setNama = (state = '', action) => {
    switch (action['type']) {
        case 'SET' :
            state = action['name'] 
            return state
        case 'GET' : 
            return state
        default : 
            return state
    }
}

const store = createStore(setNama)


export default store