import LoginPage from '../pages/LoginPage';
import GaragePage from '../pages/GaragePage';
import ExpensesPage from '../pages/ExpensesPage';
import SettingsPage from '../pages/SettingsPage';
import testData from '../fixtures/testData.json';

describe('Garage and fuel expenses', () => {
  beforeEach(() => {
    LoginPage.openAndLogin();
  });

  afterEach(() => {
    GaragePage.openGarage();
    GaragePage.removeCarByName(testData.car.fullName);
    SettingsPage.logout();
  });

  it('should add car to garage', () => {
    GaragePage.openGarage();

    GaragePage.addCar(
      testData.car.brand,
      testData.car.model,
      testData.car.mileage
    );

    GaragePage.verifyCarIsAdded(testData.car.fullName);
  });

  it('should add fuel expense to car', () => {
    GaragePage.openGarage();

    GaragePage.addCar(
      testData.car.brand,
      testData.car.model,
      testData.car.mileage
    );

    ExpensesPage.openExpenses();

    ExpensesPage.addExpense(
      testData.car.fullName,
      testData.expense.mileage,
      testData.expense.liters,
      testData.expense.cost
    );

    ExpensesPage.verifyExpenseIsAdded(testData.expense.mileage);
  });
});