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
    getList(arr,params){
        let res = [];
        for(let i=0;i<arr.length;i++ ){
            res.push(
                <NavLink key={i} className={arr[i].name==params.code.split('-')[1] ? 'cur' : ''} to={`/${params.code.split('-')[0]}/${params.tpl}/${arr[i].name}`}>
                    <em></em>
                    <span>{arr[i].name}</span>
                </NavLink>)
        }
        return res;
    }
    render() {
        let {common} = this.state;
        let {...match} = this.props.match;
        let arr = [
            {
                "name":"eth"
            },
            {
                "name":"btc"
            },
            {
                "name":"yd"
            },
            {
                "name":"trx"
            },
            {
                "name":"zil"
            }
        ]
        let navCfg = {
            title:"币种选择",
            returnClass:"",
            moreClass:"hide",
            returnUrl:`/${match.params.code.split('-')[0]}/${match.params.tpl}/${match.params.code.split('-')[1]}`,
            moreUrl:match.url,
            match:match
        }
        return (
            <div className="search-page">
                <NavBar navCfg={navCfg}/>
                <div className="search-input">
                    <input type="text" placeholder="搜索"/>
                    <i></i>
                </div>
                <div className="search-list">
                    <div className="ul">
                        {this.getList(arr,match.params)}
                    </div>
                </div>
            </div>
        )
    }
}
export default View;
