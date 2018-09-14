import React, { Component } from 'react';
import {observer,inject} from 'mobx-react';
import { withRouter,NavLink} from 'react-router-dom';
import NavBar from "../../components/NavBar/"
import TabBar from "../../components/TabBar/"

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
        const navCfg = {
            title:"全球",
            returnClass:"",
            moreClass:"hide",
            returnUrl:"/trade",
            moreUrl:"/trade"
        }
        return (
            <div className="trade">
                <NavBar navCfg={navCfg}/>
                <div className="currency-bar clearfix">
                    <h3>
                        <span>USDT/CNY</span>
                        <i></i>
                    </h3>
                    <p>
                        <em><i></i>-9.24%</em>
                        <span>&yen;28888.80</span>
                    </p>
                </div>
                <div className="trade-line"></div>
                <div className="nav-list four-list cleafix">
                    <NavLink exact to="/trade">买入</NavLink>
                    <NavLink to="/trade/sell">卖出</NavLink>
                    <NavLink to="/trade/list">交易单</NavLink>
                    <NavLink to="/order">订单</NavLink>
                </div>
                <div className="trade-filter clearfix">
                    <h6>
                        <input type="radio" name="sj" id="sj"/><label htmlFor="sj">优选商家</label>
                    </h6>
                    <h6>
                        <span>所有金额<i></i></span>
                    </h6>
                    <h6>
                        <span>所有方式<i></i></span>
                    </h6>
                </div>
                <TabBar common={common}/>
            </div>
        )
    }
}
export default View;
