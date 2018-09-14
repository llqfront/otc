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
                <div className="wallet-info">
                    <div className="wallet-all">
                        <h3>钱包资产估值</h3>
                        <h4>0.00001(BTC)</h4>
                        <h5>≈1000USDT</h5>
                        <a href="javascript:;"></a>
                    </div>
                    <div className="wallet-nav three-list clearfix">
                        <NavLink to="/wallet/recharge/btc"><i className="recharge"></i>充值</NavLink>
                        <NavLink to="/wallet/withdraw/btc"><i className="withdraw"></i>提现</NavLink>
                        <NavLink to="/withdraw"><i className="withdraw"></i>资产记录</NavLink>
                    </div>
                    <div className="wallet-line"></div>
                    <div className="wallet-search clearfix">
                        <div className="search">
                            <input type="text" readOnly value="" placeholder="搜索"/>
                        </div>
                        <div className="hidemin">
                            <label htmlFor="zero">
                                隐藏0余额
                            </label>
                            <input id="zero" readOnly type="checkbox" value=""/>
                        </div>
                    </div>
                    <div className="wallet-zc-lst">
                        <ul>
                            <li>
                                <div className="showinfo">
                                    <h3>YD YD币</h3>
                                    <p>0</p>
                                    <h6>
                                        <span>
                                            可用：0
                                        </span>
                                        <span>
                                            锁定：0
                                        </span>
                                    </h6>
                                    <i></i>
                                </div>
                                <div className="doit three-list clearfix">
                                    <NavLink to="/wallet/recharge/yd">充值</NavLink>
                                    <NavLink to="/wallet/withdraw/yd">提现</NavLink>
                                    <NavLink to="/withdraw">交易</NavLink>
                                </div>
                            </li>
                            <li>
                                <div className="showinfo">
                                    <h3>btc YD币</h3>
                                    <p>0</p>
                                    <h6>
                                        <span>
                                            可用：0
                                        </span>
                                        <span>
                                            锁定：0
                                        </span>
                                    </h6>
                                    <i></i>
                                </div>
                                <div className="doit three-list clearfix">
                                    <NavLink to="/wallet/recharge/btc">充值</NavLink>
                                    <NavLink to="/wallet/withdraw/btc">提现</NavLink>
                                    <NavLink to="/withdraw">交易</NavLink>
                                </div>
                            </li>
                            <li>
                                <div className="showinfo">
                                    <h3>eth YD币</h3>
                                    <p>0</p>
                                    <h6>
                                        <span>
                                            可用：0
                                        </span>
                                        <span>
                                            锁定：0
                                        </span>
                                    </h6>
                                    <i></i>
                                </div>
                                <div className="doit three-list clearfix">
                                    <NavLink to="/wallet/recharge/eth">充值</NavLink>
                                    <NavLink to="/wallet/withdraw/eth">提现</NavLink>
                                    <NavLink to="/withdraw">交易</NavLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <TabBar common={common}/>
            </div>
        )
    }
}
export default View;
