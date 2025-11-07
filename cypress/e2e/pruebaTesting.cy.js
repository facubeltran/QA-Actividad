describe('Formulario de Registro', () => {
    beforeEach(() => {
        cy.visit('https://ticketazo.com.ar/auth/registerUser')
    })
    it('Completa todos los campos y presiona Registrar', () => {
        cy.log('Ingresando nombres, apellidos, celular y dni')
        cy.get('[data-cy="input-nombres"]').clear().type('Juan')
        cy.get('[data-cy="input-apellido"]').clear().type('Pérez')
        cy.get('[data-cy="input-telefono"]').clear().type('3511234567')
        cy.get('[data-cy="input-dni"]').clear().type('20268800')

        cy.log('Seleccionar provincia y localidad')
        cy.get('[data-cy="select-provincia"]').clear().type('Córdoba')
        cy.get('ul > li > span').contains('Córdoba').click()
        cy.get('[data-cy="select-localidad"]').clear().type('Córdoba')
        cy.get('ul > li > span').contains('Córdoba').click()


        cy.log('Ingresando fecha de nacimiento')
        cy.get('[data-cy="input-fecha-nacimiento"] [data-type="day"]').clear().type('15')
        cy.get('[data-cy="input-fecha-nacimiento"] [data-type="month"]').clear().type('08')
        cy.get('[data-cy="input-fecha-nacimiento"] [data-type="year"]').clear().type('1995')


        cy.log('Ingresando mail y confirmación')
        cy.get('[data-cy="input-email"]').clear().type('juan.perez90@example.com')
        cy.get('[data-cy="input-confirmar-email"]').clear().type('juan.perez90@example.com')

        cy.log('Ingresando contraseña y confirmación')
        cy.get('[data-cy="input-password"]').clear().type('P@ssw0rd123')
        cy.get('[data-cy="input-repetir-password"]').clear().type('P@ssw0rd123')


        cy.log('Enviar formulario')
        // cy.get('[data-cy="btn-registrarse"]').click().wait(2000)
    })

})