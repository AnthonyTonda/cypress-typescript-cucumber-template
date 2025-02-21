class TableFilterPage {
  /**
   * Method to check if the TableFilterPage is visible
   */
  isReady() {
    cy.url().should(
      'eq',
      'https://demo.seleniumeasy.com/table-records-filter-demo.html'
    )
    cy.get('h2').contains('Table Filter Demo').should('be.visible')
  }
}

export default TableFilterPage
