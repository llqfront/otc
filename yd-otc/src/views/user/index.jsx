import React, { Component } from 'react';
import {observer,inject} from 'mobx-react';
import { withRouter,NavLink} from 'react-router-dom';
import TabBar from "../../components/TabBar/"
import Unav from "../../components/Unav/";

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
            title:"用户中心",
            returnClass:"hide",
            moreClass:"hide",
            returnUrl:"/user",
            moreUrl:"/user"
        }
        return (
            <div className="user">
                <Unav navCfg={navCfg}/>
                <div className="user-con">
                    <h3 className="h3">基本信息</h3>
                    <ul className="info-ul">
                        <li className="clearfix">
                            <label className="label">账号</label>
                            <div className="label-ctrl">
                                <p>12345@qq.com</p>
                            </div>
                        </li>
                        <li className="clearfix">
                            <label className="label">姓名</label>
                            <div className="label-ctrl">
                                <p>天上天<NavLink to="/user/authenticate">去实名</NavLink></p>
                            </div>
                        </li>
                        <li className="clearfix">
                            <label className="label">注册IP</label>
                            <div className="label-ctrl">
                                <p>192.168.1.1    中国 北京</p>
                            </div>
                        </li>
                    </ul>
                    <h3 className="h3">最近登录历史</h3>
                    <ol className="info-ol">
                        <li className="clearfix">
                            <span>时间</span>
                            <span>IP</span>
                            <span>所在地</span>
                        </li>
                        <li className="clearfix">
                            <span>2018-3-25 22:41:56</span>
                            <span>192.168.1.1</span>
                            <span>中国 北京</span>
                        </li>
                        <li className="clearfix">
                            <span>2018-3-25 22:41:56</span>
                            <span>192.168.1.1</span>
                            <span>中国 北京</span>
                        </li>
                        <li className="clearfix">
                            <span>2018-3-25 22:41:56</span>
                            <span>192.168.1.1</span>
                            <span>中国 北京</span>
                        </li>
                        <li className="clearfix">
                            <span>2018-3-25 22:41:56</span>
                            <span>192.168.1.1</span>
                            <span>中国 北京</span>
                        </li>
                    </ol>
                </div>
                <TabBar common={common}/>
            </div>
        )
    }
}
export default View;
