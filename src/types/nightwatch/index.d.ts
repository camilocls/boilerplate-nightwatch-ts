import { NightwatchAPI } from 'nightwatch';

declare module 'nightwatch' {
  type SelectorOptions = {
    selector: string;
    index: number;
  };

  type Selector = string | SelectorOptions;

  export interface ElementCommands {
    waitForElementVisible(
      selector: Selector,
      time?: number,
      abortOnFailure?: boolean,
      callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<void>) => void,
      message?: string
    ): this;
    getText(
      selector: Selector,
      callback?: (this: NightwatchAPI, result: NightwatchCallbackResult<string>) => void
    ): this;
  }
}
