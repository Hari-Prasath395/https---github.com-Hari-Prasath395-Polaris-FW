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
    cy.fixture("TagName").as("tagname");

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

  it.skip("Click on Done button without entering device name and device serial number- 2", function(){
    const dp = new DevicePage();
    dp.clickAddDeviceButton();
    dp.clickOnSaveButton();
    dp.verifyToastMsgWithoutAddingDataInAddDevicesTab();
    dp.clickXIconOfAddDevicesTab();
  });

  it("Enter only Device name and click on Save button- 3", function(){
    const dp = new DevicePage();
    dp.clickAddDeviceButton();
    dp.EnterDeviceNameInAddDevicesTab(this.deviceData.deviceName);
    dp.clickOnSaveButton();
    dp.verifyToastMsgWithoutEnteringSerialNumberInAddDevicesTab();
  });

  it("Enter only serial and click on Save button- 3", function(){
    const dp = new DevicePage();

    function generateRandomSerialNumber() {
      const prefix = "B";
      const randomNumber = Math.floor(100000000 + Math.random() * 900000000); // Generates a 9-digit random number
      return `${prefix}${randomNumber}`;
    }
    const serialNumber = generateRandomSerialNumber();
    dp.clickAddDeviceButton();
    dp.EnterSerialNumberInDevicesTab(serialNumber);
    dp.clickOnSaveButton();
    dp.verfiyToastMessage();
  });

  it.skip("Dynamic Device Table", function () {
    // Wait for the table to load
    cy.get("div[class='devicesbottom'] table>tbody>tr", { timeout: 10000 }) // Increase timeout to 10 seconds
      .should("exist") // Ensure the rows exist
      .each(($row, rowIndex) => {
        cy.wrap($row).within(() => {
          cy.get("td").each(($col, colIndex, $cols) => {
            const cellText = Cypress.$($col).text().trim() || "NA"; // Extract and trim cell text or set "NA" for empty cells
            const reverseColIndex = $cols.length - colIndex - 1; // Calculate reverse column index
            cy.log(`Row ${rowIndex + 1}, Column ${reverseColIndex + 1}: ${cellText}`); // Log in Cypress UI
            console.log(`Row ${rowIndex + 1}, Column ${reverseColIndex + 1}: ${cellText}`); // Log in browser console
          });
        });
      });
  });

  it("Add Tags in the device page",function(){
    const dp = new DevicePage();
    dp.clickOnPlusIconToAddTag();
    dp.enterTagName(this.tagname.TagName);
    dp.clickSaveBtnOfAddTag();
  })

  it("Verify cancel button of Add tags in device page",function(){
    const dp = new DevicePage();
    dp.clickOnPlusIconToAddTag();
    dp.clickCancelBtnOfAddTag();
  })

  it("Verify X icon of Add tags in device page",function(){
    const dp = new DevicePage();
    dp.clickOnPlusIconToAddTag();
    dp.clickOnXIconOfAddTagTab();
  })

  it("Enter the same tag name that exists already ,tag already exists pop-up should appear",function(){
    const dp = new DevicePage();
    dp.clickOnPlusIconToAddTag();
    dp.enterTagName(this.tagname.TagName);
    dp.clickSaveBtnOfAddTag();
    dp.validateToastMessageOfAlreadyexistsTagname();
  })

  it("Check the visibility of deployment icon in the left hand side bar",function(){
    const dp = new DevicePage();
    dp.VisibilityOfDeploymentIcon();
  })

  it.only("Check the visibility of devices icon in the left hand side bar",function(){
    const dp = new DevicePage();
    dp.VisibilityOfDevicesIcon();
  })




  
  

  
  
  
  
  
  


});
