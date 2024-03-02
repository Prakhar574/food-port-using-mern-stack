import React from "react";
import { useState } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Default Location",
      },
    };
  }

  // how to call api in classs component
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shivamxaryan");
    const json = await data.json();

    // console.log(json);

    this.setState({
        userInfo:json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={"avatar_url"} />
        <h3>Name: {name}</h3>
        <h3>Role: MERN Stack Developer</h3>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
