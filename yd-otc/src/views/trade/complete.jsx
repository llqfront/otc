import React, { Component } from 'react';
import {observer,inject} from 'mobx-react';
import { withRouter,NavLink} from 'react-router-dom';
import Onav from "../../components/Onav/";

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
            title:"全部订单",
            returnClass:"",
            moreClass:"hide",
            returnUrl:"/trade",
            moreUrl:"/trade"
        }
        return (
            <div className="trade">
                <Onav navCfg={navCfg}/>
                <div className="trade-list">
                    <ul>
                        <li>
                            <div className="hds clearfix">
                                <span>交易完成</span>
                                <p>
                                    <em>USDT</em>
                                    <var>2018-08-03 15:28:57</var>
                                </p>
                            </div>
                            <div className="bd clearfix">
                                <p>
                                    <span>362.5</span>
                                    <var>CNY</var>
                                </p>
                                <p>
                                    <span>10.0000</span>
                                    <var>数量</var>
                                </p>
                                <p>
                                    <span>3,625.00</span>
                                    <var>总金额</var>
                                </p>
                            </div>
                            <a href="javascript:;"></a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default View;
