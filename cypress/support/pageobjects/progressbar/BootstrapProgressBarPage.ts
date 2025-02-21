class BootstrapProgressBarPage {
  /**
   * Method to check if the BootstrapProgressBarPage is visible
   */
  isReady() {
    cy.url().should(
      'eq',
      'https://demo.seleniumeasy.com/bootstrap-download-progress-demo.html'
    )
    cy.get('h3')
      .contains('Stylish progress bar demo for the automation')
      .should('be.visible')
  }
}

export default BootstrapProgressBarPage
