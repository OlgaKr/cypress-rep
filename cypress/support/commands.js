import RegistrationPage from '../pages/RegistrationPage';
import LoginPage from '../pages/LoginPage';
import SettingsPage from '../pages/SettingsPage';

Cypress.Commands.add('register', (name, lastName, email, password) => {
  RegistrationPage.fillRegistrationForm(name, lastName, email, password);
  RegistrationPage.clickRegister();
});

Cypress.Commands.add('login', (email, password) => {
  LoginPage.clickSignIn();
  LoginPage.typeEmail(email);
  LoginPage.typePassword(password);
  LoginPage.clickLogin();
});

Cypress.Commands.add('deleteAccount', () => {
  SettingsPage.goToSettings();
  SettingsPage.deleteAccount();
});