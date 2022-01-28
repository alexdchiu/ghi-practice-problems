window.addEventListener('DOMContentLoaded', async () => {

  mocha.setup('bdd');
  mocha.checkLeaks();

  chai.should();

  describe('Your HTML template', () => {
    it('should have four list items in an ordered list', () => {
      document
        .querySelectorAll(':not(#mocha) > ol > li')
        .should.have.length(4);
    });
    it('should have "Kim" as list item #1', () => {
      document
        .querySelector(':not(#mocha) > ol > li:nth-child(1)')
        .should.have.trimmed.text('Kim');
    });
    it('should have "Paz" as list item #2', () => {
      document
        .querySelector(':not(#mocha) > ol > li:nth-child(2)')
        .should.have.trimmed.text('Paz');
    });
    it('should have "Talia" as list item #3', () => {
      document
        .querySelector(':not(#mocha) > ol > li:nth-child(3)')
        .should.have.trimmed.text('Talia');
    });
    it('should have "Anima" as list item #4', () => {
      document
        .querySelector(':not(#mocha) > ol > li:nth-child(4)')
        .should.have.trimmed.text('Anima');
    });
  });

  mocha.run();
});
