class SettingsPage {
  selectors = {
    settingsLink: 'a[href="/panel/settings"]:visible',
    logoutLink: 'a:contains("Log out")',
    removeAccountButton: 'button:contains("Remove my account")',
    modal: '.modal-content',
    confirmRemoveButton: 'button:contains("Remove")',
  };

  getSettingsLink() {
    return cy.get(this.selectors.settingsLink);
  }

  getLogoutLink() {
    return cy.contains('a', 'Log out');
  }

  getRemoveAccountButton() {
    return cy.get(this.selectors.removeAccountButton);
  }

  getModal() {
    return cy.get(this.selectors.modal);
  }

  getConfirmRemoveButton() {
    return cy.get(this.selectors.confirmRemoveButton);
  }

  goToSettings() {
    this.getSettingsLink().click();
  }

  logout() {
    this.getLogoutLink().click();
  }

  deleteAccount() {
    this.getRemoveAccountButton().scrollIntoView().click();

    this.getModal().within(() => {
      this.getConfirmRemoveButton().click();
    });
  }
}

export default new SettingsPage();