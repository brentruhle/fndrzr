import { Component } from 'react';
import './Navbar.css';

class Navbar extends Component{
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked:
        !this.state.clicked})
    }

    render(){
        return(
            <>
                <nav>
                    <a id="logo" href="/">fndrzr</a>
                    
                    <div>
                        <ul id="navbar" 
                        className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li><a class="active" href="/">Home</a></li>
                            <li><a href="/">Log in</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>

                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar"
                            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar;