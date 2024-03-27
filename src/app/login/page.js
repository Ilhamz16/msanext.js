'use client';

import { useRouter } from "next/navigation";
//import styles from "/.page.module.css";

export default function LoginPage() {

    function handleLogin(ev) {
        ev.preventDefault();
        //our login logic
        Router.push(`/dashboard`, { scroll: false });
    }
    
    return (
        <div>
            <h1>MSA eWorklog</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="loginid">Login</label>
                    <input type="text" id="loginid" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>

                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>
    )
}