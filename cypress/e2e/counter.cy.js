describe('first', () => { 
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    it('페이지에 진입하면 카운터가 0으로 표시된다.', () => {
        // cy.get('[data-cy=counter]').contains(0);
        cy.getBtCy('counter').contains(0);
    })
    it('플러스 버튼을 누르면 카운터 1이 증가된다.', () => {
        cy.getBtCy('add-button').click();
        cy.getBtCy('counter').contains(1);
    })
    it('마이너스 버튼을 누르면 카운터 1이 감소된다.', () => {
        cy.getBtCy('sub-button').click();
        cy.getBtCy('counter').contains(-1);
    })
 })