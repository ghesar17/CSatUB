import React from 'react'

    const Navbar = () => {
        return (
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand p-4 " href="#"> <img src="src/assets/CSatUBlogo.png" width="140" height="120"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://bocchsi.rocks/">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-blue-700"> Pricing </a>
                            </li>
                        </ul>
                        <span className="navbar-text">
    </span>
                    </div>
                </nav>
        )
    }

    export default Navbar;
