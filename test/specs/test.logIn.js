const LoginPage = require('../pageobjects/login.page');
const DashboardPage = require('../pageobjects/dashboard.page');
const loginData = require('../data/loginData');
const logger = require('../utils/logger');

describe('Saucedemo Login', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    it('should not login with empty credentials (UC-1)', async () => {
        await LoginPage.clearInputs();
        await LoginPage.btnLogin.click();
        await expect(LoginPage.errorMessage).toBeExisting();
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username is required');
        logger.info('UC-1: Error message for empty credentials validated');
    });

    it('should not login with empty password (UC-2)', async () => {
        await LoginPage.inputUsername.setValue(loginData.invalidCredentials.username);
        await LoginPage.inputPassword.clearValue();
        await LoginPage.btnLogin.click();
        await expect(LoginPage.errorMessage).toBeExisting();
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Password is required');
        logger.info('UC-2: Error message for empty password validated');
    });

    it('should login with valid credentials (UC-3)', async () => {
        await LoginPage.login(loginData.validCredentials.username, loginData.validCredentials.password);
        await DashboardPage.validateTitle();
        logger.info('UC-3: Successful login validated');
    });
});

