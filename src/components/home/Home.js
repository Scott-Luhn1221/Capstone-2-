import React, { useState } from "react"
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import VideoSubs from '../../images/VideoSubs.jpeg'




export default function Home() {

    const [signInUser, setSignInUser] = useState({ email: '', password: '' })

    const history = useHistory();

    const signOutSubmitHandler = () => {
        console.log('sign out clicked');
        localStorage.clear();
        history.push('/');
    }

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        const tempSignIn = { ...signInUser };
        tempSignIn[name] = value;
        setSignInUser(tempSignIn);
    }

    const signInSubmitHandler = () => {
        axios.post('http://localhost:8080/login', signInUser).then(response => {
            console.log(response);
            localStorage.setItem("loggedInUser", response.data.email);
            history.push('/profile');
        }).catch((error) => {
            console.log("invalid" + error);
        })
    }



    return (
        <body>
               <div id="bg">
                    <img src={VideoSubs} alt=""/>
                </div>
            <header>
            <div class="wrapper">
                <center> <h1 class="header-1">Welcome To SubTracked</h1></center>
                </div>
          

            </header>
            <div className="container-fluid home margin-top-less-200px" >
                <div className="row">
                    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

                        <main className="px3">
                            
                            <p class="lead">
                                <div class="wrapper">
     
                                
                                    <form class="form-signin">
                                    <center><p class="lead">To begin tracking your subs login below.</p></center>
                                        <h2 class="form-signin-heading">Please Login</h2>
                                        <br></br>
                                        <input type="text" class="form-control" value={signInUser.email} onChange={changeHandler} name="email" placeholder="Email Address" required="" />
                                        <br></br>
                                        <input type="password" class="form-control" value={signInUser.password} onChange={changeHandler} name="password" placeholder="Password" required="" />
                                        <br></br>
                                        <button class="btn btn-lg btn-primary btn-block" onClick={signInSubmitHandler} type="button">Login</button>
                                        <center>Not a member, sign-up <a href="/sign-up">here</a></center>
                                    </form>
                                

                                
                                <center><a href="about-us" class="btn btn-lg btn-secondary fw-bold border-white bg white">About Us</a></center>
                                </div>
                            </p>


                        </main>
                    </div>
                </div>
            </div>
        </body>
    )
}