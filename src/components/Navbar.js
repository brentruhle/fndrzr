import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false);

    return(
        <>
            <nav>
                <a id="logo" href="/">fndrzr</a>
                
                <div>
                    <ul id="navbar"
                        className={menuToggle ? '#navbar active' : '#navbar' }>
                        <li><a class="active" href="/">Home</a></li>
                        <li><a href="/">Log in</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>

                <div id="mobile" onClick={() => setMenuToggle(!menuToggle)}>
                    <i id="bar"
                        className={menuToggle ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav>
        </>
    )
}

export default Navbar;