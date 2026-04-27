import BasePage from './BasePage';

class SettingsPage extends BasePage {
  selectors = {
    settingsLink: 'a[href="/panel/settings"]:visible',
    logoutLink: 'a:contains("Log out")',
    removeAccountButton: 'button:contains("Remove my account")',
    modal: '.modal-content',
    confirmRemoveButton: 'button:contains("Remove")',
  };

  getSettingsLink() {
    return this.getElement(this.selectors.settingsLink);
  }

  getLogoutLink() {
    return this.getElement(this.selectors.logoutLink);
  }

  getRemoveAccountButton() {
    return this.getElement(this.selectors.removeAccountButton);
  }

  getModal() {
    return this.getElement(this.selectors.modal);
  }

  getConfirmRemoveButton() {
    return this.getElement(this.selectors.confirmRemoveButton);
  }

  goToSettings() {
    return this.click(this.selectors.settingsLink);
  }

  logout() {
    return this.click(this.selectors.logoutLink);
  }

  deleteAccount() {
    this.goToSettings();
    this.getRemoveAccountButton().scrollIntoView().click();
    this.getModal().within(() => {
    this.click(this.selectors.confirmRemoveButton);
  });
}
}

export default new SettingsPage();