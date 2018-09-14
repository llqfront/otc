// import {observable, computed, action, autorun,runInAction} from 'mobx';
import {observable, computed, action} from 'mobx';
class Store {
    @observable tradeCfg = {};
    @action
    setData = (cfg)=>{
        this.tradeCfg = cfg;
        console.log(cfg)
        window.location.replace("/doit/eth");

    }
}

export default Store;
