window.addEventListener('DOMContentLoaded', async () => {

  mocha.setup('bdd');
  mocha.checkLeaks();

  chai.should();

  describe('Your HTML template', () => {
    it('should have 26 rows in the tbody', () => {
      document
        .querySelectorAll(':not(#mocha) tbody tr')
        .should.have.length(26);
    });
  });

  mocha.run();
});
