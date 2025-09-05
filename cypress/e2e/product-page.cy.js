describe('상품 페이지', () => { 
    it('페이지에 진입하면 상품 목록이 표시된다.', () => {
        cy.visit('/');
        cy.get('[data-cy="product-item"]').should('be.visible');
        // cy.getBtCy('product-item');
    })
})