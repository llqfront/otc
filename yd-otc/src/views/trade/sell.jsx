import React, { Component } from 'react';
import {observer,inject} from 'mobx-react';
import { withRouter,NavLink} from 'react-router-dom';
import Header from "../../components/Header/"
import Tnav from "../../components/Tnav/"
import TabBar from "../../components/TabBar/"

// 导入需要的模块
@withRouter
@inject('otc')
@observer
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
    // 提交
    handleClick(e) {
        e.preventDefault();
        const otc = this.props.otc;
        otc.setData({
            url:"/trade/sell"
        })
    }
    getList(arr){
        let res = [];
        for(let i=0;i<arr.length;i++ ){
            res.push(
                <li key={i}>
                    <div className="hd clearfix">
                        <span>买入</span>
                        <p>
                            <em></em>
                            <var>826单</var>
                            <i></i>
                            <b>4000-9000</b>
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
                    <a onClick={e => this.handleClick(e)} href="javascript:;"></a>
                </li>)
        }
        return res;
    }
    render() {
        let {common} = this.state;
        let navCfg = {
            title:"OTC",
            code:this.props.match.params.unit || "CNY"
        }
        return (
            <div className="trade">
                <Tnav navCfg={navCfg}/>
                <div className="trade-line"></div>
                <div className="nav-list four-list cleafix">
                    <NavLink exact to="/trade">买入</NavLink>
                    <NavLink to="/trade/sell">卖出</NavLink>
                    <NavLink to="/trade/list">交易单</NavLink>
                    <NavLink to="/order">订单</NavLink>
                </div>
                <div className="trade-filter clearfix">
                    <h6>
                        <input type="radio" name="sj" id="sj"/><label htmlFor="sj">优选商家</label>
                    </h6>
                    <h6>
                        <span>所有金额<i></i></span>
                    </h6>
                    <h6>
                        <span>所有方式<i></i></span>
                    </h6>
                </div>
                <div className="trade-list">
                    <ul>
                        {this.getList([1,2,3,4])}
                    </ul>
                </div>
                <TabBar common={common}/>
            </div>
        )
    }
}
export default View;
