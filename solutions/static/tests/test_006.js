window.addEventListener('DOMContentLoaded', async () => {

  mocha.setup('bdd');
  mocha.checkLeaks();

  chai.should();

  describe('Your HTML template', () => {
    it('should have four list items in an unordered list', () => {
      document
        .querySelectorAll(':not(#mocha) > ul > li')
        .should.have.length(4);
    });
    it('should have "Kim" as first item', () => {
      document
        .querySelector(':not(#mocha) > ul > li:nth-child(1)')
        .should.have.trimmed.text('Kim');
    });
    it('should have "Paz" as second item', () => {
      document
        .querySelector(':not(#mocha) > ul > li:nth-child(2)')
        .should.have.trimmed.text('Paz');
    });
    it('should have "Talia" as third item', () => {
      document
        .querySelector(':not(#mocha) > ul > li:nth-child(3)')
        .should.have.trimmed.text('Talia');
    });
    it('should have "Anima" as fourth item', () => {
      document
        .querySelector(':not(#mocha) > ul > li:nth-child(4)')
        .should.have.trimmed.text('Anima');
    });
  });

  mocha.run();
});
