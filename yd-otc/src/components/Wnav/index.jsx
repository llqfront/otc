import React, { Component } from 'react';
import { withRouter,NavLink} from 'react-router-dom';
import NavBar from "../NavBar/"
class Com extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="user-nav">
                <NavBar navCfg={this.props.navCfg}/>
                <div className="nav-list two-list cleafix">
                    <NavLink exact to="/wallet/">账户资产</NavLink>
                    <NavLink to="/wallet/otc">OTC设置</NavLink>
                </div>
            </div>
        );
    }
}
export default Com;
