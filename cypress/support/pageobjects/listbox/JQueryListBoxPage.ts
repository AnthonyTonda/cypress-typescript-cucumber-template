class JQueryListBoxPage {
  /**
   * Method to check if the JQueryListBoxPage is visible
   */
  isReady() {
    cy.url().should(
      'eq',
      'https://demo.seleniumeasy.com/jquery-dual-list-box-demo.html'
    )
    cy.get('h2').contains('JQuery Dual List Box Demo').should('be.visible')
  }
}

export default JQueryListBoxPage
