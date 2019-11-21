import React from "react";
import '../styles/SignIn.css';
import Button from "../block/Button";
import Header from "../block/Header";


function SignIn(props) {
    return (
    <>
        <Header header= "Welcome Back!" />
         <div class="main">
             <div class="row">
                 <div class="form-p">
                    <form action="#" method="post">
                        <input class="text" type="text" placeholder="Username" name="Username" required />
                        <input class="text" type="password" placeholder="Password" name="Password" required /> 
                        <input type="submit" value="Submit"/>
                     </form>

                     <p><a href="#">Forget your password ?</a></p>


                  </div>
                </div>
          </div>
    </>
    );
}

export default SignIn;