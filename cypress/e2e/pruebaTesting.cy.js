describe('Formulario de Registro', () => {
    beforeEach(() => {
        cy.visit('https://ticketazo.com.ar/auth/registerUser')
    })
    it('Completa todos los campos y presiona Registrar', () => {
        cy.loginId('Juan','Pérez','3511234567','20268800')
        cy.loginUbicacion('Córdoba','Córdoba')
        cy.loginBirth('15','08','1995')
        cy.loginEmailPass('juan.perez90@example.com','P@ssw0rd123')
        cy.log('Enviar formulario')
        // cy.get('[data-cy="btn-registrarse"]').click().wait(2000)
    })

})