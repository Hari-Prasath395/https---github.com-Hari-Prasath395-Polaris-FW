class Login {
  checkCardContent() {
    cy.get(".MuiCardContent-root.logincardcontnt").should("be.visible");
  }
  setUsername(username) {
    cy.get("#outlined-basic").type(username);
  }
  setPassword(password) {
    cy.get("#password").type(password);
  }
  clickLogin() {
    cy.get(
      "div[class='buttoncomponent-start undefined'] span[class='MuiButton-label']"
    ).click();
  }
  verifyLogin() {
    cy.url({ timeout: 20000 }).should(
      "eq",
      "https://polaris-qa-evp.eloci.us/main/devices"
    );
  }
}

export default Login;