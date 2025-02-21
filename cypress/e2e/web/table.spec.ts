const env = Cypress.env();
import { qase } from 'cypress-qase-reporter/dist/mocha';
import HomePage from '../../support/pageobjects/HomePage';

describe('Table Tests', function () {
  const home = new HomePage();
  qase(
    [29],
    it('[29, WEB] should visit the web and click on the Table Pagination Link', function () {
      // home.visit();
      // home.isReady();
      //
      // const tablePagination = home.clickOnTablePaginationLinkHeader();
      // tablePagination.isReady();
        home.visit()
            .isReady()
            .clickOnTablePaginationLinkHeader()
            .isReady();
    })
  );

  qase(
    [30],
    it('[30, WEB] should visit the web and click on the Table Data Search Link', function () {
      // home.visit();
      // home.isReady();
      //
      // const tableDataSearch = home.clickOnTableDataSearchLinkHeader();
      // tableDataSearch.isReady();
        home.visit()
            .isReady()
            .clickOnTableDataSearchLinkHeader()
            .isReady();
    })
  );

  qase(
    [31],
    it('[31, WEB] should visit the web and click on the Table Filter Link', function () {
      // home.visit();
      // home.isReady();
      //
      // const tableFilter = home.clickOnTableFilterLinkHeader();
      // tableFilter.isReady();
        home.visit()
            .isReady()
            .clickOnTableFilterLinkHeader()
            .isReady();
    })
  );

  qase(
    [32],
    it('[32, WEB] should visit the web and click on the Table Sort & Search Link', function () {
      // home.visit();
      // home.isReady();
      //
      // const tableSortAndSearch = home.clickOnTableSortAndSearchLinkHeader();
      // tableSortAndSearch.isReady();
        home.visit()
            .isReady()
            .clickOnTableSortAndSearchLinkHeader()
            .isReady();
    })
  );

  qase(
    [33],
    it('[33, WEB] should visit the web and click on the Table Data Download Link', function () {
      // home.visit();
      // home.isReady();
      //
      // const tableDataDownload = home.clickOnTableDataDownloadLinkHeader();
      // tableDataDownload.isReady();
        home.visit()
            .isReady()
            .clickOnTableDataDownloadLinkHeader()
            .isReady();
    })
  );
});
