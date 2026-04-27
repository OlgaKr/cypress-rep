import BasePage from './BasePage';

class LoginPage extends BasePage {
  selectors = {
    signInButton: 'button:contains("Sign In")',
    emailInput: '#signinEmail',
    passwordInput: '#signinPassword',
    loginButton: 'button:contains("Login")',
  };

  getSignInButton() {
    return this.getElement(this.selectors.signInButton);
  }

  getEmailInput() {
    return this.getElement(this.selectors.emailInput);
  }

  getPasswordInput() {
    return this.getElement(this.selectors.passwordInput);
  }

  getLoginButton() {
    return this.getElement(this.selectors.loginButton);
  }

  clickSignIn() {
    return this.click(this.selectors.signInButton);
  }

  typeEmail(email) {
    return this.type(this.selectors.emailInput, email);
  }

  typePassword(password) {
    return this.type(this.selectors.passwordInput, password);
  }

  clickLogin() {
    return this.click(this.selectors.loginButton);
  }

  verifySignInButtonNotExist() {
    return this.verifyNotExist(this.selectors.signInButton);
  }

  login(email, password) {
    this.clickSignIn();
    this.typeEmail(email);
    this.typePassword(password);
    return this.clickLogin();
  }

 openAndLogin() {
   this.open();
   this.login(
    Cypress.env('email'),
    Cypress.env('password')
  );
  }
}

export default new LoginPage();