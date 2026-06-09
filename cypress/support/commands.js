import RegistrationPage from '../pages/RegistrationPage';

Cypress.Commands.add('register', (name, lastName, email, password) => {
  RegistrationPage.typeName(name);
  RegistrationPage.typeLastName(lastName);
  RegistrationPage.typeEmail(email);
  RegistrationPage.typePassword(password);
  RegistrationPage.typeRepeatPassword(password);

  RegistrationPage.clickRegister();
});

Cypress.Commands.add('login', (email, password) => {
  cy.contains('button', 'Sign In').click();
  cy.get('#signinEmail').type(email);
  cy.get('#signinPassword').type(password);
  cy.contains('button', 'Login').click();
});

Cypress.Commands.add('deleteAccount', () => {
  cy.get('a[href="/panel/settings"]:visible').click();

  cy.contains('button', 'Remove my account')
    .scrollIntoView()
    .click();

  cy.contains('.modal-content', 'Remove account').within(() => {
    cy.contains('button', 'Remove').click();
  });
});