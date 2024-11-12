import Login from "../../PageObjects/login";
import DevicePage from "../../PageObjects/devicePage";

describe("Login Test", () => {
  before(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      if (err.message.includes("The user is not authenticated")) {
        return false;
      }
    });
  });

  beforeEach(() => {
    // Load fixture data and set aliases
    cy.fixture("LoginQA").as("loginData");
    cy.fixture("AddDevice").as("deviceData");

    cy.fixture("LoginQA").then((data) => {
      cy.visit(Cypress.env("BASE_URL"));

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

  it("Should add a new device successfully", function() {
    const dp = new DevicePage();

    //  dp.FetchSerialNumbers();

    dp.verifyVisibilityOfAddDeviceButton();
    dp.clickAddDeviceButton();
    dp.verifyVisibilityOfXButton();
    dp.verifyVisibilityOfDownloadTemplate();
    dp.verifyVisibilityOfImportDeviceList();
    dp.EnterDeviceNameInAddDevicesTab(this.deviceData.deviceName);
    dp.EnterSerialNumberInDevicesTab(this.deviceData.serialNumber);
    dp.clickOnSaveButton();
  });

  it("Click on Done button without entering device name and device serial number- 2", function(){
    const dp = new DevicePage();
    dp.clickAddDeviceButton();
    dp.clickOnSaveButton();
    dp.verifyToastMsgWithoutAddingDataInAddDevicesTab();
    dp.clickXIconOfAddDevicesTab();
  });

  it.only("Enter only Device name and click on Save button- 3", function(){
    const dp = new DevicePage();
    dp.clickAddDeviceButton();
    dp.EnterDeviceNameInAddDevicesTab(this.deviceData.deviceName);
    dp.clickOnSaveButton();
    dp.verifyToastMsgWithoutEnteringSerialNumberInAddDevicesTab();
  });
});
