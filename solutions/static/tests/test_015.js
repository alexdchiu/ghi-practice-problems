window.addEventListener('DOMContentLoaded', async () => {

  mocha.setup('bdd');
  mocha.checkLeaks();

  chai.should();

  describe('Your HTML template', () => {
    it('should show the error message in red', () => {
      document
        .querySelector(':not(#mocha) > .error')
        .should.have.style('color', 'rgb(255, 0, 0)');
    });
  });

  mocha.run();
});
