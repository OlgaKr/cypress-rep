import RegistrationPage from '../pages/RegistrationPage';
import LoginPage from '../pages/LoginPage';
import SettingsPage from '../pages/SettingsPage';
import userData from '../fixtures/userData.json';

describe('Registration form', () => {
  beforeEach(() => {
    RegistrationPage.openSignUpForm();
  });

  it('should show error for invalid name', () => {
   RegistrationPage.typeName('1').blur();

   RegistrationPage.verifyErrorMessage('Name is invalid');
   RegistrationPage.verifyErrorMessage('Name has to be from 2 to 20 characters long');
   RegistrationPage.verifyRegisterButtonIsDisabled();
   });

  it('should show error for invalid last name', () => {
   RegistrationPage.typeLastName('1').blur();

   RegistrationPage.verifyErrorMessage('Last name is invalid');
   RegistrationPage.verifyErrorMessage('Last name has to be from 2 to 20 characters long');
   RegistrationPage.verifyRegisterButtonIsDisabled();
   });

  it('should show error for invalid email', () => {
   RegistrationPage.typeEmail('test').blur();

   RegistrationPage.verifyErrorMessage('Email is incorrect');
   RegistrationPage.verifyRegisterButtonIsDisabled();
   });

  it('should show error for invalid password or password mismatch', () => {
   RegistrationPage.typePassword('123').blur();

   RegistrationPage.verifyErrorMessage(
    'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'
   );

   RegistrationPage.typePassword('Password123');
   RegistrationPage.typeRepeatPassword('Password321').blur();

   RegistrationPage.verifyErrorMessage('Passwords do not match');
   RegistrationPage.verifyRegisterButtonIsDisabled();
   });

  it('should register user with valid data and login with created credentials', () => {
   const email = `olga${Date.now()}@test.com`;

   cy.register(
    userData.validUser.name, 
    userData.validUser.lastName, 
    email, 
    userData.validUser.password);

    RegistrationPage.verifySignUpButtonNotExist();
    SettingsPage.logout();
    cy.login(email, userData.validUser.password);
    LoginPage.verifySignInButtonNotExist();
    cy.deleteAccount();
    });

});