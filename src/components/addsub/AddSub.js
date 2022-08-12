import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import VideoSubs from '../../images/VideoSubs.jpeg'

export default function AddSub() {
    const history = useHistory();
    const [subscription, setSubscription] = useState({
        id: 0,
        name: "",
        plan: "",
        cost: "",
        paymentDate: "",
        cancelLink: "",
        userEmail: "",
    })
    const [selected, setSelected] = React.useState("");

    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value)
    }



    const subscriptionChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(value)
        const tempSubscription = { ...subscription };
        tempSubscription[name] = value;
        setSubscription(tempSubscription)


    }

    const addSubSubmitHandler = () => {
        subscription.userEmail = localStorage.getItem('loggedInUser');
        axios.post("http://localhost:8080/savesub", subscription).then((response) => {
            localStorage.setItem("addedSubscription", response.data.tempSubscription)
            console.log(response.data.tempSubscription)
            history.push("/profile");
        }).catch((error) => {
            console.log("Subscription object not placed" + error)
        })
    }

    const netflix = "https://www.netflix.com/cancelplan";
    const hulu = "https://secure.hulu.com/account";
    const hboMax = "https://help.hbomax.com/us/Answer/Detail/000001191"
    const disneyPlus = "https://help.disneyplus.com/csp?id=csp_article_content&sys_kb_id=bfe9f8e9db905118331d6fddd396196a"
    const sling = "https://www.sling.com/help/en/account-questions/account-changes/pause-cancel-subscription"
    const appleTv = "https://support.apple.com/en-us/HT212048"
    const peacock = "https://www.peacocktv.com/help/article/cancellation"
    const fubo = "https://support.fubo.tv/hc/en-us/sections/115001140368-Manage-My-Account"
    const prime = "https://www.primevideo.com/help/ref=atv_hp_nd_cnt?nodeId=GWGDSNXVPJ93UW5V"

 
   


    useEffect(() => {
        let cancelLink = null;
        if (subscription.name === "Netflix") {
            cancelLink = netflix;
        } else if (subscription.name === "Hulu") {
            cancelLink = hulu;
        } else if (subscription.name === "HBO Max") {
            cancelLink = hboMax;
        } else if (subscription.name === "Disney+") {
            cancelLink = disneyPlus;
        } else if (subscription.name === "Sling TV") {
            cancelLink = sling;
        } else if (subscription.name === "Apple TV") {
            cancelLink = appleTv;
        } else if (subscription.name === "Peacock") {
            cancelLink = peacock;
        } else if (subscription.name === "Fubo TV") {
            cancelLink = fubo;
        } else if (subscription.name === "Prime Video") {
            cancelLink = prime;
        }
        const tempSubscription = { ...subscription };
        tempSubscription.cancelLink = cancelLink;
        console.log(tempSubscription)
        setSubscription(tempSubscription)



    }, [subscription.name])
    // if(subscription.name === "Netflix") {
    //    cancelLink = netflix;
    // } else if (subscription.name === "Hulu") {
    //     cancelLink = hulu;
    // }

    // if (cancelLink)  {
    //     options = cancelLink.map((el) => <option key={el} >{el}</option>);
    // }

    return (
        <body>
           <div id="bg">
                    <img src={VideoSubs} alt=""/>
                </div> 
        
        <div class="wrapper">
            <form class="form-signin">
                <h2 class="form-signin-heading">Add a New Subscription</h2>
                <br></br>
                <input  type="hidden" onChange={{subscriptionChangeHandler}} name="subscriptionId" value={subscription.id}/>
                <select class="form-control" value={subscription.name} onChange={subscriptionChangeHandler} name="name" placeholder="Name" required="" autofocus="">
                    <option slected> Choose...</option>
                    <option>Netflix</option>
                    <option>Hulu</option>
                    <option>Disney+</option>
                    <option>HBO Max</option>
                    <option>Sling TV</option>
                    <option>Apple TV</option>
                    <option>Peacock</option>
                    <option>Fubo TV</option>
                    <option>Prime Video</option>
                </select>
                <br></br>
                <input type="text" class="form-control" value={subscription.plan} onChange={subscriptionChangeHandler} name="plan" placeholder="Plan" required="" autofocus="" />
                <br></br>
                <input type="text" class="form-control" value={subscription.cost} onChange={subscriptionChangeHandler} name="cost" placeholder="Cost Per Month" required="" autofocus="" />
                <br></br>
                <input type="text" class="form-control" value={subscription.paymentDate} onChange={subscriptionChangeHandler} name="paymentDate" placeholder="Payment Date" required="" autofocus="" />
                <br></br>
                <input type="text" class="form-control" aria-readonly value={subscription.cancelLink} name="cancelLink" placeholder="Cancel Link" required="" />
                <br></br>
                <button class="btn btn-lg btn-primary btn-block" onClick={addSubSubmitHandler} type="button">Add Subscription</button>
            </form>
        </div>
        </body>
    )
}