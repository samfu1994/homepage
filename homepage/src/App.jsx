import React from 'react';
import './css/App.css';
import {Nav} from "./components/Nav";
import {Footer} from "./components/footer";
import {Home} from "./components/home";
import {Algorithm} from "./components/algorithm";
import {Design} from "./components/design";

function Content(props) {
    switch (props.pageName) {
        case 'home':
            return <Home/>;
        case 'algorithm':
            return <Algorithm/>;
        case 'design':
            return <Design/>;
    }
}

export class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {pageName:"home"};
        this.handler = this.handler.bind(this)
    }

    handler(newPage) {
        this.setState({
            pageName: newPage
        });
    }

    render () {
        return (
          <div className="App">
              <Nav handler={this.handler}/>
              <div className="content">
                <Content pageName={this.state.pageName}/>
              </div>
              <Footer/>
          </div>
      );
  }
}