import Login from "../../PageObjects/login";
import DevicePage from "../../PageObjects/devicePage"

describe("Login Test", () => {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      if (err.message.includes("The user is not authenticated")) {
        return false;
      }
    });
  });

  beforeEach(() => {
    cy.fixture("LoginQA").then((data) => {
      cy.visit("https://polaris-qa-evp.eloci.us/");

      const ln = new Login();
      // Wait for the username field to be visible before interacting
      ln.checkCardContent();
      // Use fixture data for username and password
      ln.setUsername(data.username);
      ln.setPassword(data.password);
      ln.clickLogin();
      // Verify successful login by checking a specific element on the next page
      ln.verifyLogin();
    });
  });

  it("Check Add device functionality", () => {
    const dp = new DevicePage();
   
     dp.FetchSerialNumbers();
    
    // dp.verifyVisibilityOfAddDeviceButton();
    // dp.clickAddDeviceButton();
    // dp.verifyVisibilityOfXButton();
    // dp.verifyVisibilityOfDownloadTemplate();
    // dp.verifyVisibilityOfImportDeviceList();

    // cy.fixture("AddDevice").then((data)=>{

    //   dp.EnterDeviceNameInAddDevicesTab(data.deviceName);
    //   dp.EnterSerialNumberInDevicesTab(data.serialNumber);
    //   dp.clickOnSaveButton();
    //   dp.verfiyToastMessage();
    // })
    
  });
});


