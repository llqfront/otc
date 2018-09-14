import React, { Component } from 'react';
import { withRouter,NavLink} from 'react-router-dom';
class Com extends Component {
    constructor(props) {
        super(props);
    }
    // toUrl(navCfg){
    //     let {match,returnUrl} = navCfg;
    //     // 针对搜索界面特殊处理
    //     if(match && match.params.code.split('-')[0]=="wallet"){
    //         return returnUrl;
    //     }else if(match && match.params.code.split('-')[0]=="trade"){
    //         return `/${match.params.code.split('-')[0]}/${match.params.tpl}/${match.params.code.split('-')[1]}`;
    //     }else {
    //         // 正常情况处理
    //         return returnUrl;
    //     }
    // }
    render() {
        let {...navCfg} = this.props.navCfg;
        return (
            <div className="nav-bar">
                <h3>
                    <NavLink className={`return ${navCfg.returnClass}`} to={navCfg.returnUrl}></NavLink>
                    <NavLink className={`more ${navCfg.moreClass}`} to={navCfg.moreUrl}></NavLink>
                    {navCfg.title}
                </h3>
            </div>
        );
    }
}
export default Com;
