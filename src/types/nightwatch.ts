import { EnhancedPageObject, NightwatchAPI } from 'nightwatch'

declare module 'nightwatch' {
  interface HomePage extends EnhancedPageObject {
    validateTitle: () => HomePage
    getAllElements: () => NightwatchAPI
    clickButtonOnIframe: () => NightwatchAPI
  }
}