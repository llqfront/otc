import React, { Component } from 'react';
import ReactDOM from 'react-dom';
/**
    路由操作
*/
import { BrowserRouter, HashRouter, Route, Link, Switch } from 'react-router-dom';
/**
    mobx 操作
*/
// import { autorun} from 'mobx';
import { Provider } from 'mobx-react';

import { observable, useStrict ,autorun} from 'mobx'
import App from './App.js';
//
import home from './views/home/';
import market from './views/market/';

import trade from './views/trade/';
import sell from './views/trade/sell';
import tradeList from './views/trade/tradelist';
import notComplete from './views/trade/notComplete';
import complete from './views/trade/complete';
import cancel from './views/trade/cancel';
import doit from './views/trade/doit';
import createOrder from './views/trade/createOrder';

import search from './views/search/';
import unit from './views/unit/';


import login from './views/account/login';
import register from './views/account/register';
import forgotPassword from './views/account/forgotPassword';
import resetPassword from './views/account/resetPassword';



import wallet from './views/wallet/';
import recharge from './views/wallet/recharge';
import record from './views/wallet/record';
import otc from './views/wallet/otc';
import inside from './views/wallet/inside';
import insides from './views/wallet/insides';
import withdraw from './views/wallet/withdraw';

import user from './views/user/';
import authenticate from './views/user/authenticate.jsx';
import safety from './views/user/safety.jsx';


import otcStore from './store/otc';
// const cnstore = new cnStore();
const stores = {
  otc: new otcStore(),
  // ...other stores
};
const Router = () => (
    <BrowserRouter>
        <Provider {...stores}>
            <App>
                <Route exact path="/" component={home} />
                <Route exact path="/market" component={market} />
                <Route path={`/market/:currency`} component={market} />

                <Route exact path="/trade" component={trade} />
                <Route path="/trade/sell" component={sell} />
                <Route path="/trade/list" component={tradeList} />
                <Route path="/trade/createOrder" component={createOrder} />


                <Route exact path="/doit" component={doit} />
                <Route path={`/doit/:currency`} component={doit} />

                <Route exact path="/order/" component={notComplete} />
                <Route path="/order/complete" component={complete} />
                <Route path="/order/cancel" component={cancel} />

                <Route path="/account/login" component={login} />
                <Route path="/account/register" component={register} />
                <Route path="/account/forgotPassword" component={forgotPassword} />
                <Route path="/account/resetPassword" component={resetPassword} />

                <Route exact path="/wallet" component={wallet} />
                <Route path="/wallet/record" component={record} />
                <Route path="/wallet/otc" component={otc} />
                <Route path={`/wallet/recharge/:code`} component={recharge} />
                <Route path={`/wallet/inside/:code`} component={inside} />
                <Route path={`/wallet/insides/:code`} component={insides} />
                <Route path={`/wallet/withdraw/:code`} component={withdraw} />

                <Route path={`/search/:tpl/:code`} component={search} />
                <Route path="/unit" component={unit} />

                <Route exact path="/user" component={user} />
                <Route path="/user/authenticate" component={authenticate} />
                <Route path="/user/safety" component={safety} />
            </App>
        </Provider>
    </BrowserRouter>
)
export default Router;
