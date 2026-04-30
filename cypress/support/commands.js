// custom commands

Cypress.Commands.add('createExpense', (carId, expenseData) => {
  return cy.request('POST', '/api/expenses', {
    carId: carId,
    reportedAt: new Date().toISOString().split('T')[0],
    mileage: Number(expenseData.mileage),
    liters: Number(expenseData.liters),
    totalCost: Number(expenseData.cost),
    forceMileage: false
  });
});