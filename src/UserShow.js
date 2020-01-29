import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
function UserShow(props){
    console.log(props)
    return(
        <div>
            {
                props.user && (
                    <div>
 <h2>USER NAME:{props.user.name}</h2>
 </div>
                )
            }
           
            <h2>POST WRITTEN BY USER</h2>
            <h3>Post List-{props.post.length}</h3>
            <ul>
                {
                props.post.map(post=>{
                    return<li key={post.id}><Link to={`/posts/${post.userId}`}>{post.title}</Link></li>
                })}
            </ul>
            </div>
    )
            }

const mapStateToProps=(state,props)=>{
    return{
user:state.users.find(u=>u.id==props.match.params.userId),

        post:state.posts.filter(post=>post.userId==props.match.params.userId)
    }
}
export default connect(mapStateToProps)(UserShow)