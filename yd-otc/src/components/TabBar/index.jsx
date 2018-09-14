import React, { Component } from 'react';
import { withRouter,NavLink} from 'react-router-dom';
class Com extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="tab-bar five-list clearfix">
                <NavLink exact to="/" activeClassName="active"><i className="home"></i>首页</NavLink>
                <NavLink to="/market" activeClassName="active"><i className="market"></i>行情</NavLink>
                <NavLink to="/trade" activeClassName="active"><i className="trade"></i>交易</NavLink>
                <NavLink to="/wallet" activeClassName="active"><i className="wallet"></i>钱包</NavLink>
                <NavLink to="/user/" activeClassName="active"><i className="user"></i>我的</NavLink>
            </div>
        );
    }
}
export default Com;
