import { EnhancedPageObject as _EnhancedPageObject } from 'nightwatch'

declare module 'nightwatch' {
  interface HomePage extends EnhancedPageObject {
    validateTitle: () => HomePage
    getAllElements: () => NightwatchAPI
    clickButtonOnIframe: () => NightwatchAPI,
    validateCardTitle: () => HomePage
    validateListItems: () => HomePage
    validateModal: () => HomePage
    validateElementsCount: () => HomePage
    showModal: () => HomePage
    section: {
      modal: EnhancedPageObjectSections
      questions: EnhancedPageObjectSections
      hero: EnhancedPageObjectSections
    }
  }

  type SelectorOptions = {
    selector: string
    index: number
  }

  type Selector = | string | SelectorOptions
  export interface ElementCommands {
    waitForElementVisible(selector: Selector, time?: number, abortOnFailure?: boolean, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void, message?: string): this;
    getText(selector: Selector, callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void): this;
  }
}