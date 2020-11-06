const isBrowser = typeof window !== 'undefined'

const setLocalStorage = value => {
    if (isBrowser) {
        localStorage.setItem('nama', value)
    }
}

const getLocalStorage = () => {
    if (isBrowser) {
        return localStorage.getItem('nama')
    }
}