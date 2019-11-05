import { createContext } from "react";
import { decorate, observable, computed } from "mobx";

export class loginForm {
    loginData = {
        username: 'username',
        password: 'password',
    };

    login = async () => {
        let { username, password } = this.loginData;
    }

    changeData = (type, val) => {
        this.loginData[type] = val;
    };

}

decorate(loginForm, {
    loginData: observable,
});

export default createContext(new loginForm());
