import * as React from "react";
import Sidebar from "react-sidebar";

export class Algorithm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sidebarDocked: true,
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    render() {
        return (
            <div className="row">

            </div>
        )
    }
}