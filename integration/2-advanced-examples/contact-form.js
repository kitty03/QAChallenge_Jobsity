/// <reference types="Cypress" />

describe('Automation - QA Challenge Exercise 2', function() 
{    
    it('Contact Form Automation-Using Customer service drop-down',function() 
    {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get('select').select('Customer service')
        cy.get('#email').should('have.id','email').type('kathealba19@gmail.com')
        cy.get('#id_order').should('have.id','id_order').type('AE210')
        cy.get('#message').type('dsfgdf')
        const filepath = 'images/download.png'
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('.filename').contains('download.png')
        cy.contains('Send').click()
    })

    it('Contact Form Automation-Using Webmaster drop-down',function() 
    {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get('select').select('Webmaster')
        cy.get('#email').should('have.id','email').type('kathealba19@gmail.com')
        cy.get('#id_order').should('have.id','id_order').type('AE210')
        cy.get('#message').type('dsfgdf')
        const filepath = 'images/download.png'
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('.filename').contains('download.png')
        cy.contains('Send').click()
    })
    it('Contact Form Automation-Using default drop-down',function() 
    {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get('select').select('-- Choose --')
        cy.get('#email').should('have.id','email').type('kathealba19@gmail.com')
        cy.get('#id_order').should('have.id','id_order').type('AE210')
        cy.get('#message').type('dsfgdf')
        const filepath = 'images/download.png'
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('.filename').contains('download.png')
        cy.contains('Send').click()
    })

    it('Contact Form Automation-Customer service drop down and email blank space',function() 
    {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get('select').select('Customer service')
        cy.get('#email').should('have.id','email').type(' ')
        cy.get('#id_order').should('have.id','id_order').type('AE210')
        cy.get('#message').type('dsfgdf')
        const filepath = 'images/download.png'
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('.filename').contains('download.png')
        cy.contains('Send').click()
    })
    it('Contact Form Automation-Webmaster drop down and email blank space',function() 
    {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get('select').select('Webmaster')
        cy.get('#email').should('have.id','email').type(' ')
        cy.get('#id_order').should('have.id','id_order').type('AE210')
        cy.get('#message').type('dsfgdf')
        const filepath = 'images/download.png'
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('.filename').contains('download.png')
        cy.contains('Send').click()
    })
    it('Contact Form Automation- Default drop-down and email blank space',function() 
    {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get('select').select('-- Choose --')
        cy.get('#email').should('have.id','email').type(' ')
        cy.get('#id_order').should('have.id','id_order').type('AE210')
        cy.get('#message').type('dsfgdf')
        const filepath = 'images/download.png'
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('.filename').contains('download.png')
        cy.contains('Send').click()


    })

    it('Contact Form Automation- Default drop-down and order reference blank space',function() 
    {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get('select').select('-- Choose --')
        cy.get('#email').should('have.id','email').type('kathealba19@gmail.com')
        cy.get('#id_order').should('have.id','id_order').type(' ')
        cy.get('#message').type('dsfgdf')
        const filepath = 'images/download.png'
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('.filename').contains('download.png')
        cy.contains('Send').click()

    })
    it('Contact Form Automation- Webmaster drop-down and order reference blank space',function() 
    {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get('select').select('Webmaster')
        cy.get('#email').should('have.id','email').type('kathealba19@gmail.com')
        cy.get('#id_order').should('have.id','id_order').type(' ')
        cy.get('#message').type('dsfgdf')
        const filepath = 'images/download.png'
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('.filename').contains('download.png')
        cy.contains('Send').click()

    })
    it('Contact Form Automation- Customer service drop-down and order reference blank space',function() 
    {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get('select').select('Customer service')
        cy.get('#email').should('have.id','email').type('kathealba19@gmail.com')
        cy.get('#id_order').should('have.id','id_order').type(' ')
        cy.get('#message').type('dsfgdf')
        const filepath = 'images/download.png'
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('.filename').contains('download.png')
        cy.contains('Send').click()

    })
    it('Contact Form Automation- Customer service drop-down and message blank space',function() 
    {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get('select').select('Customer service')
        cy.get('#email').should('have.id','email').type('kathealba19@gmail.com')
        cy.get('#id_order').should('have.id','id_order').type('A123')
        cy.get('#message').type(' ')
        const filepath = 'images/download.png'
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('.filename').contains('download.png')
        cy.contains('Send').click()
    })
    it('Contact Form Automation- Webmaster drop-down and message blank space',function() 
    {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get('select').select('Webmaster')
        cy.get('#email').should('have.id','email').type('kathealba19@gmail.com')
        cy.get('#id_order').should('have.id','id_order').type('A123')
        cy.get('#message').type(' ')
        const filepath = 'images/download.png'
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('.filename').contains('download.png')
        cy.contains('Send').click()
    })
    it('Contact Form Automation- Default drop-down and message blank space',function() 
    {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get('select').select('-- Choose --')
        cy.get('#email').should('have.id','email').type('kathealba19@gmail.com')
        cy.get('#id_order').should('have.id','id_order').type('A123')
        cy.get('#message').type(' ')
        const filepath = 'images/download.png'
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('.filename').contains('download.png')
        cy.contains('Send').click()
    })
    it('Contact Form Automation- Default drop-down and email empty ',function() 
    {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get('select').select('-- Choose --')
        cy.get('#id_order').should('have.id','id_order').type('A123')
        cy.get('#message').type('hello')
        const filepath = 'images/download.png'
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('.filename').contains('download.png')
        cy.contains('Send').click()
    })
    it('Contact Form Automation- Webmaster drop-down and email empty ',function() 
    {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get('select').select('Webmaster')
        cy.get('#id_order').should('have.id','id_order').type('A123')
        cy.get('#message').type('hello')
        const filepath = 'images/download.png'
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('.filename').contains('download.png')
        cy.contains('Send').click()
    })
    it('Contact Form Automation- Customer service drop-down and email empty ',function() 
    {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get('select').select('Customer service')
        cy.get('#id_order').should('have.id','id_order').type('A123')
        cy.get('#message').type('hello')
        const filepath = 'images/download.png'
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('.filename').contains('download.png')
        cy.contains('Send').click()
    })
    it('Contact Form Automation- Customer service drop-down and order reference field empty ',function() 
    {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get('select').select('Customer service')
        cy.get('#email').should('have.id','email').type('kathealba19@gmail.com')
        cy.get('#message').type('hello')
        const filepath = 'images/download.png'
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('.filename').contains('download.png')
        cy.contains('Send').click()
    })
    it('Contact Form Automation- Webmaster drop-down and order reference field empty ',function() 
    {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get('select').select('Webmaster')
        cy.get('#email').should('have.id','email').type('kathealba19@gmail.com')
        cy.get('#message').type('hello')
        const filepath = 'images/download.png'
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('.filename').contains('download.png')
        cy.contains('Send').click()
    })
    
    it('Contact Form Automation- Default drop-down and order reference field empty ',function() 
    {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get('select').select('-- Choose --')
        cy.get('#email').should('have.id','email').type('kathealba19@gmail.com')
        cy.get('#message').type('hello')
        const filepath = 'images/download.png'
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('.filename').contains('download.png')
        cy.contains('Send').click()
    })

    it('Contact Form Automation- Webmaster drop-down and attach a .docx ',function() 
    {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get('select').select('Webmaster')
        cy.get('#email').should('have.id','email').type('kathealba19@gmail.com')
        cy.get('#id_order').should('have.id','id_order').type('A123')
        cy.get('#message').type('hello')
        const filepath = 'images/readme.docx'
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('.filename').contains('readme.docx')
        cy.contains('Send').click()
    })
    it('Contact Form Automation- Webmaster drop-down and attach a .pdf ',function() 
    {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get('select').select('Webmaster')
        cy.get('#email').should('have.id','email').type('kathealba19@gmail.com')
        cy.get('#id_order').should('have.id','id_order').type('A123')
        cy.get('#message').type('hello')
        const filepath = 'images/readme.pdf'
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('.filename').contains('readme.pdf')
        cy.contains('Send').click()
    })
    it('Contact Form Automation- Webmaster drop-down and attach a .jpeg ',function() 
    {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get('select').select('Webmaster')
        cy.get('#email').should('have.id','email').type('kathealba19@gmail.com')
        cy.get('#id_order').should('have.id','id_order').type('A123')
        cy.get('#message').type('hello')
        const filepath = 'images/test2.jpeg'
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('.filename').contains('test2.jpeg')
        cy.contains('Send').click()
    })
    it('Contact Form Automation- Customer service drop-down and type special character on email field ',function() 
    {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get('select').select('Customer service')
        cy.get('#email').should('have.id','email').type('%%%@gmail.com')
        cy.get('#id_order').should('have.id','id_order').type('A123')
        cy.get('#message').type('hello')
        const filepath = 'images/test2.jpeg'
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('.filename').contains('test2.jpeg')
        cy.contains('Send').click()
    })

    it('Contact Form Automation- Customer service drop-down and type numbers on email field ',function() 
    {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get('select').select('Customer service')
        cy.get('#email').should('have.id','email').type('33333@gmail.com')
        cy.get('#id_order').should('have.id','id_order').type('A123')
        cy.get('#message').type('hello')
        const filepath = 'images/test2.jpeg'
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('.filename').contains('test2.jpeg')
        cy.contains('Send').click()
    })

    it('Contact Form Automation- Customer service drop-down and special characters on the reference number ',function() 
    {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get('select').select('Customer service')
        cy.get('#email').should('have.id','email').type('kathe@gmail.com')
        cy.get('#id_order').should('have.id','id_order').type('A123##')
        cy.get('#message').type('hello')
        const filepath = 'images/test2.jpeg'
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('.filename').contains('test2.jpeg')
        cy.contains('Send').click()
    })

    it('Contact Form Automation- Customer service drop-down and type blank spaces on email field ',function() 
    {
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        cy.get('select').select('Customer service')
        cy.get('#email').should('have.id','email').type('%%@gm.  l')
        cy.get('#id_order').should('have.id','id_order').type('A123')
        cy.get('#message').type('hello')
        const filepath = 'images/test2.jpeg'
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('.filename').contains('test2.jpeg')
        cy.contains('Send').click()
    })

})