import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class navbar extends Component {
 

  render() {
    return (
      <div>
                    <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand"to="/">News TeLLer</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page"to="/">Home</a>
                    </li>
                    <li className="nav-item"><Link className="nav-link"to="/business">Business</Link></li>
                    {/* <li className="nav-item"><Link className="nav-link"to="/entertainement">Entertainement</Link></li> */}
                    <li className="nav-item"><Link className="nav-link"to="/general">General</Link></li>
                    <li className="nav-item"><Link className="nav-link"to="/health">Health</Link></li>
                    <li className="nav-item"><Link className="nav-link"to="/science">Science</Link></li>
                    <li className="nav-item"><Link className="nav-link"to="/sports">Sports</Link></li>
                    <li className="nav-item"><Link className="nav-link"to="/technology">Technology</Link></li>

                </ul>
                </div>
            </div>
            </nav>
      </div>
    )
  }
}

export default navbar