import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" onClick={() => this.props.handler("home")}>Home</a>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link" onClick={() => this.props.handler("investing")}> Investing </a>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => this.props.handler("algorithm")}> Algorithms </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => this.props.handler("design")}> Designs </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

