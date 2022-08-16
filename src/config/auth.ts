const name = localStorage.getItem('name')

export const isAuthenticated = () =>{
    return name !== null
}