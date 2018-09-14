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
                <NavTab title="提现"/>
            </div>
        );
    }
}
export default Com;
