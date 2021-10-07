const { I } = inject();

export = {
  title: 'Rekisteröidy ja luo uusi toimipaikka maksutta',
  registerForm: {
    salonName: '$salonName',
    numberOfWorkers: '$numberOfWorkers',
    firstName: '$first_name',
    lastName: '$last_name',
    phoneNumber: { css: 'input[placeholder=Puhelinnumero]' },
    email: 'email',
    password: { css: 'input[placeholder="Valitse haluamasi salasana"]' },
    agreement: { css: '.Checkbox.default-theme' },
    submitButton: 'Lähetä',
  },
  emailConfirmationPopup: {
    title: 'Sähköposti john.doe@example.com näyttää olevan virheellinen. Oletko varma, että kirjoitit sen oikein?'
  }
}
