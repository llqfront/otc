import React, { Component } from 'react';
import {observer,inject} from 'mobx-react';
import { withRouter,NavLink} from 'react-router-dom';
import TabBar from "../../components/TabBar/";
import NavBar from "../../components/NavBar/";


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
        let navCfg = {
            title:"我的资产",
            returnClass:"hide",
            moreClass:"hide",
            returnUrl:"/wallet",
            moreUrl:"/wallet"
        }
        return (
            <div className="wallet">
                <NavBar navCfg={navCfg}/>
                <div className="nav-list two-list cleafix">
                    <NavLink exact to="/wallet/">账户资产</NavLink>
                    <NavLink to="/wallet/otc">OTC设置</NavLink>
                </div>
                1
                <TabBar common={common}/>
            </div>
        )
    }
}
export default View;
