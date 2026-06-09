import RegistrationPage from '../pages/RegistrationPage';

describe('Registration form', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('button', 'Sign up').click();
  });

it('should show error for invalid name', () => {
  cy.get(RegistrationPage.nameInput).type('1').blur();

  cy.contains('Name is invalid').should('be.visible');
  cy.contains('Name has to be from 2 to 20 characters long').should('be.visible');

  cy.contains('button', 'Register').should('be.disabled');
  });

it('should show error for invalid last name', () => {
  cy.get(RegistrationPage.lastNameInput).type('1').blur();

  cy.contains('Last name is invalid').should('be.visible');
  cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible');

  cy.contains('button', 'Register').should('be.disabled');
  });

it('should show error for invalid email', () => {
  cy.get(RegistrationPage.emailInput).type('test').blur();

  cy.contains('Email is incorrect').should('be.visible');

  cy.contains('button', 'Register').should('be.disabled');
  });

it('should show error for invalid password or password mismatch', () => {
  cy.get(RegistrationPage.passwordInput).type('123').blur();

  cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
  .should('be.visible');

  cy.get(RegistrationPage.passwordInput).clear().type('Password123');
  cy.get(RegistrationPage.repeatPasswordInput).type('Password321').blur();

  cy.contains('Passwords do not match').should('be.visible');

  cy.contains('button', 'Register').should('be.disabled');
  });

it('should register user with valid data and login with created credentials', () => {
  const email = `olga${Date.now()}@test.com`;
  const password = 'Password123';

  cy.register('Olga', 'Test', email, password);

  cy.contains('button', 'Sign up').should('not.exist');
  cy.contains('a', 'Log out').click();

  cy.login(email, password);

  cy.contains('button', 'Sign In').should('not.exist');

  cy.deleteAccount();
});
});