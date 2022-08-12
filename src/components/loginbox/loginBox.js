import React from "react";
import axios from "axios";
import { ReactDOM } from "react";

const loginBox = () => {

  
 


  return (
    <div className="loginBox"
    >
      <form>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="uname" required />

        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />

        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}

export default loginBox;