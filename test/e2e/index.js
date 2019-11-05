const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder()
    .forBrowser('chrome')
    .build();
    try {
        await driver.get('https://www.baidu.com/');
        await driver.findElement(By.name('wd')).sendKeys('学而思轻课', Key.RETURN);
        await driver.wait(until.titleIs('学而思轻课_百度搜索'), 5000);
    } finally {
        await driver.quit();
    }
})();