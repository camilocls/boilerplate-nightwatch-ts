import { NightwatchBrowser, HomePage } from 'nightwatch'

module.exports = {
  'Demo test' : function (browser: NightwatchBrowser) {
    const HomePage = browser.page.HomePage() as HomePage
    browser.url(browser.launch_url)
    // browser.pause(1000)
    // HomePage.validateTitle()
    // HomePage.api.pause(1000)
    // HomePage.getAllElements()
    HomePage.clickButtonOnIframe()
    // browser.pause(4000)
    browser.end()
  }
}