import * as React from "react";
const { useContext, Suspense } = React;
import LoginStore from "./store";
import { observer, useObservable } from "mobx-react-lite";
import { withRouter } from 'react-router-dom';
import './assets/css/style.css';

const LoginFrom = observer((props) => {
    // const fromEl = React.useRef();
    const { loginData, login, changeData } = useContext(LoginStore);
    
    const go = () => {
        console.log(props.history.push('/home'));
        
        // props[0].history.push('/123');
    }

    return (
        <>
            <div className="login-form">
                <div className="close"></div>
                <div className="head-info">
                    <label className="lbl-1"> </label>
                    <label className="lbl-2"> </label>
                    <label className="lbl-3"> </label>
                    <span className="title">京程一灯CRM系统</span>
                </div>
                <div className="clear"></div>
                <div className="avtar"><img src={require("./assets/images/avtar.png")} width="79" /></div>
                <form>
                    <input type="text" className="text" value={loginData.username}
                        onChange={e => changeData('username', e.target.value)} />
                    <div className="key">
                        <input type="password" value={loginData.password}
                            onChange={e => changeData('password', e.target.value)} />
                    </div>
                </form>
                <div className="signin"><input type="submit" onClick={() => go()} value="登录系统" /></div>
            </div>
            <div className="copy-rights">
                <p>
                    Copyright &copy; 2016 yidengxuetang.com All Rights
                    Reversed.京ICP备16022242号-1&nbsp;
                <a target="_blank" href="http://yd.ke.qq.com">腾讯课堂</a>
                </p>
            </div>
        </>
    )
})

export default withRouter(LoginFrom);