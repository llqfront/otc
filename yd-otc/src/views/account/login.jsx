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
                    <NavLink className="link" to="/account/register">注册新账号</NavLink>
                </h3>
                <h4>登录OTC</h4>
                <h5>你可以使用OTC账号登录</h5>
                <ul className="account-from">
                    {/* <li>
                        <label>+8226</label>
                        <div className="label-ctrl">
                            <input type="text" readOnly value="" placeholder="手机号/邮箱"/>
                        </div>
                    </li> */}
                    <li>
                        <input className="inp" readOnly type="text" value="" placeholder="邮箱"/>
                    </li>
                    <li>
                        <input className="inp" readOnly type="password" value="" placeholder="密码"/>
                        <i></i>
                    </li>
                    <li className="sp">
                        <input className="btn" readOnly type="button" value="登录"/>
                    </li>
                    <li className="other">
                        {/* <NavLink className="r1" to="/account/login">使用邮箱登录</NavLink> */}
                        <NavLink className="r2" to="/account/forgotPassword">忘记密码</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
export default View;
