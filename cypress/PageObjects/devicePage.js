class DevicePage {
  verifyVisibilityOfAddDeviceButton() {
    cy.get(
      "div[class='addbuttoncomponent-start undefined'] span[class='MuiButton-label']"
    ).should("be.visible");
  }

  clickAddDeviceButton() {
    cy.get(
      "div[class='addbuttoncomponent-start undefined'] span[class='MuiButton-label']"
    ).click();
  }

  verifyVisibilityOfXButton() {
    cy.get(".MuiSvgIcon-root.devdetailsclosecls").should("be.visible");
  }

  verifyVisibilityOfDownloadTemplate() {
    cy.get("a[download='AddDeviceTemplate.csv'] p").should("be.visible");
  }

  verifyVisibilityOfImportDeviceList() {
    cy.xpath("//input[@id='upload']")
      .should("exist")
      .and(($el) => {
        expect($el).to.have.css("opacity", "0");
      });
  }

  EnterDeviceNameInAddDevicesTab(deviceName) {
    cy.xpath(
      "//div[@data-cy='addDevice-input-name']//div[@class='MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl MuiInputBase-adornedEnd MuiInputBase-marginDense MuiInput-marginDense']//input[@id='outlined-basic']"
    ).type(deviceName);
  }

  EnterSerialNumberInDevicesTab(serialNumber) {
    cy.xpath(
      "//div[@data-cy='addDevice-input-serial']//div[@class='MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl MuiInputBase-adornedEnd MuiInputBase-marginDense MuiInput-marginDense']//input[@id='outlined-basic']"
    ).type(serialNumber);
  }

  clickOnSaveButton() {
    cy.get("div[class='devicedialogright'] button[type='button']").click();
  }

  verfiyToastMessage() {
    cy.get(
      "div[class='mainbelowsection'] div div[class='notifiactionmessage-component subaccountcreatedcls undefined']"
    ).should("have.text", "Finished adding devices");
  }

//   FetchSerialNumbers() {
//     const serialNumbersSet = new Set();  // To track unique serial numbers
  
//     // Iterate over all rows in the table and target only the 3rd column (Serial Number)
//     cy.get("div[class='devicesbottom'] table>tbody>tr").each(($row) => {
//       cy.wrap($row).within(() => {
//         // Get the 3rd column (Serial Number) of each row using eq(2) (index 2 for the 3rd column)
//         cy.get("td").each(2).then(($col) => {
//           const serialNumber = $col.text().trim();  // Extract and trim the text
  
//           // Check if the serial number is already in the set
//           if (serialNumbersSet.has(serialNumber)) {
//             cy.log("Duplicate Serial Number found: " + serialNumber);
//           } else {
//             // Add the serial number to the set if it's unique
//             serialNumbersSet.add(serialNumber);
//             cy.log("Serial Number: " + serialNumber);  // Log the unique serial number
//           }
//         });
//       });
//     });
//   }
// FetchSerialNumbers() {
//     const serialNumbersSet = new Set();  // To track unique serial numbers
  
//     // Iterate over all rows in the table and target only the 3rd column (Serial Number)
//     cy.get("div[class='devicesbottom'] table>tbody>tr").each(($row) => {
//       // Get the 3rd column (Serial Number) of each row using eq(2) (index 2 for the 3rd column)
//       cy.wrap($row).find("td").eq(2).then(($col) => {
//         const serialNumber = $col.text().trim();  // Extract and trim the text
  
//         // Check if the serial number is already in the set
//         if (serialNumbersSet.has(serialNumber)) {
//           cy.log("Duplicate Serial Number found: " + serialNumber);
//         } else {
//           // Add the serial number to the set if it's unique
//           serialNumbersSet.add(serialNumber);
//           cy.log("Serial Number: " + serialNumber);  // Log the unique serial number
//         }
//       });
//     });
//   }
  
// FetchSerialNumbers() {
//     const serialNumbersSet = new Set();  // To track unique serial numbers
  
//     // Iterate over all rows in the table and target only the 3rd column (Serial Number)
//     cy.get("div[class='devicesbottom'] table>tbody>tr").each(($row) => {
//       // Use nth-child(3) to directly select the third column in each row
//       cy.wrap($row).find("td:nth-child(3)").then(($col) => {
//         const serialNumber = $col.text().trim();  // Extract and trim the text
  
//         // Check if the serial number is already in the set
//         if (serialNumbersSet.has(serialNumber)) {
//           cy.log("Duplicate Serial Number found: " + serialNumber);
//         } else {
//           // Add the serial number to the set if it's unique
//           serialNumbersSet.add(serialNumber);
//           cy.log("Serial Number: " + serialNumber);  // Log the unique serial number
//         }
//       });
//     });
//   }
  
  

  verifyToastMsgWithoutAddingDataInAddDevicesTab(){
    cy.get("div[class='mainbelowsection'] div div[class='notifiactionmessage-component subaccountcreatedcls undefined']").should("have.text","Please enter valid details!")
  }

  clickXIconOfAddDevicesTab(){
    cy.get(".MuiSvgIcon-root.devdetailsclosecls").click();
  }

  verifyToastMsgWithoutEnteringSerialNumberInAddDevicesTab(){
    cy.get("div[class='mainbelowsection'] div div[class='notifiactionmessage-component subaccountcreatedcls undefined']")
    .should("have.text","Enter valid details or delete the row")
  }
  
  
  
  
  
  
  
  
  
  
  }


export default DevicePage;
