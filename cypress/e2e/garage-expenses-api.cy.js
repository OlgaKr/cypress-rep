import LoginPage from '../pages/LoginPage';
import GaragePage from '../pages/GaragePage';
import ExpensesPage from '../pages/ExpensesPage';
import SettingsPage from '../pages/SettingsPage';
import testData from '../fixtures/testData.json';

describe('Garage and fuel expenses', () => {
  let createdCarId;

  beforeEach(() => {
    createdCarId = null;
    LoginPage.openAndLogin();

    cy.intercept('POST', '/api/cars').as('createCar');
  });

  afterEach(() => {
  if (createdCarId) {
    GaragePage.deleteCarById(createdCarId);
  }

  SettingsPage.logout();
});

  const addCarAndSaveId = () => {
  return GaragePage.addCarAndGetId(
    testData.car.brand,
    testData.car.model,
    testData.car.mileage
    ).then((carId) => {
    createdCarId = carId;
  });
  };

  it('should add car to garage', () => {
    addCarAndSaveId();

    GaragePage.verifyCarIsAdded(testData.car.fullName);
  });

  it('should find created car in cars list via API', () => {
    addCarAndSaveId();

    cy.request('GET', '/api/cars').then((response) => {
      expect(response.status).to.eq(200);

      const createdCar = response.body.data.find((car) => car.id === createdCarId);

      expect(createdCar).to.exist;
      expect(createdCar.brand).to.eq(testData.car.brand);
      expect(createdCar.model).to.eq(testData.car.model);
      expect(createdCar.initialMileage).to.eq(Number(testData.car.mileage));
    });
  });

  it('should create expense via API', () => {
  addCarAndSaveId().then(() => {
    cy.createExpense(createdCarId, testData.expense).then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body.data.carId).to.eq(createdCarId);
      expect(response.body.data.mileage).to.eq(Number(testData.expense.mileage));
      expect(response.body.data.liters).to.eq(Number(testData.expense.liters));
      expect(response.body.data.totalCost).to.eq(Number(testData.expense.cost));
    });
  });
});

  it('should show created expense in UI', () => {
  addCarAndSaveId().then(() => {
    cy.createExpense(createdCarId, testData.expense).then((response) => {
      expect(response.status).to.eq(200);
    });

    ExpensesPage.openExpenses();
    ExpensesPage.verifyExpenseIsAdded(testData.expense.mileage);
  });
});

});