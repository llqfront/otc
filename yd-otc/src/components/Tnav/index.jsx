import React, { Component } from 'react';
import { withRouter,NavLink} from 'react-router-dom';
class Com extends Component {
    constructor(props) {
        super(props);
    }
    params() {
        let url = window.location.search;
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
        let navCfg = this.props.navCfg;
        let params = this.params();
        let unit = 'cny';
        if(params.unit){
            unit = params.unit;
        }
        return (
            <div className="trade-nav">
                <div className="nav-bar">
                    <h3>
                        {/* 暂时只有CNY */}
                        {/* <NavLink className="unit" to={`/unit/?unit=${unit}`}>{unit}</NavLink> */}
                        <a className="unit" href="javascript:;">CNY</a>
                        <a className="unit fr" href="javascript:;"></a>
                        {navCfg.title}
                    </h3>
                </div>
                <div className="currency-bar clearfix">
                    <h3>
                        <span>USDT/CNY</span>
                        <i></i>
                    </h3>
                    <p>
                        <em><i></i>-9.24%</em>
                        <span>&yen;28888.80</span>
                    </p>
                </div>
            </div>
        );
    }
}
export default Com;
