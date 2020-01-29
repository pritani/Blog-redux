import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
function UserPost(props){
    console.log(props)
    return(
        <div>
            {/* {props.user.name}{props.postId.title}{props.postId.body} */}
<h2>USER NAME:{props.user && props.user.name}</h2>
<h3>TITLE:{props.post && props.post.title}</h3>
<h3>BODY:{props.post     && props.post.body}</h3>
<hr/>
<h2>COMMENTS</h2>
<h4>Number of comments-{props.comments.length}</h4>
<ul>
    {
        props.comments.map(co=>{
            return <li key={co.id}>{co.body}</li>
        })
    }
</ul>
<hr/>{console.log('user', props.match.params.userId)}
{
    props.user && <h4><Link to={`/users/${props.user.id}`}>More posts of author:{props.user.name}</Link></h4>
}
 
  {/* {<Link to={`/users/${props.user.id}`}>More post of author={props.user?props.user.name:'n/a'}</Link>} */}
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    let user = {}, comments = []
    const post = state.posts.find(post=>post.id==props.match.params.postId)
    if(post){
        console.log('post', post.userId)
        user = state.users.find(user => user.id == post.userId)
        comments = state.comments.filter(comment=>comment.postId==post.id)


    }

    return{
        user:user,
        post: post,
        comments : comments
    //    postId:state.posts.find(post=>post.id==props.match.params.postId),

    }
}

export default connect(mapStateToProps)(UserPost)