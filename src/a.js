const id=this.props.match.params.id
axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
.then(response=>{
    let title=response.data.title
    this.setState({title})
})
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response=>{
        let body=response.data.body
    this.setState({body})
    })

axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
.then(response=>{
    let userId=response.data.userId 
    console.log(userId)
        this.setState({userId})
})
axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
.then(response=>{
    let userId=response.data.userId
axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
.then(response=>{
    console.log(this.state.userId)
    let name=response.data.name
    console.log(name)
    this.setState({name})
})
})

    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then((response)=>{
        let comments=response.data
        console.log(comments)
        this.setState({comments})
    })
    .catch(err=>{
        alert(err)
    })