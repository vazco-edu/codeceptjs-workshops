const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://admin.test.booksalon.fi/',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    registerPage: './pages/registerPage.js',
    loginPage: './pages/loginPage.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-workshops',
  plugins: {
    customLocator: {
      enabled: true,
      prefix: '$',
      attribute: 'data-test-text'
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}