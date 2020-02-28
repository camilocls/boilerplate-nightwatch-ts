import { NightwatchBrowser, HomePage } from 'nightwatch'

module.exports = {
  'Demo test' : function (browser: NightwatchBrowser) {
    browser.url(browser.launch_url)
    const HomePage = browser.page.HomePage() as HomePage
    // browser.pause(1000)
    // HomePage.validateTitle()
    // HomePage.api.pause(1000)
    // HomePage.getAllElements()
    // HomePage.clickButtonOnIframe()
    // HomePage.validateTitle()
    // HomePage.validateListItems()
    // HomePage.validateListItems()
    // HomePage.showModal()
    // browser.pause(3000);
    HomePage.validateModal()
    // HomePage.validateElementsCount()
    // browser.pause(4000)
    browser.end()
  }
}