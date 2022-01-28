window.addEventListener('DOMContentLoaded', async () => {

  mocha.setup('bdd');
  mocha.checkLeaks();

  chai.should();

  describe('Your HTML template', () => {
    it('should have four list items', () => {
      document
        .querySelector(':not(#mocha) > li:nth-child(1)')
        .should.have.length(4);
    });
    it('should apply "grey" class to "Kim"', () => {
      document
        .querySelector(':not(#mocha) > li:nth-child(1)')
        .should.have.class('grey');
    });
    it('should not apply "grey" class to "Paz"', () => {
      document
        .querySelector(':not(#mocha) > li:nth-child(2)')
        .should.not.have.class('grey');
    });
    it('should apply "grey" class to "Talia"', () => {
      document
        .querySelector(':not(#mocha) > li:nth-child(3)')
        .should.have.class('grey');
    });
    it('should not apply "grey" class to "Anima"', () => {
      document
        .querySelector(':not(#mocha) > li:nth-child(4)')
        .should.not.have.class('grey');
    });
  });

  mocha.run();
});
