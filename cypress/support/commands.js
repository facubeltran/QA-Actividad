// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('loginId',(nombre,apellido,telefono,dni) =>{
    
    cy.log('Ingresando nombres, apellidos, celular y dni')
    cy.get('[data-cy="input-nombres"]').clear().type(nombre)
    cy.get('[data-cy="input-apellido"]').clear().type(apellido)
    cy.get('[data-cy="input-telefono"]').clear().type(telefono)
    cy.get('[data-cy="input-dni"]').clear().type(dni)
})

Cypress.Commands.add('loginUbicacion',(provincia,localidad)=>{
    cy.log('Seleccionar provincia y localidad')
    cy.get('[data-cy="select-provincia"]').clear().type(provincia)
    cy.get('ul > li > span').contains('Córdoba').click()
    cy.get('[data-cy="select-localidad"]').clear().type(localidad)
    cy.get('ul > li > span').contains('Córdoba').click()
})

Cypress.Commands.add('loginBirth',(day,month,year)=>{
    cy.log('Ingresando fecha de nacimiento')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="day"]').clear().type(day)
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="month"]').clear().type(month)
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="year"]').clear().type(year)

})

Cypress.Commands.add('loginEmailPass',(email,pass)=>{
    cy.log('Ingresando mail y confirmación')
    cy.get('[data-cy="input-email"]').clear().type(email)
    cy.get('[data-cy="input-confirmar-email"]').clear().type(email)

    cy.log('Ingresando contraseña y confirmación')
    cy.get('[data-cy="input-password"]').clear().type(pass)
    cy.get('[data-cy="input-repetir-password"]').clear().type(pass)
})