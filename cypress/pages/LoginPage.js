class LoginPage {
  selectors = {
    signInButton: 'button:contains("Sign In")',
    emailInput: '#signinEmail',
    passwordInput: '#signinPassword',
    loginButton: 'button:contains("Login")',
  };

  getSignInButton() {
    return cy.get(this.selectors.signInButton);
  }

  getEmailInput() {
    return cy.get(this.selectors.emailInput);
  }

  getPasswordInput() {
    return cy.get(this.selectors.passwordInput);
  }

  getLoginButton() {
    return cy.get(this.selectors.loginButton);
  }

  clickSignIn() {
    this.getSignInButton().click();
  }

  typeEmail(email) {
    this.getEmailInput().clear().type(email);
  }

  typePassword(password) {
    this.getPasswordInput().clear().type(password);
  }

  clickLogin() {
    this.getLoginButton().click();
  }

  verifySignInButtonNotExist() {
  this.getSignInButton().should('not.exist');
}
}

export default new LoginPage();