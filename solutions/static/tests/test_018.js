window.addEventListener('DOMContentLoaded', async () => {

  mocha.setup('bdd');
  mocha.checkLeaks();

  chai.should();

  describe('Your HTML template', () => {
    it('should show the error message in white', () => {
      document
        .querySelector(':not(#mocha) > .error')
        .should.have.style('color', 'rgb(255, 255, 255)');
    });
    it('should show the error message with a background color of red', () => {
      document
        .querySelector(':not(#mocha) > .error')
        .should.have.style('background-color', 'rgb(255, 0, 0)');
    });
    it('should have show the error message with bold font', () => {
      document
        .querySelector(':not(#mocha) > .error')
        .should.have.style('font-weight', '700');
    });
  });

  mocha.run();
});
