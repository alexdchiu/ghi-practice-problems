window.addEventListener('DOMContentLoaded', async () => {

  mocha.setup('bdd');
  mocha.checkLeaks();

  chai.should();

  describe('Your HTML template', () => {
    it('should show the user\'s email address as "noor@example.com"', () => {
      document
        .querySelector(':not(#mocha) > p.email')
        .should.have.trimmed.text("noor@example.com");
    });
    it('should not show the message "Not logged in"', () => {
      document
        .querySelectorAll(':not(#mocha) > p.message')
        .should.have.length(0);
    });
  });

  mocha.run();
});
