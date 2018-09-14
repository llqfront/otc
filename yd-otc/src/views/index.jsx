import React, { Component } from 'react';
import {observer,inject} from 'mobx-react';
import { withRouter,NavLink} from 'react-router-dom';
import Header from "../components/Header/"
import Nav from "../components/Nav/"
import TabBar from "../components/TabBar/"

//
class Home extends Component {
    constructor(props) {
        super(props);
        let common = {
            lang:'cn'
        }
        this.state = {
            common
        }
    }
    render() {
        let {common} = this.state;
        return (
            <div className="main">
                <Header common={common}/>
                <Nav common={common}/>
                
                <TabBar common={common}/>
            </div>
        )
    }
}
export default Home;
