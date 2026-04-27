import BasePage from './BasePage';

class ExpensesPage extends BasePage {
  selectors = {
    addExpenseButton: 'button:contains("Add an expense")',
    vehicleSelect: '#addExpenseCar',
    mileageInput: '#addExpenseMileage',
    litersInput: '#addExpenseLiters',
    totalCostInput: '#addExpenseTotalCost',
    addButton: 'app-add-expense-modal button.btn.btn-primary',
    expenseRow: 'tbody tr',
  };

  openExpenses() {
    return cy.get('a[href="/panel/expenses"]:visible').first().click();
  }

  clickAddExpense() {
    return this.click(this.selectors.addExpenseButton);
  }

  selectVehicle(value) {
    return this.getElement(this.selectors.vehicleSelect).select(value);
  }

  typeMileage(mileage) {
    return this.type(this.selectors.mileageInput, mileage);
  }

  typeLiters(liters) {
    return this.type(this.selectors.litersInput, liters);
  }

  typeTotalCost(cost) {
    return this.type(this.selectors.totalCostInput, cost);
  }

  clickAdd() {
    return this.click(this.selectors.addButton);
  }

  addExpense(vehicle, mileage, liters, cost) {
    this.clickAddExpense();
    this.selectVehicle(vehicle);
    this.typeMileage(mileage);
    this.typeLiters(liters);
    this.typeTotalCost(cost);
    this.clickAdd();
  }

  verifyExpenseIsAdded(mileage) {
    return cy.contains(this.selectors.expenseRow, mileage).should('be.visible');
  }
}

export default new ExpensesPage();