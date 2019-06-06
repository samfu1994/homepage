import * as React from "react";
import {Sidebar} from "./sidebar";

export class Algorithm extends React.Component {
    constructor(props) {
        super(props);
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
            <div id='algorithm'>
                <Sidebar pageWrapId={"page-wrap"}/>
                <div id="page-wrap">
                    page1
                </div>
            </div>
        )
    }
}