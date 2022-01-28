window.addEventListener('DOMContentLoaded', async () => {

  mocha.setup('bdd');
  mocha.checkLeaks();

  chai.should();

  describe('Your HTML template', () => {
    it('should have the title "Problem 002"', () => {
      document.querySelector('html > head > title').should.have.text("Problem 002");
    });
    it('should have a lang="en" attribute on the html tag', () => {
      document.querySelector('html').should.have.attr('lang')
    });
  });

  mocha.run();
});
