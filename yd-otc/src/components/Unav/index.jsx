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
                <div className="nav-list three-list cleafix">
                    <NavLink exact to="/user/">基本信息</NavLink>
                    <NavLink to="/user/authenticate">实名认证</NavLink>
                    <NavLink to="/user/safety">安全</NavLink>
                </div>
            </div>
        );
    }
}
export default Com;
