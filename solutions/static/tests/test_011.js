window.addEventListener('DOMContentLoaded', async () => {

  mocha.setup('bdd');
  mocha.checkLeaks();

  chai.should();

  describe('Your HTML template', () => {
    it('should have three list items in an unordered list', () => {
      document
        .querySelectorAll(':not(#mocha) > ul > li')
        .should.have.length(3);
    });
    it('should have "Kim" as the first list item', () => {
      document
        .querySelector(':not(#mocha) > ul > li:nth-child(1)')
        .should.have.trimmed.text('Kim');
    });
    it('should have "Talia" as the second list item', () => {
      document
        .querySelector(':not(#mocha) > ul > li:nth-child(2)')
        .should.have.trimmed.text('Talia');
    });
    it('should have "Anima" as the third list item', () => {
      document
        .querySelector(':not(#mocha) > ul > li:nth-child(3)')
        .should.have.trimmed.text('Anima');
    });
  });

  mocha.run();
});
