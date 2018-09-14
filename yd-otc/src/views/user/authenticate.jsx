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
            common,
            value: 'cn',
            validate:{
                card:''
            }
        }
    }
    handleChange(d) {
        // e.preventDefault();
        // this.setState({value: e.target.value});
        console.log(d)
    }
    ChangeCard(e) {
        e.preventDefault();
        this.setState({
            validate:{
                card:e.target.value
            }
        });
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
                    <h3 className="h3">实名认证</h3>
                    <ul className="info-ul">
                        <li className="clearfix">
                            <label className="label">选择国家或地区</label>
                            <div className="label-ctrl">

                            </div>
                        </li>
                        <li className="clearfix">
                            <label className="label">选择证件类型</label>
                            <div className="label-ctrl">

                            </div>
                        </li>
                        <li className="clearfix">
                            <label className="label">证件号码</label>
                            <div className="label-ctrl">

                            </div>
                        </li>
                        <li className="clearfix">
                            <label className="label">正面照</label>
                            <div className="label-ctrl">

                            </div>
                        </li>
                        <li className="clearfix">
                            <label className="label">背面照</label>
                            <div className="label-ctrl">
                                <p>未选择任何文件</p>
                            </div>
                        </li>
                        <li className="clearfix">
                            <label className="label">手持证件照</label>
                            <div className="label-ctrl">
                                <p>未选择任何文件</p>
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
