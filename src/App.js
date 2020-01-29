import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import Posts from './Posts'
import UserShow from './UserShow'
import UserPost from './UserPost'
function App(props){
    return(
        <BrowserRouter>
          <div>
              <Link>Home |</Link>
              <Link to="/users">User |</Link>
<Link to="/posts">Posts  </Link>
              <Route path='/' component={Home} exact={true}/>
              <Route path="/users" component={Users} exact={true}/>
<Route path="/users/:userId" component={UserShow}/>
<Route path="/posts" component={Posts} exact={true}/>
<Route path="/posts/:postId" component={UserPost}/>
</div>
        </BrowserRouter>
      
    )
}
export default App