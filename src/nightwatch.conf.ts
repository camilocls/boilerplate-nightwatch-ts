import chromedriver = require('chromedriver');

module.exports = {
  src_folders: ['./dist/tests'],
  page_objects_path: ['./dist/page_objects'],
  globals_path: 'globals.js',
  webdriver: {
    start_process: true,
    port: 9515,
    server_path: chromedriver.path,
    cli_args: ['--verbose'],
  },
  test_settings: {
    default: {
      launch_url: 'http://test-nightwatch.netlify.com/test-demo.html',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['--no-sandbox'],
        },
        loggingPrefs: {
          driver: 'INFO',
          server: 'OFF',
          browser: 'INFO',
        },
      },
    },
  },
};
