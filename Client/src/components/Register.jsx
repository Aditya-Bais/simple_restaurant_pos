import React from 'react';
import { Link } from 'react-router-dom';


function Register() {
  return (
    <div className="register">
    <form action="/pos/registration" method='POST' >
        <h2>Register</h2>

        <div className="name">
            <input
                type="text"
                placeholder="Full Name"
                name="name"
            />
        </div>

        <div className="email">
            <input
                type="text"
                placeholder="Enter your email"
                name="email"
            />
        </div>

        <div className="name">
            <input
                type="text"
                placeholder="Restaurant Name"
                name="restaurant_name"
            />
        </div>

        <div className="password">
            <input type="password" placeholder="Password" name="password" />
        </div>

        <input type="submit" value="Login" />
    </form>

    <Link to="/">Login Here</Link>
</div>
    
  );
}

export default Register;
