import React, { Component } from 'react';
import {observer,inject} from 'mobx-react';
import { withRouter,NavLink} from 'react-router-dom';
import NavBar from "../../components/NavBar/"


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
            title:`买入ETH`,
            returnClass:"",
            moreClass:"hide",
            returnUrl:"/trade",
            moreUrl:"/trade",
            match:""
        }
        return (
            <div className="doit">
                <NavBar navCfg={navCfg}/>
                <div className="trade-line"></div>
                <div className="doit-info">
                    <dl>
                        <dt>
                            <span>
                                <i className="wx"></i>
                                <i className="alipay"></i>
                                <i className="yh"></i>
                            </span>
                            <p>
                                <em></em>
                                <var>826单</var>
                                <i></i>
                                <b>完成率99.93%</b>
                            </p>
                        </dt>
                        <dd className="clearfix">
                            <label>单笔限额</label>
                            <span>CNY</span>
                            <div className="num">
                                <p>1000-39999</p>
                            </div>
                        </dd>
                        <dd className="clearfix">
                            <label>单价</label>
                            <span>CNY</span>
                            <div className="num">
                                <p>6.88</p>
                            </div>
                        </dd>
                        <dd className="clearfix">
                            <label>数量</label>
                            <span>USDT</span>
                            <div className="num">
                                <input type="text" placeholder="请输入交易数量"/>
                            </div>
                        </dd>
                        <dd className="clearfix">
                            <label>金额</label>
                            <span>CNY</span>
                            <div className="num">
                                <input type="text" placeholder="最小交易单总额为400"/>
                            </div>
                        </dd>
                    </dl>
                    <div className="subFrom">
                        <input type="button" readOnly value="确认"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default View;
