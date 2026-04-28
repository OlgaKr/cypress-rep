import BasePage from './BasePage';

class RegistrationPage extends BasePage {
  selectors = {
    nameInput: '#signupName',
    lastNameInput: '#signupLastName',
    emailInput: '#signupEmail',
    passwordInput: '#signupPassword',
    repeatPasswordInput: '#signupRepeatPassword',
    registerButton: 'button:contains("Register")',
    signUpButton: 'button:contains("Sign up")',
  };

  getNameInput() {
    return this.getElement(this.selectors.nameInput);
  }

  getLastNameInput() {
    return this.getElement(this.selectors.lastNameInput);
  }

  getEmailInput() {
    return this.getElement(this.selectors.emailInput);
  }

  getPasswordInput() {
    return this.getElement(this.selectors.passwordInput);
  }

  getRepeatPasswordInput() {
    return this.getElement(this.selectors.repeatPasswordInput);
  }

  getRegisterButton() {
    return this.getElement(this.selectors.registerButton);
  }

  getSignUpButton() {
    return this.getElement(this.selectors.signUpButton);
  }

  typeName(name) {
    return this.type(this.selectors.nameInput, name);
  }

  typeLastName(lastName) {
    return this.type(this.selectors.lastNameInput, lastName);
  }

  typeEmail(email) {
    return this.type(this.selectors.emailInput, email);
  }

  typePassword(password) {
    return this.type(this.selectors.passwordInput, password);
  }

  typeRepeatPassword(password) {
    return this.type(this.selectors.repeatPasswordInput, password);
  }

  clickRegister() {
    return this.click(this.selectors.registerButton);
  }

  clickSignUp() {
    return this.click(this.selectors.signUpButton);
  }

  verifyRegistrationFormIsOpen() {
    this.verifyVisible(this.selectors.nameInput);
    this.verifyVisible(this.selectors.lastNameInput);
    this.verifyVisible(this.selectors.emailInput);
    this.verifyVisible(this.selectors.passwordInput);
    this.verifyVisible(this.selectors.repeatPasswordInput);
    this.verifyVisible(this.selectors.registerButton);
  }

  verifyErrorMessage(text) {
    return cy.contains(text).should('be.visible').and('contain', text);
  }

  verifyRegisterButtonIsDisabled() {
    return this.verifyDisabled(this.selectors.registerButton);
  }

  verifySignUpButtonNotExist() {
    return this.verifyNotExist(this.selectors.signUpButton);
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

  register(name, lastName, email, password) {
    this.fillRegistrationForm(name, lastName, email, password);
    this.clickRegister();
}
}

export default new RegistrationPage();