import Login from "../../PageObjects/login";
import Content from "../../PageObjects/contentPage";
import '@4tw/cypress-drag-drop';


describe("Login Test", () => {
  before(() => {
    // Handle uncaught exceptions
    Cypress.on("uncaught:exception", (err, runnable) => {
      // Ignore specific error messages to prevent test failure
      if (err.message.includes("The user is not authenticated")) {
        return false;
      }
    });
  });

  beforeEach(function () {
    // Load fixture data and set aliases
    cy.fixture("LoginQA").as("loginData");
  });

  it("should log in successfully", function () {
    // Get the login data from fixture
    const { username, password } = this.loginData;

    const ln = new Login();
    
    // Visit the base URL from environment variables
    cy.visit(Cypress.env("BASE_URL"));

    // Wait for the username field to be visible and interact with it
    // cy.wait(5000);
    // ln.checkCardContent();
    
    // Use fixture data for username and password
    ln.setUsername(username);
    ln.setPassword(password);
    ln.clickLogin();

    // Verify login by checking a specific element on the next page
    ln.verifyLogin();

    cy.get('tbody div:nth-child(2) td:nth-child(1)',{timeout:5000}).drag(".textPara",{force:true});
    ln.clickSymbolForLogOut();
    ln.clickLogoutButton();
  });

//   it("Drag and Drop Connect", function () {
//     const CN = new Content();
//     CN.DragAndDropContent();
   
//   });





});
