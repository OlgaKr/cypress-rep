describe('Google tests', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('should type into search field', () => {
    cy.get('textarea[name="q"]').should('be.visible');
    cy.get('textarea[name="q"]').type('Hello Cypress!');
  });

  it('should search and show results', () => {
    cy.get('textarea[name="q"]').type('Cypress testing{enter}');
    cy.url().should('include', 'Cypress+testing');
  });

});