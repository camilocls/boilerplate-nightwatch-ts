import { NightwatchBrowser } from 'nightwatch'

module.exports = {
  'Demo test' : function (browser: NightwatchBrowser) {
    browser.url(browser.launch_url)
    browser.pause(1000)
    browser.end()
  }
}