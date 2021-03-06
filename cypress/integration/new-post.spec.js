context('New post', () => {
    beforeEach(() => {
        cy.visit('/post');
    });

    it('New post Navigation success', () => {
        cy.get('[id=new-post]').click();
        cy.url().should('eq', 'http://localhost:3000/post/newPost')
    });
});
