import React, { Component } from 'react';
import {observer,inject} from 'mobx-react';
import { withRouter,NavLink} from 'react-router-dom';
import Header from "../../components/Header/";
import TabBar from "../../components/TabBar/";
import Swiper from 'react-id-swiper';

//
class Home extends Component {
    constructor(props) {
        super(props);
        let common = {
            lang:'cn'
        }
        this.state = {
            common
        }
    }
    render() {
        let {common} = this.state;
        const params = {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        loop:true
        };
        return (
            <div className="home">
                <Header common={common}/>
                <div className="banner">
                    <Swiper {...params}>
                        <div>

                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                    </Swiper>
                </div>
                home
                <TabBar common={common}/>
            </div>
        )
    }
}
export default Home;
