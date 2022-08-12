import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link, Route, useHistory } from "react-router-dom"
import subscription from '../addsub/AddSub'
import VideoSubs from '../../images/VideoSubs.jpeg'

const Profile = () => {
    const [user, setUser] = useState(0)

    const [subscriptions, setSubs] = useState([])

    const historyTwo = useHistory();

    const signOutSubmitHandler = () => {
        console.log('Sign out clicked');
        localStorage.clear();
        historyTwo.push('/');
    }

    useEffect(() => {
        fetchsubs();
    }, [])

    var tableStyle = {
        "border": "1px solid black"
    }

    var rowStyle = {
        "background":"solid black"
    }

    const fetchsubs = () => {
        console.log("Its here")
        let userEmail = localStorage.getItem('loggedInUser');
        axios.get(`http://localhost:8080/findAllSubsByEmail?userEmail=${userEmail}`).then(response => {
            setSubs(response.data);
        }).catch(error => {
            console.log("error" + error)
        });
    };

    const deleteHandler = (sub) => {
        axios.delete(`http://localhost:8080/deleteSub/${sub.id}`).then((response) => {
            fetchsubs();
        }).catch((error) => {
            console.log("error" + error)
        })
    }



    return (
        <body>
            <div id="bg">
                <img src={VideoSubs} alt="" />
            </div>

            <div className="container-fluid home-margin-top-less-200px" class="wrapper">
                <center><h1 className="h1">Welcome to your SubHub!</h1></center>
                <div className="row">
                </div>
                <div>
                    <br></br>
                    <main role="main" class="inner cover">

                        <h2 className="cover-heading">Active Subscriptions</h2>
                        <table class="table">
                            <thead>
                                <tr style={rowStyle}>
                                    <th scope="col">Name</th>
                                    <th scope="col">Plan</th>
                                    <th scope="col">Cost $</th>
                                    <th scope="col">Payment Date</th>
                                    <th scope="col">Cancel Link</th>
                                    <th scope="col">Edit Sub</th>
                                    <th scope="col">Remove Sub</th>
                                </tr>
                            </thead>

                            {subscriptions.map(sub => {
                                console.log(sub)
                                return <tbody>
                                    <tr style={rowStyle}>
                                        <td>{sub.name}</td>
                                        <td>{sub.plan}</td>
                                        <td>{sub.cost}</td>
                                        <td>{sub.paymentDate}</td>
                                        <td><a href={sub.cancelLink}>{sub.cancelLink}</a></td>
                                        <td><Link class="btn btn-lg btn-secondary fw-bold border-white bg white"
                                            to={{
                                                pathname: "/edit-sub",
                                                state: {subToEdit: sub}
                                            }}>Edit Sub</Link>
                                        
                                        </td>
                                        <td><button onClick={(e) => deleteHandler(sub, e)} className="btn btn-outline-success"
                                            class="btn btn-lg btn-secondary fw-bold border-white bg white" type="button">Remove Sub</button> </td>
                                    </tr>
                                </tbody>

                            })}

                        </table>
                    </main>
                </div>
                <a href="add-sub" class="btn btn-lg btn-secondary fw-bold border-white bg white">Add Subscription</a>
                <button className="btn btn-outline-success" class="btn btn-lg btn-secondary fw-bold border-white bg white"
                    onClick={signOutSubmitHandler} type="button">Logout</button>
            </div>
        </body>

    )
}


export default Profile;
