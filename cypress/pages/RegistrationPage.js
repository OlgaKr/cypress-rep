class RegistrationPage {
  nameInput = '#signupName';
  lastNameInput = '#signupLastName';
  emailInput = '#signupEmail';
  passwordInput = '#signupPassword';
  repeatPasswordInput = '#signupRepeatPassword';
  registerButton = 'button:contains("Register")';

  typeName(name) {
  cy.get(this.nameInput).type(name);
}

typeLastName(lastName) {
  cy.get(this.lastNameInput).type(lastName);
}

typeEmail(email) {
  cy.get(this.emailInput).type(email);
}

typePassword(password) {
  cy.get(this.passwordInput).type(password);
}

typeRepeatPassword(password) {
  cy.get(this.repeatPasswordInput).type(password);
}

clickRegister() {
  cy.get(this.registerButton).click();
}

}

export default new RegistrationPage();