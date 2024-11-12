import Login from "../../PageObjects/login";

describe("Login Test", () => {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      if (err.message.includes("The user is not authenticated")) {
        return false;
      }
    });
  });

  it("Check login functionality", () => {
    // Load data from fixture file
    cy.fixture("LoginQA").then((data) => {
      cy.visit("https://polaris-qa-evp.eloci.us/");
      const ln = new Login();
      // Wait for the username field to be visible before interacting
      ln.checkCardContent();
      // Use fixture data for username and password
      ln.setUsername(data.username);
      ln.setPassword(data.password);
      ln.clickLogin();
      ln.verifyLogin();
      ln.clickSymbolForLogOut();
      ln.clickLogoutButton();
      cy.wait(2000);
    });
  });

  
});
