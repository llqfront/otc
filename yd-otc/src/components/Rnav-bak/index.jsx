import React, { Component } from 'react';
import { withRouter,NavLink} from 'react-router-dom';
import NavTab from "../NavTab/"
class Com extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {lang,code} = this.props.common;
        return (
            <div className="user-nav">
                <NavTab title="我的钱包充值"/>
                <div className="list two-list cleafix">
                    <NavLink exact to={`/wallet/recharge/${code}`}>地址充值</NavLink>
                    <NavLink to={`/wallet/inside/${code}`}>内部转账</NavLink>
                </div>
            </div>
        );
    }
}
export default Com;
