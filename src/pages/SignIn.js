import React from "react";
import '../styles/SignIn.css';
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
                            <Input type="text" placeholder="Username" name="Username" required />
                            <Input type="password" placeholder="Password" name="Password" required />
                            <NavLink to='/profile'>
                                <Submit />
                            </NavLink>
                        </form>
                        <p><a href="#">Forgot your password?</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignIn;