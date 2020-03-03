import { NightwatchBrowser, HomePage } from 'nightwatch'

module.exports = {
  'Demo test' : function (browser: NightwatchBrowser) {
    browser.url(browser.launch_url)
    const HomePage = browser.page.HomePage() as HomePage
    // HomePage.validateTitle()
    // HomePage.api.pause(1000)
    // HomePage.getAllElements()
    // HomePage.clickButtonOnIframe()
    // HomePage.validateTitle()
    // HomePage.validateListItems()
    // HomePage.validateListItems()
    // HomePage.showModal()
    HomePage.validateModal()
    HomePage.validateElementsCount()
    browser.end()
  }
}