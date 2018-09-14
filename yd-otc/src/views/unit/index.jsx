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
    // toUrl(params,tmp){
    //     if(params.code.split('-')[0]=="wallet"){
    //         return `/${params.code.split('-')[0]}/${params.tpl}/${tmp.name}`;
    //     }else if(params.code.split('-')[0]=="trade"){
    //         return `/${params.code.split('-')[0]}/${tmp.name}`;
    //     }
    // }
    getList(arr){
        let res = [];
        for(let i=0;i<arr.length;i++ ){
            res.push(
                <NavLink key={i} className={this.params().unit.toUpperCase()==arr[i].name ?'cur':''} to={`/trade/?unit=${arr[i].name.toLowerCase()}`}>
                    <em></em>
                    <span>{arr[i].name}</span>
                </NavLink>)
        }
        return res;
    }
    params() {
        let url = this.props.location.search;
        const params = {};
        if (url.indexOf("?") != -1) {
           let str = url.substr(1);
           let strs = str.split("&");
           for(var i = 0; i < strs.length; i ++) {
              params[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
           }
        }
        return params;
     }
    render() {
        let {common} = this.state;
        let arr = [
            {
                "name":"CNY"
            },
            {
                "name":"USDT"
            }
        ]
        let navCfg = {
            title:"法币交易设置",
            returnClass:"",
            moreClass:"hide",
            returnUrl:"/trade?unit="+this.params().unit,
            moreUrl:"/trade",
            match:""
        }
        return (
            <div className="unit-page">
                <NavBar navCfg={navCfg}/>
                <div className="unit-line"></div>
                <div className="unit-list">
                    <div className="ul">
                        {this.getList(arr)}
                    </div>
                </div>
            </div>
        )
    }
}
export default View;
