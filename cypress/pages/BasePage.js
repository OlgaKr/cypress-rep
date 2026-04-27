class BasePage {
  open(path = '/') {
    return cy.visit(path);
  }

  getElement(selector) {
    return cy.get(selector);
  }

  click(selector) {
    return this.getElement(selector).click();
  }

  type(selector, value) {
    return this.getElement(selector).clear().type(value);
  }

  verifyVisible(selector) {
    return this.getElement(selector).should('be.visible');
  }

  verifyNotExist(selector) {
    return this.getElement(selector).should('not.exist');
  }

  verifyDisabled(selector) {
    return this.getElement(selector).should('be.disabled');
  }
}

export default BasePage;