class RegistrationPage {
  selectors = {
    nameInput: '#signupName',
    lastNameInput: '#signupLastName',
    emailInput: '#signupEmail',
    passwordInput: '#signupPassword',
    repeatPasswordInput: '#signupRepeatPassword',
    registerButton: 'button:contains("Register")',
    signUpButton: 'button:contains("Sign up")'
  };

  getNameInput() {
    return cy.get(this.selectors.nameInput);
  }

  getLastNameInput() {
    return cy.get(this.selectors.lastNameInput);
  }

  getEmailInput() {
    return cy.get(this.selectors.emailInput);
  }

  getPasswordInput() {
    return cy.get(this.selectors.passwordInput);
  }

  getRepeatPasswordInput() {
    return cy.get(this.selectors.repeatPasswordInput);
  }

  getRegisterButton() {
    return cy.get(this.selectors.registerButton);
  }

  getSignUpButton() {
  return cy.get(this.selectors.signUpButton);
}

  open() {
    cy.visit('/');
}

  typeName(name) {
  return this.getNameInput().clear().type(name);
}

  typeLastName(lastName) {
    return this.getLastNameInput().clear().type(lastName);
  }

  typeEmail(email) {
    return this.getEmailInput().clear().type(email);
  }

  typePassword(password) {
    return this.getPasswordInput().clear().type(password);
  }

  typeRepeatPassword(pass) {
    return this.getRepeatPasswordInput().clear().type(pass);
  }

  clickRegister() {
    return this.getRegisterButton().click();
  }

  clickSignUp() {
    return this.getSignUpButton().click();
}

verifyRegistrationFormIsOpen() {
  this.getNameInput().should('be.visible');
  this.getLastNameInput().should('be.visible');
  this.getEmailInput().should('be.visible');
  this.getPasswordInput().should('be.visible');
  this.getRepeatPasswordInput().should('be.visible');
  this.getRegisterButton().should('be.visible');
}

verifyErrorMessage(text) {
  cy.contains(text).should('be.visible').and('contain', text);
}

verifyRegisterButtonIsDisabled() {
  this.getRegisterButton().should('be.disabled');
}

verifySignUpButtonNotExist() {
  this.getSignUpButton().should('not.exist');
}

openSignUpForm() {
  this.open();
  this.clickSignUp();
  this.verifyRegistrationFormIsOpen();
}

fillRegistrationForm(name, lastName, email, password) {
  this.typeName(name);
  this.typeLastName(lastName);
  this.typeEmail(email);
  this.typePassword(password);
  this.typeRepeatPassword(password);
}

}

export default new RegistrationPage();