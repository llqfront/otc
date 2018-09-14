import React, { Component } from 'react';
import {observer,inject} from 'mobx-react';
import { withRouter,NavLink} from 'react-router-dom';

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
            <div className="forgot-password">
                <div className="nav-bar">
                    <h3>重置密码</h3>
                </div>
                <div className="progress">
                    <p>
                        <span className="spn1">
                            <i></i>
                            验证身价
                        </span>
                    </p>
                    <em></em>
                    <p>
                        <span className="spn2">
                            <i></i>
                            重置密码
                        </span>
                    </p>
                </div>
                <ul>
                    <li>
                        <label>登录密码</label>
                        <div className="label-ctrl">
                            <input type="text" readOnly value="" placeholder="设置新密码"/>
                        </div>
                    </li>
                    <li>
                        <label>确认密码</label>
                        <div className="label-ctrl">
                            <input type="text" readOnly value="" placeholder="请确认密码"/>
                        </div>
                    </li>
                    <li>
                        <input type="button" value="确定" readOnly/>
                    </li>
                </ul>
            </div>
        )
    }
}
export default View;
