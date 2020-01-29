import axios from 'axios'

export const setUsers=(users)=>{
    return {type:'SET_USER',payload:users}
}
export const startGetUsers=()=>{
    return(dispatch)=>{
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const users=response.data
            dispatch(setUsers(users))
        })
    }
}