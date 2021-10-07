const { I } = inject();

export = {
  url: 'https://admin.test.booksalon.fi/admin/auth/login',
  registerPageLink: 'Luo uudet tunnukset',
  open() {
    I.amOnPage(this.url);
  }
}
