class ContentPage {
    DragAndDropContent() {
        // Wait for the element to exist before interacting
        cy.get("tbody tr div[class='devices_autosizerlist__QxazO'] div div:nth-child(1) td:nth-child(1)", { timeout: 10000 }) // Extended timeout to handle dynamic loading
            .should('be.visible') // Ensure the element is visible before proceeding
            .drag(".headtext"); // Perform the drag action
    }
}

export default ContentPage;
