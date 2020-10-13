import { NightwatchBrowser } from 'nightwatch';

type Callback = () => void;

module.exports = {
  // reporter: reporter,
  // this controls whether to abort the test execution when an assertion failed and skip the rest
  // it's being used in waitFor commands and expect assertions
  // abortOnAssertionFailure: false,

  // this will overwrite the default polling interval (currently 500ms) for waitFor commands
  // and expect assertions that use retry
  waitForConditionPollInterval: 1000,

  // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
  // expect assertions
  waitForConditionTimeout: 20000,

  // this will cause waitFor commands on elements to throw an error if multiple
  // elements are found using the given locate strategy and selector
  // throwOnMultipleElementsReturned: true,

  // controls the timeout time for async hooks. Expects the done() callback to be invoked within this time
  // or an error is thrown
  asyncHookTimeout: 60000,

  transitionPageWaitTime: 2000,
  before(cb: Callback): void {
    console.log('Setting up...');
    cb();
  },
  beforeEach(_browser: NightwatchBrowser, cb: Callback): void {
    cb();
  },
  after(cb: Callback): void {
    console.log('shutting down browser...');
    cb();
  },
  afterEach(browser: NightwatchBrowser, cb: Callback): void {
    browser.end();
    cb();
  },
  reporter(_results: any, done: Callback): void {
    done();
  },
};
