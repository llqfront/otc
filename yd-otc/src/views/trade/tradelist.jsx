import React, { Component } from 'react';
import {observer,inject} from 'mobx-react';
import { withRouter,NavLink} from 'react-router-dom';
import Header from "../../components/Header/"
import Tnav from "../../components/Tnav/"
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
        let navCfg = {
            title:"OTC",
            code:this.props.match.params.unit || "CNY"
        }
        return (
            <div className="trade">
                <Tnav navCfg={navCfg}/>
                <div className="trade-line"></div>
                <div className="nav-list four-list cleafix">
                    <NavLink exact to="/trade">买入</NavLink>
                    <NavLink to="/trade/sell">卖出</NavLink>
                    <NavLink to="/trade/list">交易单</NavLink>
                    <NavLink to="/order">订单</NavLink>
                </div>
                <div className="trade-list">
                    <ul>
                        <li>
                            <div className="hds clearfix">
                                <span>撤消</span>
                                <p>
                                    <em>USDT</em>
                                    <var>2018-08-03 15:28:57</var>
                                </p>
                            </div>
                            <div className="bd clearfix">
                                <p>
                                    <span>委托量</span>
                                    <var>2222</var>
                                </p>
                                <p>
                                    <span>成交量</span>
                                    <var>333</var>
                                </p>
                                <p>
                                    <span>委托价</span>
                                    <var>111</var>
                                </p>
                            </div>
                            <a href="javascript:;"></a>
                        </li>
                    </ul>
                </div>
                <TabBar common={common}/>
            </div>
        )
    }
}
export default View;
