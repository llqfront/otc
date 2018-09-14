import React, { Component } from 'react';
import {observer,inject} from 'mobx-react';
import { withRouter,NavLink} from 'react-router-dom';
import Header from "../../components/Header/"
import Nav from "../../components/Nav/"
import TabBar from "../../components/TabBar/"
// import Wnav from "../../components/Wnav/"

//
class View extends Component {
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
            <div className="wallet">
                {/* <Wnav common={common}/> */}
                account
                <TabBar common={common}/>
            </div>
        )
    }
}
export default View;
