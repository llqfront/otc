import React, { Component } from 'react';
import {observer,inject} from 'mobx-react';
import { withRouter,NavLink} from 'react-router-dom';
import NavBar from "../../components/NavBar/";
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
        let {...common} = this.state.common;
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
                <div className="recharge">
                    <h4>需要一个网格确认......</h4>
                    <div className="select-coins clearfix">
                        <span>选择币种</span>
                        <NavLink className="more-select" to={`/search/recharge/wallet-${common.params.code}`}><i></i>{(common.params.code).toUpperCase()}</NavLink>
                    </div>
                    <div className="recharge-address">
                        <div className="rcode">
                        </div>
                        <p>331gbWonBfLRe9KJy1uSsSB4byQ7mnZubJ</p>
                        <h6>标签说明</h6>
                        <input type="button" readOnly value="复制多种签名地址"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default View;
