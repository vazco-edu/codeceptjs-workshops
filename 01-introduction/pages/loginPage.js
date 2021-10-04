const { I } = inject();

module.exports = {
  url: 'https://admin.test.booksalon.fi/admin/auth/login',
  registerPageLink: 'Luo uudet tunnukset',
  open() {
    I.amOnPage(this.url);
  }
}
