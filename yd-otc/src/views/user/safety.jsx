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
                    <h3 className="h3">登录密码</h3>
                    <h3 className="h3">资金密码</h3>
                    <h3 className="h3">谷歌验证码</h3>
                </div>
                <TabBar common={common}/>
            </div>
        )
    }
}
export default View;
