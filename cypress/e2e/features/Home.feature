Feature: Home

  Scenario: should visit the web and click on the Table Pagination Link
    Given i visit the website
    When i click on TablePaginationLinkHeader
    Then TablePaginationLinkHeader is rendered
