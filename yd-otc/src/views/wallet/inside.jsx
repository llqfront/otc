import React, { Component } from 'react';
import {observer,inject} from 'mobx-react';
import { withRouter,NavLink} from 'react-router-dom';
import NavBar from "../../components/NavBar/"

//
class View extends Component {
    constructor(props) {
        super(props);
        // let code = this.props.match.params.code ? this.props.match.params.code : 'btc';
        let common = {
            lang:'cn',
            params:this.props.match.params
        }
        this.state = {
            common
        }
    }
    render() {
        let {common} = this.state;
        let navCfg = {
            title:"我的钱包充值",
            returnClass:"",
            moreClass:"",
            returnUrl:"/wallet",
            moreUrl:"record"
        }
        return (
            <div className="wallet">
                <NavBar navCfg={navCfg}/>
                <div className="nav-list two-list cleafix">
                    <NavLink exact to={`/wallet/recharge/${common.params.code}`}>地址充值</NavLink>
                    <NavLink to={`/wallet/inside/${common.params.code}`}>内部转账</NavLink>
                </div>
                内部转账
            </div>
        )
    }
}
export default View;
