import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "Default",
        id: "Default",
      },
    };
    console.log("User Info Constructor");
    
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Nil117122");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log("User Info Mounted");
  }

  componentDidUpdate() {
    console.log("User Info Updated");
  }

  componentWillUnmount() {
    console.log("User Info Unmounted");
  }
  render() {
    console.log("User Info Rendered");
    
    const { login, id, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="User" />
        <h2>Login: {login}</h2>
        <h2>ID: {id}</h2>
        <h3>Contact: @nil22</h3>
      </div>
    );
  }
}

export default UserClass;
