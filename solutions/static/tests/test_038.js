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
    it('should have a light gray background for the body tag', () => {
      document
        .querySelector('body')
        .should.have.style('background-color', 'rgb(248, 248, 248)');
    });
    it('should have a light gray background for the html tag', () => {
      document
        .querySelector('html')
        .should.have.style('background-color', 'rgb(248, 248, 248)');
    });
  });
  describe('Each name card', () => {
    it('should have the name in bold', () => {
      document
        .querySelector('.name-grid-name')
        .should.have.style('font-weight', '700');
    });
    it('should have a box shadow', () => {
      const card = document.querySelector('.name-grid > .name-grid-entry');
      const style = window.getComputedStyle(card);
      style.getPropertyValue('box-shadow').should.not.equal('none');
    });
    it('should have 12px padding', () => {
      document
        .querySelector('.name-grid > .name-grid-entry')
        .should.have.style('padding', '12px');
    });
  });

  mocha.run();
});
