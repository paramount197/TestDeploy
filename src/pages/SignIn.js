import React from "react";
import '../styles/SignIn.css';
import Button from "../block/Button";
import Header from "../block/Header";
import Input from "../block/Input";
import { NavLink } from "react-router-dom";
import Submit from "../block/Submit";

function SignIn(props) {
    return (
        <>
            <Header header="Welcome Back!" />
            <div class="main">
                <div class="row">
                    <div class="form-p">
                        <form action="#" method="post">
                            <Input styleName="username" type="text" placeholder="Username" name="Username" required />
                            <Input styleName="password" type="password" placeholder="Password" name="Password" required />
                            <Submit />
                        </form>
                        <p><a href="#">Forgot your password?</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignIn;