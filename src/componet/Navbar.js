import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {

  render() {
    return (
      <div>
        <div className="conatiner text-center my-4">
        <h2 className='heading'><u><strong>{this.props.heading}</strong></u></h2>
        </div>
        <div className="conatiner">
          
        </div>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                <li className="nav-item mx-5">
                  <Link className="nav-link text-white" aria-current="page" to="/general">Home</Link>
                </li>


                <li className="nav-item mx-4"><Link className="nav-link text-white" to="/business">Business</Link></li>
                <li className="nav-item mx-4"><Link className="nav-link text-white" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item mx-4"><Link className="nav-link text-white" to="/general">General</Link></li>
                <li className="nav-item mx-4"><Link className="nav-link text-white" to="/health">Health</Link></li>
                <li className="nav-item mx-4"><Link className="nav-link text-white" to="/science">Science</Link></li>
                <li className="nav-item mx-4"><Link className="nav-link text-white" to="/sports">Sports</Link></li>
                <li className="nav-item mx-4"><Link className="nav-link text-white" to="/technology">Technology</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      </div>
    )
  }
}

export default Navbar
