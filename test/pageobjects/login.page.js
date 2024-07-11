const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {
    get inputUsername () { return $('//*[@id="user-name"]'); }
    get inputPassword () { return $('//*[@id="password"]'); }
    get btnLogin () { return $('//*[@id="login-button"]'); }
    get errorMessage () { return $('//*[@data-test="error"]'); }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    open () {
        return super.open('/');
    }

    async clearInputs() {
        await this.inputUsername.clearValue();
        await this.inputPassword.clearValue();
    }
}

module.exports = new LoginPage();