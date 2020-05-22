describe("Form input", () => {
  it("can navigate to the site", () => {
    cy.visit("http://localhost:3000/pizzaForm");
  });

  it("can add name to the input box", () => {
    cy.get('input[name="name"]')
      .type("adriana")
      .should("have.value", "adriana");
  });
  it("can select on topping", () => {
    cy.get('input[name="olives"]').check().should("be.checked");
  });
  it("can select another topping", () => {
    cy.get('input[name="chorizo"]').check().should("be.checked");
  });
  it("can submit the form", () => {
    cy.get("button").click();
  });
});
