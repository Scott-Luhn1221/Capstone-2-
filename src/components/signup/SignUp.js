import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./style.css";
import VideoSubs from '../../images/VideoSubs.jpeg'


export default function SignUp() {
    const history = useHistory();

    const [user, setUser] = useState({
        firstName: "",
        lastName: '',
        email: "",
        password: "",
        age: "",
    })



    const userChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempUser = { ...user };
        tempUser[name] = value;
        setUser(tempUser)

    }

    const signUpSubmitHandler = () => {
        axios.post("http://localhost:8080/save", user).then((response) => {
            localStorage.setItem("loggedInUser", response.data.tempUser)
            history.push("/");
        }).catch((error) => {
            console.log("User object not placed" + error)
        })
    }

    return (
        <body>
        <div id="bg">
                    <img src={VideoSubs} alt=""/>
                </div>
        <div class="wrapper">
            <form class="form-signin">
                <h2 class="form-signin-heading">Create your account</h2>
                <br></br>
                <input type="text" class="form-control" value={user.firstName} onChange={userChangeHandler} name="firstName" placeholder="First Name" required="" autofocus="" />
                <br></br>
                <input type="text" class="form-control" value={user.lastName} onChange={userChangeHandler} name="lastName" placeholder="Last Name" required="" autofocus="" />
                <br></br>
                <input type="text" class="form-control" value={user.email} onChange={userChangeHandler} name="email" placeholder="Email Address" required="" autofocus="" />
                <br></br>
                <input type="text" class="form-control" value={user.age} onChange={userChangeHandler} name="age" placeholder="Age" required="" autofocus="" />
                <br></br>
                <input type="password" class="form-control" value={user.password} onChange={userChangeHandler} name="password" placeholder="Password" required="" />
                <br></br>
                <button class="btn btn-lg btn-primary btn-block" onClick={signUpSubmitHandler} type="button">Create Account</button>
            </form>
        </div>
        </body>
    )
}
