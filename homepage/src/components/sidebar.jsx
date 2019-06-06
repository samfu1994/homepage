import 'bootstrap/dist/css/bootstrap.css';
import * as React from "react";
import '../css/sidebar.css'

export class Sidebar extends React.Component {

    render () {
        return (
            <div className="page-wrapper chiller-theme toggled">
                <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
                    <i className="fas fa-bars"/>
                </a>
                <nav id="sidebar" className="sidebar-wrapper">
                    <div className="sidebar-content">
                        <div className="sidebar-brand">
                            <a href="#">Algorithms</a>
                            <div id="close-sidebar">
                                <i className="fas fa-times"/>
                            </div>
                        </div>
                        <div className="sidebar-menu">
                            <ul>
                                <li className="header-menu">
                                    <span>General</span>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#">
                                        <i className="fa fa-tachometer-alt" />
                                        <span>3Sum</span>
                                        <span className="badge badge-pill badge-warning">New</span>
                                    </a>
                                </li>
                                <li className="sidebar-dropdown">
                                    <a href="#">
                                        <i className="fa fa-shopping-cart" />
                                        <span>QuickSort</span>
                                        <span className="badge badge-pill badge-danger">3</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </nav>
            </div>

        );
    }
}