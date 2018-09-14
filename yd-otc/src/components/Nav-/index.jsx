import React, { Component } from 'react';
import unit from '../../unit/unit.js';
import { NavLink} from 'react-router-dom';
class Com extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lan:true
        };
        this._onBlurHandler = this._onBlurHandler.bind(this);
    }
    _onBlurHandler(e){
        this.setState({
           lan:true
        })
    }
    componentWillUnmount(){
        document.body.removeEventListener('click', this._onBlurHandler, false);
    }
    componentDidMount(){
        document.body.addEventListener('click', this._onBlurHandler, false);
        let pageFirst = unit.Q("#pageFirst")[0];
        let height = document.documentElement.clientHeight||document.body.clientHeight;
        if(height<=850){
            height = 850;
        }
        unit.css(pageFirst,'height',`${height}px`);
    }
    handleLan(e){
        e.preventDefault();
        e.nativeEvent.stopImmediatePropagation();
        this.setState(prevState => ({
          lan: !prevState.lan
        }));
    }
    render() {
        return (
            <div className="header">

            </div>
        );
    }
}
export default Com;
