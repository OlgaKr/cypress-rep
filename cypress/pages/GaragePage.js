import BasePage from './BasePage';

class GaragePage extends BasePage {
  selectors = {
    addCarButton: 'button:contains("Add car")',
    brandSelect: '#addCarBrand',
    modelSelect: '#addCarModel',
    mileageInput: '#addCarMileage',
    addButton: 'app-add-car-modal button.btn.btn-primary',
    carEditButton: '.car_edit',
    removeCarButton: 'button:contains("Remove car")',
    confirmRemoveButton: 'button.btn.btn-danger:contains("Remove")',
    carItem: '.car-item',
  };

  getAddCarButton() {
    return this.getElement(this.selectors.addCarButton);
  }

  getBrandSelect() {
    return this.getElement(this.selectors.brandSelect);
  }

  getModelSelect() {
    return this.getElement(this.selectors.modelSelect);
  }

  getMileageInput() {
    return this.getElement(this.selectors.mileageInput);
  }

  getAddButton() {
    return this.getElement(this.selectors.addButton);
  }

  openGarage() {
    return cy.contains('a', 'Garage').click();
  }

  clickAddCar() {
    return this.click(this.selectors.addCarButton);
  }

  selectBrand(value) {
    return this.getBrandSelect().select(value);
  }

  selectModel(value) {
    return this.getModelSelect().select(value);
  }

  typeMileage(value) {
    return this.type(this.selectors.mileageInput, value);
  }

  clickAdd() {
    return this.click(this.selectors.addButton);
  }

  addCar(brand, model, mileage) {
    this.clickAddCar();
    this.selectBrand(brand);
    this.selectModel(model);
    this.typeMileage(mileage);
    this.clickAdd();
  }

  addCarAndGetId(brand, model, mileage) {
  this.openGarage();

  this.addCar(brand, model, mileage);

  return cy.wait('@createCar').then((interception) => {
    expect(interception.response.statusCode).to.eq(201);

    return interception.response.body.data.id;
  });
}

  deleteCarById(carId) {
  return cy.request({
    method: 'DELETE',
    url: `/api/cars/${carId}`,
    failOnStatusCode: false,
  });
}

  clickRemoveCar() {
    return this.click(this.selectors.removeCarButton);
  }

  confirmRemove() {
    return this.click(this.selectors.confirmRemoveButton);
  }

  removeCarByName(carName) {
    cy.contains(this.selectors.carItem, carName, { timeout: 10000 })
      .should('be.visible')
      .within(() => {
        cy.get(this.selectors.carEditButton).click();
      });

    this.clickRemoveCar();
    this.confirmRemove();

    cy.contains(this.selectors.carItem, carName).should('not.exist');
  }

  verifyCarIsAdded(carName) {
    return cy.contains(this.selectors.carItem, carName).should('be.visible');
  }
}

export default new GaragePage();