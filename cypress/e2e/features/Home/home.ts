import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../support/pageobjects/HomePage";
import TablePaginationPage from "../../../support/pageobjects/table/TablePaginationPage";

let home = new HomePage();
let tablePagination = new TablePaginationPage();

Given("i visit the website", () => {
    home = home.visit().isReady();
});

When("i click on TablePaginationLinkHeader", () => {
    tablePagination = home.clickOnTablePaginationLinkHeader()
});

Then("TablePaginationLinkHeader is rendered", () => {
    tablePagination.isReady()
});
