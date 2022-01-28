window.addEventListener('DOMContentLoaded', async () => {

  mocha.setup('bdd');
  mocha.checkLeaks();

  const should = chai.should();

  describe('Your HTML template', () => {
    it('should have 26 rows in the tbody', () => {
      document
        .querySelectorAll(':not(#mocha) tbody tr')
        .should.have.length(26);
    });
    it('should have 3 column headers in the thead', () => {
      document
        .querySelectorAll(':not(#mocha) thead th')
        .should.have.length(3);
    });
    it('should have "Name" as the first column header', () => {
      should.exist(document.querySelector(':not(#mocha) thead th:nth-child(1)'));
      document
        .querySelector(':not(#mocha) thead th:nth-child(1)')
        .should.have.trimmed.text("Name");
    });
    it('should have "Age" as the second column header', () => {
      should.exist(document.querySelector(':not(#mocha) thead th:nth-child(2)'));
      document
        .querySelector(':not(#mocha) thead th:nth-child(2)')
        .should.have.trimmed.text("Age");
    });
    it('should have "Pronouns" as the third column header', () => {
      should.exist(document.querySelector(':not(#mocha) thead th:nth-child(3)'));
      document
        .querySelector(':not(#mocha) thead th:nth-child(3)')
        .should.have.trimmed.text("Pronouns");
    });
  });

  mocha.run();
});
