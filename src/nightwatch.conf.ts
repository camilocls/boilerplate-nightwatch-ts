interface Services {
  chromedriver: {
    path: string
  },
  geckodriver: {
    path: string
  }
}

const Services: Services = {
  chromedriver: {
    path: ''
  },
  geckodriver: {
    path: ''
  }
}; 
loadServices();

module.exports = {
  src_folders: ['./dist/tests'],
  page_objects_path: ['./dist/page_objects'],
  webdriver: {
    start_process: true,
    port: 9515,
    server_path: Services.chromedriver.path,
    cli_args: [
      "--verbose"
    ],
  },
  test_settings: {
    default: {
      launch_url: 'http://test-nightwatch.netlify.com/test-demo.html',
      // launch_url: 'http://localhost/test-demo.html',
      desiredCapabilities : {
        browserName : 'chrome',
        chromeOptions: {
          "args" : ["--no-sandbox"]
        },
        loggingPrefs: {
          driver: "INFO", 
          server: "OFF", 
          browser: "INFO"
        }
      }
    }
  }
};

function loadServices() {
  try {
    Services.chromedriver = require('chromedriver');
  } catch (err) {}

  try {
    Services.geckodriver = require('geckodriver');
  } catch (err) {}
}