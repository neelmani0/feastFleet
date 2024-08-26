import React from "react";

class Profile extends React.Component{
 render(){
    console.log("Parennt - render");
    return (
        <div>
            <h1>Claas Profile</h1>
        </div>
    )
 }
constructor(props){
    console.log("Parennt - const")
    super(props);
    this.state = {
        userInfo: {
            name : "Dummy Name",
            location:"Dummy Location"
        },
    };
}; 
 async componentDidMount(){
    const data = await fetch("https://api.github.com/users/neelmani0");
    const json = await data.json();
    this.setState({
        userInfo:json,
    });
    console.log("Child - Comp" + json);
 }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
render(){
    const {count} = this.state;
    console.log("Child - render");
    return (
        <div>
            <h1>Profile Class Component</h1>
            <img src={this.state.userInfo.avatar_url} />
            <h2>Name: {this.state.userInfo.name}</h2>
            <h2>Location: {this.state.userInfo.location}</h2>
        </div>
    )
}


};
 




export default Profile;

