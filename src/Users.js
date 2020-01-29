import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startGetUsers} from './actions/user'
function Users(props){
    if(props.users.length==0){
        props.dispatch(startGetUsers())
    }
        return(
            <div>
                <h2>USER LIST:{props.users.length}</h2>
                <ul>
                    {props.users.map(user=>{
                        return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                    })}
                </ul>
            </div>
        )
    }
    const mapStateToProps=(State)=>{
        return{
            users:State.users
        }
    }
export default connect(mapStateToProps)(Users)