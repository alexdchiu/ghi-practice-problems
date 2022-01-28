window.addEventListener('DOMContentLoaded', async () => {

  mocha.setup('bdd');
  mocha.checkLeaks();

  chai.should();

  describe('Your HTML template', () => {
    it('should not show a user\'s email address', () => {
      document
        .querySelectorAll(':not(#mocha) > p.email')
        .should.have.length(0);
    });
    it('should show the message "Not logged in"', () => {
      document
        .querySelector(':not(#mocha) > p.message')
        .should.have.trimmed.text("Not logged in");
    });
  });

  mocha.run();
});
