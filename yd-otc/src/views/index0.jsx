import React, { Component } from 'react';
import {observer,inject} from 'mobx-react';
import { withRouter,NavLink} from 'react-router-dom';
import axios from 'axios';
import PageNav from '../components/PageNav/';
// components
import Nav from '../components/Nav/';
import { JSEncrypt } from "jsencrypt";
import { Encrypt, Decrypt} from '../js/aes';
//
class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList:[],
            pageConfig: {
                totalPage: 0, //总页码
                currentPage:1
            },
            session:"sessionS1", //记录当前页
            invite: {
              'uname':'',
              'passwd':''
            },
            validate:{
              'uname':false,
              'passwd':false
            },
            validatetip:{
              'uname':true,
              'passwd':true
            },
            inviteVd:false
        }
        this.getCurrentPage = this.getCurrentPage.bind(this);
    }
    // if(cfg.body.count_total<3)return;
    // // 根据总条数 算出一共有多少页面
    // var total = Math.ceil(cfg.body.count_total/3);
    componentWillMount(){
        let _this = this;
        if(sessionStorage.getItem(this.state.session)){
            _this.state.pageConfig.currentPage = decodeURIComponent(sessionStorage.getItem(this.state.session))
        }
        this.page(_this.state.pageConfig.currentPage).then(function(res){
            _this.setState({
                pageConfig: {
                  totalPage:  Math.ceil(res.data.count/res.data.size),
                  currentPage:_this.state.pageConfig.currentPage
              },
              dataList:res.data.result
            })
        });
    }
    async page(pageNo){
        let cccc = Encrypt('123');
        console.log(cccc)
        console.log(Decrypt('a90505933fdbeb0e2465357de3385a60cf405e8306b9a6a81cdbdececd9ac07128cb2c4699d9db0d56176dec6902df97:'))
        let	test = await axios.post('/api/userinfo',Encrypt({
		    params: {
		      page: pageNo,
		      pageSize: 5
		    }
		}),{headers: {
            'responseType': "arraybuffer",
            'Content-Type': "application/octet-stream",
        }})
		let	data = await axios.get('/api/userinfo', {
		    params: {
		      page: pageNo,
		      pageSize: 5
		    }
		})

        // console.log(Decrypt(`nrZpjxmPXcvXkhEJfRBAPA==`))
		return data
	}
    getCurrentPage(currentPage) {
        // this.setState({
        //   dataList:data[currentPage-1].name
        // })
        var _this = this;
        this.page(currentPage).then((res)=>{
            _this.setState({
                pageConfig: {
                  totalPage:  Math.ceil(res.data.count/res.data.size),
                  currentPage:_this.state.pageConfig.currentPage
                },
                dataList:res.data.result
            })
        });
    }
    test(data){
        let res = [];
        for(let i = 0,len=data.length; i <len ; i++) {
          res.push(
              <li key={i}>
                  <span>{data[i].Id}</span>
                  <span>{data[i].Uname}</span>
                  <span>{data[i].Email}</span>
                  <span>{data[i].InsertTime}</span>
              </li>
          )

        }
        return res;
    }
    init(state){
        if(state.pageConfig.totalPage>0){
            return (
                <div className="content">
                    <ul>
                        {this.test(this.state.dataList)}
                    </ul>
                    <PageNav pageConfig={this.state.pageConfig} pageCallbackFn={this.getCurrentPage} session={this.state.session}/>
                </div>
            )
        }else {
            return "..."
        }
    }
    // key up
    handleChange(e) {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        // 多个值时
        this.state.validate[name] = true;
        this.state.validatetip[name] = true;
        const invite = this.state.invite;
        invite[name] = value;
        this.setState({invite});
    }
    // 提交
    handleClick(e) {
        // var encrypt = new JSEncrypt();
        //  encrypt.setPublicKey($('#pubkey').val());
        //  var encrypted = encrypt.encrypt($('#input').val());
        //  //console.log(encrypted);
        //  // Decrypt with the private key...
        //  var decrypt = new JSEncrypt();
        //  decrypt.setPrivateKey($('#privkey').val());
        //  var uncrypted = decrypt.decrypt(encrypted);

// https://blog.csdn.net/suo082407128/article/details/53509637
        var publicKey=`-----BEGIN RSA PRIVATE KEY-----
MIICXgIBAAKBgQDHikastc8+I81zCg/qWW8dMr8mqvXQ3qbPAmu0RjxoZVI47tvs
kYlFAXOf0sPrhO2nUuooJngnHV0639iTTEYG1vckNaW2R6U5QTdQ5Rq5u+uV3pMk
7w7Vs4n3urQ6jnqt2rTXbC1DNa/PFeAZatbf7ffBBy0IGO0zc128IshYcwIDAQAB
AoGBALTNl2JxTvq4SDW/3VH0fZkQXWH1MM10oeMbB2qO5beWb11FGaOO77nGKfWc
bYgfp5Ogrql4yhBvLAXnxH8bcqqwORtFhlyV68U1y4R+8WxDNh0aevxH8hRS/1X5
031DJm1JlU0E+vStiktN0tC3ebH5hE+1OxbIHSZ+WOWLYX7JAkEA5uigRgKp8ScG
auUijvdOLZIhHWq7y5Wz+nOHUuDw8P7wOTKU34QJAoWEe771p9Pf/GTA/kr0BQnP
QvWUDxGzJwJBAN05C6krwPeryFKrKtjOGJIniIoY72wRnoNcdEEs3HDRhf48YWFo
riRbZylzzzNFy/gmzT6XJQTfktGqq+FZD9UCQGIJaGrxHJgfmpDuAhMzGsUsYtTr
iRox0D1Iqa7dhE693t5aBG010OF6MLqdZA1CXrn5SRtuVVaCSLZEL/2J5UcCQQDA
d3MXucNnN4NPuS/L9HMYJWD7lPoosaORcgyK77bSSNgk+u9WSjbH1uYIAIPSffUZ
bti+jc1dUg5wb+aeZlgJAkEAurrpmpqj5vg087ZngKfFGR5rozDiTsK5DceTV97K
a3Y+Nzl+XWTxDBWk4YPh2ZlKv402hZEfWBYxUDn5ZkH/bw==
-----END RSA PRIVATE KEY-----`;
        let encryptor = new JSEncrypt()  // 新建JSEncrypt对象
        encryptor.setPublicKey(publicKey)  // 设置公钥
        var enData = {};
        // 将参数用jsencrypt加密后赋给enData
        for(var key in this.state.invite){
            enData[key] = encryptor.encrypt(this.state.invite[key]);
        }

          // encryptor.setPublicKey(publicKey);
          // console.log(encryptor.encrypt('测试'));
          console.log(this.state.invite);
          console.log(enData);
    }
    render() {
        return (<div>
            <ul>
                <li>
                    <div className="label-ctrl">
                        <input type="text" autoComplete="off" value={this.state.invite.uname} name="uname" onChange={e => this.handleChange(e)} className={this.state.validatetip.uname==true ? 'inp' : 'inp error'} placeholder="Email address"/>
                    </div>
                </li>
                <li>
                    <div className="label-ctrl">
                        <input type="Password" autoComplete="off" value={this.state.invite.passwd} name="passwd" onChange={e => this.handleChange(e)} className={this.state.validatetip.passwd==true ? 'inp' : 'inp error'} placeholder="Password"/>
                    </div>
                </li>
                <li>
                    <div className="label-ctrl">
                        <input type="button" readOnly="readOnly" onClick={e => this.handleClick(e)} className="inb" value="SIGN IN"/>
                    </div>
                </li>
            </ul>
            {this.init(this.state)}
        </div>)
    }
}
export default Page;
