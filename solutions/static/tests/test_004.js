window.addEventListener('DOMContentLoaded', async () => {

  mocha.setup('bdd');
  mocha.checkLeaks();

  chai.should();

  describe('Your HTML template', () => {
    it('should not show the message', () => {
      document
        .querySelector('main')
        .innerText
        .should.not.contain('show_information is true', 'Should not see the message');
    });
  });

  mocha.run();
});
