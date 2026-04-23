describe('QAuto Header and Footer elements', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Find Sign up button in Header', () => {
   cy.contains('button', 'Sign up')
    .should('be.visible')
    .and('contain', 'Sign up');
});

  it('Find navigation elements in Header', () => {
   cy.get('.header_nav').within(() => {
    cy.contains('a', 'Home').should('be.visible');
    cy.contains('button', 'About').should('be.visible');
    cy.contains('button', 'Contacts').should('be.visible');
  });
});

  it('Find login buttons in Header', () => {
   cy.get('.header_right').within(() => {
    cy.contains('button', 'Guest log in').should('be.visible');
    cy.contains('button', 'Sign In').should('be.visible');
  });
});

  it('Find all elements in Footer', () => {
   cy.get('.contacts_socials a')
      .should('have.length', 5)
      .each(($el) => {
      cy.wrap($el).should('be.visible');
      });

  cy.get('.contacts_link')
      .should('have.length', 2)
      .each(($el) => {
      cy.wrap($el).should('be.visible');
      });
  });
});
//test commit