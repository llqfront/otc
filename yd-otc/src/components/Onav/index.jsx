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
                    <NavLink exact to="/order/">未完成</NavLink>
                    <NavLink to="/order/complete">已完成</NavLink>
                    <NavLink to="/order/cancel">已取消</NavLink>
                </div>
            </div>
        );
    }
}
export default Com;
