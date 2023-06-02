/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

//stateless function component(sfc)
const NavBar = ({totalCounters} = this.props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar{" "}
                    <span className="badge bg-black">{totalCounters}</span>
                </a>
            </div>
        </nav>
    );
};

// class NavBar extends Component {
//     render() { 
//         return (
//             <nav className="navbar bg-body-tertiary">
//                 <div class="container-fluid">
//                     <a className="navbar-brand" href="#">Navbar{" "}
//                         <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
//                     </a>
//                 </div>
//             </nav>
//         );
//     }
// }
 
export default NavBar;