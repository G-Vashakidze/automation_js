const { browser } = require('@wdio/globals');
const Page = require('./page');

class DashboardPage extends Page {
    async validateTitle() {
        await expect(browser).toHaveTitle('Swag Labs');
    }
}

module.exports = new DashboardPage();
