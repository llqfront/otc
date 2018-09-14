import React, { Component } from 'react';
import {observer,inject} from 'mobx-react';
import { withRouter,NavLink} from 'react-router-dom';
import NavBar from "../../components/NavBar/"
import TabBar from "../../components/TabBar/";
import Swiper from 'react-id-swiper';

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
        const params = {
          slidesPerView: 6,
          spaceBetween: 0
        };
        const navCfg = {
            title:"全球",
            returnClass:"hide",
            moreClass:"hide",
            returnUrl:"/market",
            moreUrl:"/market"
        }
        return (
            <div className="market">
                <NavBar navCfg={navCfg}/>
                <div className="nav-list nav-swiper cleafix">
                    <Swiper {...params}>
                        <NavLink exact to="/market/">自选</NavLink>
                        <NavLink to="/market/usdt">USDT</NavLink>
                        <NavLink to="/market/btc">BTC</NavLink>
                        <NavLink to="/market/eth">ETH</NavLink>
                        <NavLink to="/market/bnb">BNB</NavLink>
                        <NavLink to="/market/okb">OKB</NavLink>
                        <NavLink to="/market/ht">HT</NavLink>
                    </Swiper>
                </div>
                <div className="market-list">
                    <ul>
                        <li>
                            <span className="percent">5%</span>
                            <div className="m-l-info">
                                <p>
                                    <span><b>XRP</b>&nbsp;/&nbsp;USDT</span>
                                    <span className="fr"><b>0.2576</b></span>
                                </p>
                                <p>
                                    <span>成交量&nbsp;34,321,3777</span>
                                    <span className="fr">$0.258</span>
                                </p>
                            </div>
                        </li>
                        <li>
                            <span className="percent">5%</span>
                            <div className="m-l-info">
                                <p>
                                    <span><b>XRP</b>&nbsp;/&nbsp;USDT</span>
                                    <span className="fr"><b>0.2576</b></span>
                                </p>
                                <p>
                                    <span>成交量&nbsp;34,321,3777</span>
                                    <span className="fr">$0.258</span>
                                </p>
                            </div>
                        </li>
                        <li>
                            <span className="percent">5%</span>
                            <div className="m-l-info">
                                <p>
                                    <span><b>XRP</b>&nbsp;/&nbsp;USDT</span>
                                    <span className="fr"><b>0.2576</b></span>
                                </p>
                                <p>
                                    <span>成交量&nbsp;34,321,3777</span>
                                    <span className="fr">$0.258</span>
                                </p>
                            </div>
                        </li>
                        <li>
                            <span className="percent">5%</span>
                            <div className="m-l-info">
                                <p>
                                    <span><b>XRP</b>&nbsp;/&nbsp;USDT</span>
                                    <span className="fr"><b>0.2576</b></span>
                                </p>
                                <p>
                                    <span>成交量&nbsp;34,321,3777</span>
                                    <span className="fr">$0.258</span>
                                </p>
                            </div>
                        </li>
                        <li>
                            <span className="percent">5%</span>
                            <div className="m-l-info">
                                <p>
                                    <span><b>XRP</b>&nbsp;/&nbsp;USDT</span>
                                    <span className="fr"><b>0.2576</b></span>
                                </p>
                                <p>
                                    <span>成交量&nbsp;34,321,3777</span>
                                    <span className="fr">$0.258</span>
                                </p>
                            </div>
                        </li>
                        <li>
                            <span className="percent">5%</span>
                            <div className="m-l-info">
                                <p>
                                    <span><b>XRP</b>&nbsp;/&nbsp;USDT</span>
                                    <span className="fr"><b>0.2576</b></span>
                                </p>
                                <p>
                                    <span>成交量&nbsp;34,321,3777</span>
                                    <span className="fr">$0.258</span>
                                </p>
                            </div>
                        </li>
                        <li>
                            <span className="percent">5%</span>
                            <div className="m-l-info">
                                <p>
                                    <span><b>XRP</b>&nbsp;/&nbsp;USDT</span>
                                    <span className="fr"><b>0.2576</b></span>
                                </p>
                                <p>
                                    <span>成交量&nbsp;34,321,3777</span>
                                    <span className="fr">$0.258</span>
                                </p>
                            </div>
                        </li>
                        <li>
                            <span className="percent">5%</span>
                            <div className="m-l-info">
                                <p>
                                    <span><b>XRP</b>&nbsp;/&nbsp;USDT</span>
                                    <span className="fr"><b>0.2576</b></span>
                                </p>
                                <p>
                                    <span>成交量&nbsp;34,321,3777</span>
                                    <span className="fr">$0.258</span>
                                </p>
                            </div>
                        </li>
                        <li>
                            <span className="percent">5%</span>
                            <div className="m-l-info">
                                <p>
                                    <span><b>XRP</b>&nbsp;/&nbsp;USDT</span>
                                    <span className="fr"><b>0.2576</b></span>
                                </p>
                                <p>
                                    <span>成交量&nbsp;34,321,3777</span>
                                    <span className="fr">$0.258</span>
                                </p>
                            </div>
                        </li>
                        <li>
                            <span className="percent">5%</span>
                            <div className="m-l-info">
                                <p>
                                    <span><b>XRP</b>&nbsp;/&nbsp;USDT</span>
                                    <span className="fr"><b>0.2576</b></span>
                                </p>
                                <p>
                                    <span>成交量&nbsp;34,321,3777</span>
                                    <span className="fr">$0.258</span>
                                </p>
                            </div>
                        </li>
                        <li>
                            <span className="percent">5%</span>
                            <div className="m-l-info">
                                <p>
                                    <span><b>XRP</b>&nbsp;/&nbsp;USDT</span>
                                    <span className="fr"><b>0.2576</b></span>
                                </p>
                                <p>
                                    <span>成交量&nbsp;34,321,3777</span>
                                    <span className="fr">$0.258</span>
                                </p>
                            </div>
                        </li>
                        <li>
                            <span className="percent">5%</span>
                            <div className="m-l-info">
                                <p>
                                    <span><b>XRP</b>&nbsp;/&nbsp;USDT</span>
                                    <span className="fr"><b>0.2576</b></span>
                                </p>
                                <p>
                                    <span>成交量&nbsp;34,321,3777</span>
                                    <span className="fr">$0.258</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <TabBar common={common}/>
            </div>
        )
    }
}
export default View;
