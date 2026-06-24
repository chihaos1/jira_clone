import { getStoredAuthUser } from '../../support/utils';

describe('Issue Create', () => {
  let authUser;

  before(() => {
    authUser = getStoredAuthUser();
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the issue creation modal', () => {
    cy.get('[data-testid="modal:issue-create"]').should('not.exist');
    cy.get('[data-testid="icon:plus"]').click();
    cy.get('[data-testid="modal:issue-create"]').should('be.visible');
  });

  it('should validate that title is required', () => {
    cy.get('[data-testid="icon:plus"]').click();
    cy.get('[data-testid="modal:issue-create"]').within(() => {
      cy.get('button[type="submit"]').click();
      cy.get('[data-testid="form-field:title"]').should(
        'contain',
        'Title is required',
      );
    });
  });

  it('should enforce a 100 character limit on the issue title', () => {
    const longTitle = 'A'.repeat(110);
    const expectedTitle = 'A'.repeat(100);

    cy.get('[data-testid="icon:plus"]').click();
    cy.get('[data-testid="modal:issue-create"]').within(() => {
      cy.get('input[name="title"]')
        .type(longTitle)
        .should('have.value', expectedTitle);
    });
  });

  it('should show a character counter on the issue title input', () => {
    cy.get('[data-testid="icon:plus"]').click();
    cy.get('[data-testid="modal:issue-create"]').within(() => {
      cy.get('input[name="title"]').type('Hello');
      cy.get('[data-testid="title-char-counter"]').should(
        'contain',
        '95 / 100 characters remaining',
      );
    });
  });
});
