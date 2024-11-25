describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(5) > .oxd-main-menu-item').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Leonardo')
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Alfonso')
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Lombana')
    cy.get('i.bi-caret-down-fill:nth-child(1)').click()
    cy.contains('.oxd-select-option', 'test').click()
    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('leonardo.lombana@hotmail.com')
    cy.get('.oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('3113211111')
    cy.get('.oxd-file-div').click()
    cy.get('.orangehrm-save-candidate-page-full-width > .oxd-input-group > :nth-child(2) > .oxd-input').type('Qa engineer, Testing, Software')
    cy.get('.oxd-textarea').type('I am ready to start to work')
    cy.get('.oxd-checkbox-input > .oxd-icon').click()
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-button--success').click()
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-button--success').click()
    cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('entrevista')
    cy.get('.oxd-autocomplete-text-input > input').type('manda akhil user')
    cy.contains('.oxd-autocomplete-dropdown', 'manda akhil user').should('be.visible').click()        
    cy.get('.oxd-date-wrapper').click()      
    cy.get('.oxd-date-wrapper').should('be.visible')
    cy.get('.oxd-date-wrapper').contains('25').should('be.visible').click()  
    cy.get('.oxd-time-input > .oxd-input').click()    
    cy.get('.oxd-time-hour-input-text').clear()
    cy.get('.oxd-time-hour-input-text').type('02')
    cy.get('.oxd-time-minute-input-text').clear()
    cy.get('.oxd-time-minute-input-text').type('10')
    cy.get('.oxd-time-period-input > :nth-child(2) > input').click()
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-button--success').click()
    cy.get('.oxd-button--secondary').click()
    cy.get('.orangehrm-recruitment-actions > :nth-child(3)').click()
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-button--success').click()
    cy.get('.oxd-button--secondary').click()
    cy.get(':nth-child(5) > .oxd-main-menu-item').click()
    cy.get('.div.oxd-table-header-cell:nth-child(3)').should('be.visible', 'have.text', 'Leonardo')

  })
})