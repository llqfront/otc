import React, { Component } from 'react';
import { withRouter,NavLink} from 'react-router-dom';
class Com extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="nav-bar">
                <h3>{this.props.title}</h3>
            </div>
        );
    }
}
export default Com;
