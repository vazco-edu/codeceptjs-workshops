const { setHeadlessWhen } = require('@codeceptjs/configure');

require('ts-node/register')

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'tests/*_test.ts',
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
    registerPage: './pages/registerPage.ts',
    loginPage: './pages/loginPage.ts'
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