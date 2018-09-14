import React, { Component } from 'react';
import {observer,inject} from 'mobx-react';
import { withRouter,NavLink} from 'react-router-dom';
import Header from "../../components/Header/"
import Nav from "../../components/Nav/"
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
        return (
            <div className="account">
                <h3>
                    <NavLink className="close" to="/"></NavLink>
                    <NavLink className="link" to="/account/login">已有账户?</NavLink>
                </h3>
                <h4>注册OTC</h4>
                <h5>你可以使用OTC账号登录</h5>
                <ul className="account-from">
                    {/* <li>
                        <label>+8226</label>
                        <div className="label-ctrl">
                            <input type="text" readOnly value="" placeholder="手机号"/>
                        </div>
                    </li> */}
                    <li>
                        <input className="inp" readOnly type="text" value="" placeholder="邮箱"/>
                    </li>
                    {/* <li>
                        <input className="inp" readOnly type="text" value="" placeholder="短信验证码"/>
                        <span className="def">发送验证码</span>
                    </li> */}
                    <li>
                        <input className="inp" readOnly type="password" value="" placeholder="密码"/>
                        <i></i>
                    </li>
                    <li className="sp">
                        <input className="btn" readOnly type="button" value="注册"/>
                    </li>
                    <li className="other">
                        <a href="javascript:;" className="xieyi">点击注册按钮，即表示您同意<em>OTC网络服务条款</em></a>
                        {/* <a href="javascript:;" className="r2">邮箱注册</a> */}
                    </li>
                </ul>
            </div>
        )
    }
}
export default View;
