import React from "react";
import Froggy from '../../images/Froggy.PNG'

export default function AboutUs() {
    return (

        <div className="about-me" >
            <br></br>
            <div className="container-fluid bg-1 text-center cont">
                <h2 className="margin">About Me</h2>
                <img src={Froggy} className="img-responsive img-circle margin" style={{ display: "inline" }} width="300" height="500" />
                <h1>Scott Luhn</h1>
            </div>
            <div className="container-fluid bg-1 text-center cont">
                <h3 className="margin">Full Stack Java Developer</h3>
                <p>I am a Full Stack Java Developer with prior leadership and problem solving experience.</p>
            </div>
            <div className="container-fluid bg-1 text-center cont">
                <h3 className="margin">Where to Reach Me?</h3>
                <br></br>
                <div className="row">
                    <div className="col-sm-4">
                        <a href="https://www.linkedin.com/in/scott-luhn-7a9525196">LinkedIn</a>
                    </div>
                    <div className="col-sm-4">
                        <a href="https://github.com/Scott-Luhn1221">GitHub</a>
                    </div>
                    <div className="col-sm-4">
                        <a href="mailto: sluhn1221@gmail.com">Email</a>
                    </div>
                </div>
                <a href="/" class="btn btn-lg btn-secondary fw-bold border-white bg white">Return Home</a>
            </div>
        </div>

    )

}