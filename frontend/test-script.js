const username = process.env.REACT_APP_USERNAME;
const accessKey = process.env.REACT_APP_ACCESS_KEY;
const driver = new webdriver.Builder().
  usingServer('http://'+username+':'+accessKey+'@hub-cloud.browserstack.com/wd/hub').
  withCapabilities(capabilities).build();