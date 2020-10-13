import { NightwatchBrowser, HomePage } from 'nightwatch';

module.exports = {
  'Demo test': (browser: NightwatchBrowser): void => {
    browser.url(browser.launch_url);
    const homePage = browser.page.HomePage() as HomePage;
    homePage.validateTitle();
    browser.end();
  },
};
