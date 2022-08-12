import React from "react";
import { Route, withRouter } from 'react-router-dom';
import SignUp from './../signup/SignUp';
import Home from './../home/Home';
import Profile from './../profile/Profile';
import ThankYou from "../thankyou/ThankYou";
import AboutUs from "../aboutus/AboutUs";
import loginBox from './../loginbox/loginBox';
import AddSub from './../addsub/AddSub';
import EditSubs from './../editsub/EditSubs';


const Layout = () => {
    const toggleRoutes = () => {

        if(localStorage.getItem('loggedInUser')) {
            return (
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/add-sub" component={AddSub} />
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/edit-sub" component={EditSubs} />
                </div>)
            
        } else {
            return (
                <div>
                <Route exact path="/" component={Home} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/thank-you" component={ThankYou} />
                <Route path="/about-us" component={AboutUs} />
                </div>
            )
        }
    }
    return (
        <div>
            {toggleRoutes()}
        </div>
    )
  
}

export default withRouter(Layout);