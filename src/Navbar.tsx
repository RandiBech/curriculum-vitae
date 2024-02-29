import React from "react"
import {Link} from 'react-router-dom';


const NavBar = () => {
    return (    
        <div className='navBar'>
            <div className='stocks'>
                <Link to="/">User</Link>
            </div>
            <div className='users'>
                <Link to="/Users">Users</Link>
            </div>
        </div>
)
}

export default NavBar;