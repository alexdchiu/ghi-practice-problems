window.addEventListener('DOMContentLoaded', async () => {

  mocha.setup('bdd');
  mocha.checkLeaks();

  chai.should();

  describe('Your HTML template', () => {
    it('should have two list items in an ordered list', () => {
      document
        .querySelectorAll(':not(#mocha) > ol > li')
        .should.have.length(2);
    });
    it('should have "Talia" as list item #1', () => {
      document
        .querySelector(':not(#mocha) > ol > li:nth-child(1)')
        .should.have.trimmed.text('Talia');
    });
    it('should have "Anima" as list item #2', () => {
      document
        .querySelector(':not(#mocha) > ol > li:nth-child(2)')
        .should.have.trimmed.text('Anima');
    });
  });

  mocha.run();
});
