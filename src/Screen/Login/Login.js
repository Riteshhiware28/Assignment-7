import React from "react";
import "./Login.css";
import { loginUrl } from "../../spotify";

function Login() {
  return (
    <div className='loginscreem'>
            

                <div className='navbar1'>
                <img className='navbar__image' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'  alt="" />

                 <button class="pro"><b>Premium</b></button>
                <button class="pro1"><b>Support</b></button>   
                 <button class="down"><b>Download</b></button>
                  <div class = "vertical"></div>
                   <a href={loginUrl}><button class="sign"><b>Sign up</b></button></a>   
                  <a href={loginUrl}><button class="log"><b>Log in</b></button></a>

                </div>

       <div className="login">
      <img className="logimg"
        src="data:image/png;base64,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"
        alt=""
      />
       
    </div>
  </div>

  );
}

export default Login;