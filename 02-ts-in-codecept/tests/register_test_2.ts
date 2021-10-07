Feature('register');

const { I } = inject();

Before(({ I, loginPage }) => {
  loginPage.open();
  I.click(loginPage.registerPageLink);
});

Scenario('register works', ({ I, registerPage }) => {
  I.see(registerPage.title);

  I.fillField(registerPage.registerForm.salonName, 'My New Salon');

  I.fillField(registerPage.registerForm.numberOfWorkers, '10');

  I.fillField(registerPage.registerForm.firstName, 'John');

  I.fillField(registerPage.registerForm.lastName, 'Doe');

  I.fillField(
    registerPage.registerForm.phoneNumber,
    '12345'
  );

  I.fillField(registerPage.registerForm.email, 'john.doe@example.com');

  I.fillField(
    registerPage.registerForm.password,
    'Password123'
  );

  I.click(registerPage.registerForm.agreement);

  I.click(registerPage.registerForm.submitButton);

  I.see(registerPage.emailConfirmationPopup.title);
}).tag('@TC00016');

Scenario.skip('register does not work', ({ I, registerPage, loginPage }) => {
  I.see(registerPage.title);
  I.fillField(registerPage.registerForm.salonName, 'My New Salon');
});

export = {}
