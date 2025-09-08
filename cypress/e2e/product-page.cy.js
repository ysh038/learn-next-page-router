const { THREE_PRODUCT_ITEMS } = require("../fixtures");

describe('상품 페이지', () => { 
    beforeEach(() => {
        // 준비
        // 매 단위 테스트 진행 마다 항상 실행
        cy.visit('/');
    })

    it('페이지에 진입하면 상품 목록이 표시된다.', () => {
        cy.get('[data-cy="product-item"]').should('be.visible');
        // cy.getBtCy('product-item');
    })

    it('네비게이션바의 장바구니 링크를 클릭하면 장바구니 페이지로 이동한다.', () => {
        // cy.get('[data-cy="cart-link"]').click();

        // action -> interaction
        cy.getBtCy('cart-link').click();

        // assertion -> 보장
        // cy.url().should('include', '/cart');
        cy.getBtCy('cart-header').should('be.visible');
    })

    it('상품 목록의 아이템을 클릭하면 상품 상세 페이지로 이동한다.', () => {
        // cy.get('a').first().click()

        // action -> interaction
        cy.getBtCy('product-item').first().click()      
        
        // assertion -> 보장
        cy.url().should('include', '/products/');
    })

    it('상품 목록이 3개면 화면에 상품이 3개 표시된다.', () => {
        // assertion
        // prepare & action
        cy.intercept('/products', THREE_PRODUCT_ITEMS).as('getProducts')
        cy.visit('/')
        cy.wait('@getProducts')

        // assertion
        cy.getBtCy('product-item').should('have.length', 3)

    })
})