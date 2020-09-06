import React from 'react';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div className="login">
        <form method='POST' action="/pos/logins" >
        <h2>Login</h2>
        <div className="username">
            <input
                type="text"
                placeholder="Email"
                name="email"
            />
        </div>

        <div className="password">
            <input
                type="password"
                placeholder="Password"
                name="password"
            />
        </div>

        <input type="submit" value="Login" />
    </form>

    <Link to="/pos/register">Create an account</Link>
</div>
    
  );
}

export default Login;
