require('import-export');

exports.config = {
  tests: "./tests/**/*.js",
  timeout: 10000,
  output: "./output",
  helpers: {
    Puppeteer: {
      url: 'https://www.harveynorman.com.au/',
      windowSize: "1440x700",
      restart: false,
      waitForAction: 500
    }
  },
  name: "harvey-ui-tests",
  multiple: {
    parallel: {
      chunks: 2
    }
  },
  include: {
    homePage: './pages/HomePage.js',
    resultPage: './pages/ResultPage.js',
    productDetailsPage: './pages/ProductDetailsPage.js',
    popup: './pages/Popup.js',
    cartPage: './pages/CartPage.js',
    navTools: './pages/NavTools.js'
  }
}
