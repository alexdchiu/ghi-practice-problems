window.addEventListener('DOMContentLoaded', async () => {

  mocha.setup('bdd');
  mocha.checkLeaks();

  chai.should();

  describe('Your HTML template', () => {
    it('should layout the names in a grid', () => {
      document
        .querySelector('.name-grid')
        .should.have.style('display', 'grid');
    });
    it('should have four equally-sized columns in the grid', () => {
      const grid = document.querySelector('.name-grid');
      const style = window.getComputedStyle(grid);
      const columns = style.getPropertyValue('grid-template-columns');
      const entries = columns.split(' ');
      entries.should.have.length(4);
      for (let i = 0; i < 3; i += 1) {
        const left = Number.parseFloat(entries[i]);
        const right = Number.parseFloat(entries[i + 1]);
        left.should.be.closeTo(right, 0.1);
      }
    });
    it('should have an 18px gap', () => {
      document
        .querySelector('.name-grid')
        .should.have.style('gap', '18px');
    });
  });

  mocha.run();
});
